+++
date = '2025-02-19T20:49:18+08:00'
draft = false
title = 'Colab Unsloth SFT 快速训练！'
comments = true
tags = ['AI','计算机科学']
+++

# 序言
大部分人的GPU都没有训练AI的显存要求，而谷歌Colab完全可以解决这一点

谷歌Colab可以让你免费使用谷歌的服务器4个小时左右来进行训练

并且是一个Jupyter Notebook环境

这是它的地址： [https://colab.research.google.com/](https://colab.research.google.com/)

这是Unsloth的训练笔记本： [https://colab.research.google.com/drive/1Ys44kVvmeZtnICzWz0xgpRnrIOjZAuxp](https://colab.research.google.com/drive/1Ys44kVvmeZtnICzWz0xgpRnrIOjZAuxp)

# 准备工作
谷歌Colab可以直接通过谷歌账号登录

登录完毕后就可以开始了

## 修改代码
首先先不要急着运行运行时，先修改一下笔记本的代码

### 模型下载

首先，修改第二个代码框的这一部分：
```python
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "unsloth/Meta-Llama-3.1-8B", # 修改这里
    max_seq_length = max_seq_length,
    dtype = dtype,
    load_in_4bit = load_in_4bit,
    # token = "hf_...", # use one if using gated models like meta-llama/Llama-2-7b-hf
)
```

将需要修改的部分修改为你要使用的模型，可以直接使用Hugging Face库名

### 数据集准备

前往笔记本中的 `Data Prep` 部分，修改代码

```python
def formatting_prompts_func(examples):
    instructions = examples["instruction"]
    inputs       = examples["input"]
    outputs      = examples["output"]
    texts = []
    for instruction, input, output in zip(instructions, inputs, outputs):
        # Must add EOS_TOKEN, otherwise your generation will go on forever!
        text = alpaca_prompt.format(instruction, input, output) + EOS_TOKEN
        texts.append(text)
    return { "text" : texts, }
pass   # 以上大部分内容都需要根据数据集修改以符合格式

from datasets import load_dataset
dataset = load_dataset("yahma/alpaca-cleaned", split = "train") # 改为你要使用的数据集和Split
dataset = dataset.map(formatting_prompts_func, batched = True,)
```

为了符合平日训练的需求，我将使用一个典型的SFT训练数据集来进行修改操作

[LooksJuicy/ruozhiba](https://hf-mirror.com/datasets/LooksJuicy/ruozhiba)

此数据集不寻常的点在于他没有Prompt字段，因此，我们需要对代码进行适当修改

此数据集有两个字段，instruction 与 output

instruction 在代码中可以对应到input亦或者instruction

在此例子中，我将会将代码对应到input并留空instruction [你也可以添加一个通用的instruction]

由于部分数据集修改极其麻烦，你可以借助AI进行修改，我推荐ChatGPT或者Kimi的非1.5版本

在此例子中，代码的修改很简单，但需要对instruction字段进行处理

修改后整体代码:

```python
alpaca_prompt = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
{}

### Input:
{}

### Response:
{}"""

EOS_TOKEN = tokenizer.eos_token  # Must add EOS_TOKEN

def formatting_prompts_func(examples):
    instructions = examples["instruction"]
    outputs = examples["output"]
    texts = []
    for instruction, output in zip(instructions, outputs):
        # 留空instruction 字段将input放入input，output同上
        text = alpaca_prompt.format("", instruction, output) + EOS_TOKEN
        texts.append(text)
    return {"text": texts}

from datasets import load_dataset
dataset = load_dataset("LooksJuicy/ruozhiba", split="train")
dataset = dataset.map(formatting_prompts_func, batched=True)
```

现在数据集就处理完毕了，为了上传到Hugging Face，你必须填入token 

### 修改上传部分

修改 Saving, loading finetuned models 的部分

如果你愿意可以使用Inference部分进行推理，现在可以直接跳到 Saving to float16 for VLLM 部分

```python
# Merge to 16bit
if False: model.save_pretrained_merged("model", tokenizer, save_method = "merged_16bit",)
if False: model.push_to_hub_merged("hf/model", tokenizer, save_method = "merged_16bit", token = "")

# Merge to 4bit
if False: model.save_pretrained_merged("model", tokenizer, save_method = "merged_4bit",)
if False: model.push_to_hub_merged("hf/model", tokenizer, save_method = "merged_4bit", token = "")

# Just LoRA adapters
if False: model.save_pretrained_merged("model", tokenizer, save_method = "lora",)
if False: model.push_to_hub_merged("hf/model", tokenizer, save_method = "lora", token = "")
```
16bit那里可以保存为16bit模型，4bit则是4位模型，你也可以只存储lora适配器，但需要上传到单独的库，否则会发生冲突

将hf/model改为 你的用户名/模型名 的格式，例如：`safe049/llama-3-ruozhiba`

将token内的值设置为你的Hugging Face Token的值，请确保你的token有访问和写入权限

将你要导出的部分的False改为True即可上传

加入要上传16bit而不保存至colab服务器内，代码如下：
```python
# Merge to 16bit
if False: model.save_pretrained_merged("model", tokenizer, save_method = "merged_16bit",)
if True: model.push_to_hub_merged("hf/model", tokenizer, save_method = "merged_16bit", token = "")

```

你还可以保存为GGUF，对于低显存显卡，这是必要的

在GGUF / llama.cpp Conversion部分的修改与完整模型的上传类似，修改模型名与token，这里我建议上传16bit GGUF与q4_k_m GGUF，修改后代码如下：
```python
# Save to 8bit Q8_0
if False: model.save_pretrained_gguf("model", tokenizer,)
# Remember to go to https://huggingface.co/settings/tokens for a token!
# And change hf to your username!
if False: model.push_to_hub_gguf("hf/model", tokenizer, token = "")

# Save to 16bit GGUF
if False: model.save_pretrained_gguf("model", tokenizer, quantization_method = "f16")
if True: model.push_to_hub_gguf("hf/model", tokenizer, quantization_method = "f16", token = "")

# Save to q4_k_m GGUF
if False: model.save_pretrained_gguf("model", tokenizer, quantization_method = "q4_k_m")
if True: model.push_to_hub_gguf("hf/model", tokenizer, quantization_method = "q4_k_m", token = "")

# Save to multiple GGUF options - much faster if you want multiple!
if False:
    model.push_to_hub_gguf(
        "hf/model", # Change hf to your username!
        tokenizer,
        quantization_method = ["q4_k_m", "q8_0", "q5_k_m",],
        token = "",
    )
```

现在所有代码修改都完毕了，可以开始训练

# 训练

你可以从头到尾参照Unsloth的文本说明，将代码框上类似播放按钮的按键按下来运行代码

将会完成依赖安装，模型下载，数据集准备与下载，参数调整，训练与上传的过程

注意Train the model下，你可以按需调整此部分第一个代码框中的元参数

`trainer_stats = trainer.train()` 将会开始训练过程，如果你发现loss的降低不再明显甚至开始增加，你也可以终止此代码框的运行，模型状态仍会保存

此时，如果你想要推理，可按照说明在 Inference 部分进行推理

其后，运行Saving to float16 for VLLM与GGUF / llama.cpp Conversion部分，上传模型即可

然后我们就完事了

# 总结
Unsloth可以让你在小显存的GPU上快速训练AI模型，他还支持更多的训练方式，如DPO和DeepSeek的GRPO模式

Colab也是一个好用的平台，但对网络环境要求略高且要求科学上网，建议使用稳定的网络训练

import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CHwO5ruA.js";import{a as h,p as c,o as d,c as m,w as a,f as g,r as e,g as n,h as s}from"./app-lnvSK4e4.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DdUr69YB.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BjvJDd9d.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DAUYaIJt.js";import"./post-BtNelvXa.js";const _=n("h2",{id:"哈喽各位好",tabindex:"-1"},[s("哈喽各位好 "),n("a",{class:"header-anchor",href:"#哈喽各位好","aria-label":'Permalink to "哈喽各位好"'},"​")],-1),f=n("p",null,[s("最近火车头突然就火了 所以我就想蹭蹭热度【"),n("s",null,"虽然没蹭到"),s("】 那么怎么蹭呢，我就拿出了opencv想着整个字符动画 【我的B站视频】"),n("a",{href:"https://www.bilibili.com/video/BV1z4vaeMEX6",target:"_blank",rel:"noreferrer"},"火车头，但是字符动画")],-1),k=n("p",null,"但是我之前一直都是在Windows上做的这东西，之前我换了 Arch Linux,根本不知道怎么整，然后我就去问了问AI【专业抄代码】",-1),v=n("p",null,"经过很久的调试，整出来了！",-1),y=n("p",null,"首先，各位先准备好这些",-1),b=n("h2",{id:"依赖",tabindex:"-1"},[s("依赖 "),n("a",{class:"header-anchor",href:"#依赖","aria-label":'Permalink to "依赖"'},"​")],-1),x=n("p",null,"C++",-1),C=n("ol",null,[n("li",null,"视频文件"),n("li",null,"OpenCV"),n("li",null,"OpenCV所需依赖"),n("li",null,"任意IDE【我用VScode】"),n("li",null,"耐心")],-1),F=n("h2",{id:"开始",tabindex:"-1"},[s("开始 "),n("a",{class:"header-anchor",href:"#开始","aria-label":'Permalink to "开始"'},"​")],-1),A=n("p",null,"想当然首先我们需要导入一些库【我假设你已经装好依赖了】 所以…",-1),z=n("div",{class:"language-C++ vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"C++"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#include"),n("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," <opencv2/opencv.hpp>")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#include"),n("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," <iostream>")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#include"),n("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," <chrono>")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#include"),n("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," <thread>")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#include"),n("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," <cmath>"),n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#include"),n("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," <cstring>")])])]),n("button",{class:"collapse"})],-1),P=n("p",null,"定义命名空间",-1),$=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"using namespace cv;")]),s(`
`),n("span",{class:"line"},[n("span",null,"using namespace std;")])])]),n("button",{class:"collapse"})],-1),w=n("p",null,"我们在制作ASCII 动画，所以这是字符表",-1),B=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'const char* char_list = " .,-\'`:!1+*abcdefghijklmnopqrstuvwxyz<>()/{}[]?234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ%&@#$";')]),s(`
`),n("span",{class:"line"},[n("span",null,"int len = strlen(char_list);")])])]),n("button",{class:"collapse"})],-1),E=n("h2",{id:"主函数",tabindex:"-1"},[s("主函数 "),n("a",{class:"header-anchor",href:"#主函数","aria-label":'Permalink to "主函数"'},"​")],-1),O=n("p",null,"我将在注释中解释作用，不过我不懂OpenCV, 很多地方我也没法解释",-1),V=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"int main() {")]),s(`
`),n("span",{class:"line"},[n("span",null,'    VideoCapture cap("/home/dynamo/Videos/AtrainCHAR/atrain.mp4"); // 这里放你的视频文件')]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (!cap.isOpened()) {        // 打开视频")]),s(`
`),n("span",{class:"line"},[n("span",null,'        cerr << "Error: Could not open video." << endl;  // 如果没法打开视频，报错')]),s(`
`),n("span",{class:"line"},[n("span",null,"        return -1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Mat frame, frame_resize, frame_gray;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    double fps = cap.get(CAP_PROP_FPS); ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cap.read(frame); // 读取帧数保证动画时长与视频相符")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (frame.empty()) break; ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        resize(frame, frame_resize, Size(300, 90)); ")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cvtColor(frame_resize, frame_gray, COLOR_BGR2GRAY);  // 转化为灰度")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'        string txt = "";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        int height = frame_gray.rows;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int width = frame_gray.cols;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int y = 0; y < height; y++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            for (int x = 0; x < width; x++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                uchar pixel = frame_gray.at<uchar>(y, x); // 看不懂思密达")]),s(`
`),n("span",{class:"line"},[n("span",null,"                ")]),s(`
`),n("span",{class:"line"},[n("span",null,"                float normalized_pixel = log1p(pixel) / log1p(255.0f);  ")]),s(`
`),n("span",{class:"line"},[n("span",null,"                int idx = static_cast<int>(normalized_pixel * len);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                if (idx >= len) idx = len - 1; // 索引字符列表以保证输出全部字符")]),s(`
`),n("span",{class:"line"},[n("span",null,"                txt += char_list[idx];")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            txt += '\\n';")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cout << txt; // 输出")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cout.flush();  // 每次播放下一帧前清屏")]),s(`
`),n("span",{class:"line"},[n("span",null,"       ")]),s(`
`),n("span",{class:"line"},[n("span",null,"        this_thread::sleep_for(chrono::milliseconds(static_cast<int>(1000 / fps)));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ")]),s(`
`),n("span",{class:"line"},[n("span",null,'        cout << "\\033[2J";  // 移动光标')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")])])]),n("button",{class:"collapse"})],-1),R=n("p",null,"你只需要修改视频路径即可，其他无需修改",-1),S=n("h2",{id:"源代码",tabindex:"-1"},[s("源代码 "),n("a",{class:"header-anchor",href:"#源代码","aria-label":'Permalink to "源代码"'},"​")],-1),I=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#include <opencv2/opencv.hpp>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include <iostream>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include <chrono>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include <thread>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include <cmath> ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include <cstring> ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"using namespace cv;")]),s(`
`),n("span",{class:"line"},[n("span",null,"using namespace std;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'const char* char_list = " .,-\'`:!1+*abcdefghijklmnopqrstuvwxyz<>()/{}[]?234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ%&@#$";')]),s(`
`),n("span",{class:"line"},[n("span",null,"int len = strlen(char_list); ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"int main() {")]),s(`
`),n("span",{class:"line"},[n("span",null,'    VideoCapture cap("/home/dynamo/Videos/AtrainCHAR/atrain.mp4");')]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (!cap.isOpened()) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        cerr << "Error: Could not open video." << endl;')]),s(`
`),n("span",{class:"line"},[n("span",null,"        return -1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Mat frame, frame_resize, frame_gray;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    double fps = cap.get(CAP_PROP_FPS); ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cap.read(frame);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (frame.empty()) break; ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        resize(frame, frame_resize, Size(300, 90)); ")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cvtColor(frame_resize, frame_gray, COLOR_BGR2GRAY); ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'        string txt = "";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        int height = frame_gray.rows;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int width = frame_gray.cols;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int y = 0; y < height; y++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            for (int x = 0; x < width; x++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                uchar pixel = frame_gray.at<uchar>(y, x);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                ")]),s(`
`),n("span",{class:"line"},[n("span",null,"                float normalized_pixel = log1p(pixel) / log1p(255.0f);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                int idx = static_cast<int>(normalized_pixel * len);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                if (idx >= len) idx = len - 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                txt += char_list[idx];")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            txt += '\\n';")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cout << txt;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        cout.flush(); ")]),s(`
`),n("span",{class:"line"},[n("span",null,"       ")]),s(`
`),n("span",{class:"line"},[n("span",null,"        this_thread::sleep_for(chrono::milliseconds(static_cast<int>(1000 / fps)));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ")]),s(`
`),n("span",{class:"line"},[n("span",null,'        cout << "\\033[2J"; ')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"collapse"})],-1),D=n("h2",{id:"写在最后",tabindex:"-1"},[s("写在最后 "),n("a",{class:"header-anchor",href:"#写在最后","aria-label":'Permalink to "写在最后"'},"​")],-1),L=n("p",null,"以Konsole终端为例，你应该把字体大小调整到合适大小 否则会显示一些奇形怪状的东西 B站的画质压缩也很逆天 没别的了 下一站见",-1),U={__name:"linux-ASCII-Animation",setup(G,{expose:o}){const i=JSON.parse('{"title":"Linux 上制作字符动画","description":"","frontmatter":{"title":"Linux 上制作字符动画","date":"2024-08-02T09:00:44.000Z","tags":["Linux","C++"],"categories":"原创"},"headers":[{"level":2,"title":"哈喽各位好","slug":"哈喽各位好","link":"#哈喽各位好","children":[]},{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"主函数","slug":"主函数","link":"#主函数","children":[]},{"level":2,"title":"源代码","slug":"源代码","link":"#源代码","children":[]},{"level":2,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}],"relativePath":"pages/posts/linux-ASCII-Animation.md","path":"/home/dynamo/Valaxy/valaxy-0.19.7/bzblog/pages/posts/linux-ASCII-Animation.md","lastUpdated":null}'),p=h(),t=i.frontmatter||{};return p.meta.frontmatter=Object.assign(p.meta.frontmatter||{},i.frontmatter||{}),c("pageData",i),c("valaxy:frontmatter",t),globalThis.$frontmatter=t,o({frontmatter:{title:"Linux 上制作字符动画",date:"2024-08-02T09:00:44.000Z",tags:["Linux","C++"],categories:"原创"}}),(l,T)=>{const r=u;return d(),m(r,{frontmatter:g(t)},{"main-content-md":a(()=>[_,f,k,v,y,b,x,C,F,A,z,P,$,w,B,E,O,V,R,S,I,D,L]),"main-header":a(()=>[e(l.$slots,"main-header")]),"main-header-after":a(()=>[e(l.$slots,"main-header-after")]),"main-nav":a(()=>[e(l.$slots,"main-nav")]),"main-content":a(()=>[e(l.$slots,"main-content")]),"main-content-after":a(()=>[e(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(l.$slots,"main-nav-after")]),comment:a(()=>[e(l.$slots,"comment")]),footer:a(()=>[e(l.$slots,"footer")]),aside:a(()=>[e(l.$slots,"aside")]),"aside-custom":a(()=>[e(l.$slots,"aside-custom")]),default:a(()=>[e(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{U as default};

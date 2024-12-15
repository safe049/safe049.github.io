echo "Dysprosium" | figlet
hugo build
rm -rf ~/d0blog/public/
echo "Removed public"
git clone https://github.com/safe049/safe049.github.io
cd ~/d0blog/safe049.github.io
rm -rf ~/d0blog/safe049.github.io/*
git add .
git commit -m "pruned"
git push --set-upstream main
cp -r public/ ~/d0blog/safe049.github.io
echo "Copied files to repo"
cd ~/d0blog/safe049.github.io
git branch -m main
git add .
git commit -m "Deploy"
git push --set-upstream site main
echo "Pushed"

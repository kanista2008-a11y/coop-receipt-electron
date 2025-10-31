# หมายเหตุเกี่ยวกับโฟลเดอร์ .github
Finder บน macOS จะ "ซ่อน" โฟลเดอร์ที่ขึ้นต้นด้วยจุด เช่น `.github`
ให้กดปุ่มลัด `Command + Shift + .` เพื่อสลับ **แสดง/ซ่อนไฟล์ที่ซ่อนอยู่**
หรือดูผ่าน Terminal ด้วยคำสั่ง `ls -la` ก็ได้

โฟลเดอร์ `.github/workflows/win-build.yml` สำคัญสำหรับ GitHub Actions
ให้ push โฟลเดอร์นี้ขึ้นรีโพด้วยคำสั่ง:
  git add .github/workflows/win-build.yml
  git commit -m "add windows workflow"
  git push
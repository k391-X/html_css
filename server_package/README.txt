HƯỚNG DẪN DEMO PROJECT

1. Đảm bảo trong thư mục gốc đã có "dist/" (sinh ra từ npm run build).
2. Copy cả folder dist/ vào cùng cấp với server_package/.
3. Mở "start.bat" để chạy server, trình duyệt sẽ mở http://localhost:3000.
4. Nếu muốn dừng server, chạy "stop.bat".

Tạo EXE từ Python bằng PyInstaller

Cài PyInstaller nếu chưa có:

pip install pyinstaller


Build EXE:

pyinstaller --onefile server.py
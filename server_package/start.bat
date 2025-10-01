@echo off
echo === Chay Python Server Demo ===

REM 1. Chạy server.exe
start "" server.exe

REM 2. Chờ 2 giây để server khởi động
timeout /t 2 >nul

REM 3. Kiểm tra nếu ../dist tồn tại thì xóa
if exist ..\dist (
    echo Xoa thu muc ../dist cu...
    rmdir /s /q ..\dist
)

REM 4. Copy dist hien tai sang ../dist
echo Copy thu muc dist hien tai sang ../dist
xcopy /e /i /y dist ..\dist

REM 5. Mở trình duyệt
start http://localhost:3000

exit

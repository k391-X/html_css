# server.py
import http.server
import socketserver

PORT = 3000
DIRECTORY = "dist"  # thư mục build từ Vite

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server đang chạy tại http://localhost:{PORT}")
    print("Nhấn Ctrl+C để dừng server.")
    httpd.serve_forever()

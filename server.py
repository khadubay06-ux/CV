import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = int(os.environ.get('PORT', 3000))

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    root = os.path.dirname(os.path.abspath(__file__))
    os.chdir(root)

    server = HTTPServer(('0.0.0.0', PORT), Handler)
    print(f'Serving portfolio on http://0.0.0.0:{PORT}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
        server.server_close()

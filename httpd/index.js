1. 'use strict';
2.
3. let http = require('http');
4.
5. http.createServer((request, response) => {
6. request.on('end', () => {
7. console.log('Request method: ' + request.method);
8. console.log('Request url: ' + request.url);
9. });
10.
11. // 傳送 HTTP header
12. // HTTP Status: 200 : OK
13. // Content Type: text/plain
14. response.writeHead(200, {
15. 'Content-Type': 'text/plain'
16. });
17.
18. // 傳送回應內容。
19. response.end('Hello World!\n');
20. }).listen(8088);
21.
22. // log message to Console
23. console.log('Server running at http://127.0.0.1:8088/');

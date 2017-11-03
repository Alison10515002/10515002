1. 'use strict';
2.
3. let http = require('http');
4.
5. http.createServer((request, response) => {
6. let fs = require('fs');
7. let postData = ''; // POST 資料
8.
9. // 利⽤ 'data' event 消耗掉 data chunk;
10. // 'end' event 才會被 fired
11. request.on('data', (chunk) =>
12. postData += chunk;
13.
14. console.log(
15. ' 接收的 POST data ⽚段 k: [' + chunk + '].'
16. );
17. });
18.
19. request.on('end', () => {
20. switch (request.url) {
21. case '/':
22. fs.readFile('../htdocs/index.html', (err, data) => {
23. if (err) {
24. console.log(' 檔案讀取錯誤');
25. }
26. else {
27. response.writeHead(200, {
28. 'Content-Type': 'text/html'
29. });
30.
31. response.write(data);
32. response.end();
33. }
34. });
35.
36. break;
37.
38. default:
39. console.log(' 未定義的存取: ' + request.url);
40.
41. response.end();
42.
43. break;
44. }
45. });
46. }).listen(8088);
47.
48. // log message to Console
49. console.log(' 伺服器啓動，連線 url: http://127.0.0.1:8088/');

####Установка:
npm install

####Запуск:
npm run start

####Прием звонка с АПИ Мегафон:
1. Маршрут (post) /call/receive (поменять можно в routes/call.js)
2. Логи пишутся в файл /src/logs/call.log

####Настройка порта:
1. /bin/www
2. Поменять порт можно в строке: var port = normalizePort(process.env.PORT || '3000');

####Docker reference:
DockerHub: dmitry8912/devio:line_sockets_stable

Or you may use a Dockerfile via "docker build -t tag ." command
Then run "docker run -p 3000:3000 tag" to startup containter based on the locally stored images

####EsLint
1. Пожалуйста, проверяйте командой:
"eslint src/" и исправляйте ошибки перед тем как пушить на сервер

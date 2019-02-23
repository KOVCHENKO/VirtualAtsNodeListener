Установка:
npm install

Запуск:
npm run start

Прием звонка с АПИ Мегафон:
1. Маршрут (post) /call/receive (поменять можно в routes/call.js)
2. Логи пишутся в файл /src/logs/call.log

Настройка порта:
1. /bin/www
2. Поменять порт можно в строке: var port = normalizePort(process.env.PORT || '3000');

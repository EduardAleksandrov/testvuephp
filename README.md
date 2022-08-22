[![HTML Version](https://img.shields.io/badge/HTML5-f06529)](https://developer.mozilla.org/en-US/)
[![CSS3 Version](https://img.shields.io/badge/CSS3-2965f1)](https://developer.mozilla.org/en-US/)
[![Javascript Version](https://img.shields.io/badge/JS-f0db4f)](https://developer.mozilla.org/en-US/)
[![SCSS Version](https://img.shields.io/badge/SCSS-ff7518)](https://sass-lang.com/)
[![Node Version](https://img.shields.io/badge/Node.js-16.4.2-blue)](https://nodejs.org/en/)
[![Vue Version](https://img.shields.io/badge/Vue.js-3-CC2336)](https://vuejs.org/)
[![VueRouter Version](https://img.shields.io/badge/Vue-Router-CC2336)](https://router.vuejs.org/)
[![Vuex Version](https://img.shields.io/badge/Vuex-CC2336)](https://vuex.vuejs.org/)
[![PHP Version](https://img.shields.io/badge/PHP-8.1-2347cc)](https://www.php.net/)
[![MySQL Version](https://img.shields.io/badge/MySQL-8.0-06639d)](https://www.mysql.com/)
[![Docker-compose Version](https://img.shields.io/badge/Docker-Compose-237acc)](https://www.docker.com/)
---


# vue-php-mysql-project

### Посмотреть задание
Смотреть [Задание](./TASK.md).

## Запуск проекта
```
Требуется установленные программы: 
- docker
- docker-compose
- node.js 16.4.2

Для запуска потребуется освободить порты:
- 80, 3306, 8095, 9000 
```

### Запуск backend 
```
В терминале переходим к папке backend-pr и запускаем:
- docker-compose up

Далее в браузере открываем phpMyAdmin:
- http://localhost:8095
- Пишем логин - root, пароль - password
- Выбираем базу данных - dbase
- Импортируем базу из файла по пути - backend-pr/sql/dbase.sql

Backend развернут.

Если изменений в базе не видно, то перезапустите docker:
    Чтобы остановить контейнеры запускаем:
    - docker-compose down
    Запускаем заново:
    - docker-compose up
```

### Запуск frontend 
```
В новом терминале переходим к папке frontend и запускаем: 
- npm install

Далее запускаем:
- npm run serve

Переходим по ссылке:
- http://localhost:8080

Проект развернут.
```



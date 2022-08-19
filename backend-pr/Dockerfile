FROM php:8.1.8-fpm-alpine3.16
WORKDIR /var/www/
RUN docker-php-ext-install pdo pdo_mysql pcntl mysqli
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY ./composer.json /var/www
RUN composer install
COPY . .
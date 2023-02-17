# MSK-Apart

## Тех стек

- backend: Laravel 10
- frontend: Next.js
- database: MySQL

## Запуск проекта

Клонировать репозиторий

```shell
git clone
```

Установить зависимости

```shell
cd apps/backend
composer install

cd apps/frontend
yarn install
```

Создать файл .env

```shell
cp .env.example .env
```

Собрать проект

```shell
cd apps/backend
php artisan key:generate
php artisan migrate

cd apps/frontend
yarn build
```

Запустить проект (DEV)

```shell
cd apps/backend
php artisan serve

cd apps/frontend
yarn dev
```




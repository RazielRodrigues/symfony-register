mysql://b0817db7aec7bc:5ad28eb6@us-cdbr-east-05.cleardb.net/heroku_6e46b6c258abfc4?reconnect=true

web: heroku-php-apache2 public/

"compile": [
    "php bin/console doctrine:database:create --if-not-exists",
    "php bin/console doctrine:migrations:migrate "
]
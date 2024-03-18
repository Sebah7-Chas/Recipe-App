FROM php:8.2.0

# Install curl and add NodeSource PPA
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | bash -

# Install MariaDB client, Node.js, npm, git, and unzip
RUN apt-get install -y mariadb-client git unzip nodejs \ 
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install php-mysql driver
RUN docker-php-ext-install mysqli pdo pdo_mysql

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
# PGAdmin

https://computingforgeeks.com/how-to-install-pgadmin4-on-debian/ 

sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list'

sudo apt update

sudo apt install pgadmin4

sudo /usr/pgadmin4/bin/setup-web.sh

sudo ufw allow http

sudo ufw allow https

http://[ServerIP_or_domain]/pgadmin4


https://noviello.it/es/como-instalar-pgadmin4-en-ubuntu-20-04-lts/ 

https://tableplus.com/blog/2018/10/how-to-create-superuser-in-postgresql.html

CREATE ROLE rolename LOGIN SUPERUSER PASSWORD 'passwordstring';

CREATE USER is equivalent to CREATE ROLE except that CREATE USER assumes LOGIN by default, while CREATE ROLE does not.
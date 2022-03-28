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
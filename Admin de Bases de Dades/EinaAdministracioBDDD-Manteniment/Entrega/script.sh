#!/bin/sh

hostname='localhost'

echo "0 11 * * * /var/tmp/pagila/script.sh" | tee -a /var/spool/cron/root

pathfilename="/var/tmp/pagila/${hostname}_pagila_${date}.dump"

echo $pathfilename

pg_dump -Fc pagila > $pathfilename

gzip $pathfilename > $pathfilename.gz

if [ "$?" -eq 0 ]

then
	echo "Enviando correo electrónico..." | mail -s "Backup completado"
chasekid03@gmail.com

else
	exit 1
fi

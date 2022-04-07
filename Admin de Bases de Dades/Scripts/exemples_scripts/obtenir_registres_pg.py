#!/usr/bin/python3
# PREVIS
# pip install psycopg2-binary
# https://www.postgresqltutorial.com/postgresql-python/connect/

import psycopg2

try:
	conn = psycopg2.connect("dbname='training' user='user1' host='localhost' password='user1'")
	cur = conn.cursor()
	cur.execute("SELECT * from oficina where ofinum>%s",(12,))
	rows = cur.fetchall()
	for row in rows:
		print (row)

	print ("\n","Un altre cop")
    # o més "pur python":
	print(*rows, sep="\n", end="\n"*3)
	
except:
	print ("No és possible connectar a la Base de Dades")

# filtre_aire.awk

# Awk is a scripting language used for manipulating data and generating reports. The awk command programming language requires no compiling and allows the user to use variables, numeric functions, string functions, and logical operators.

# Té la potència de filtrar i tractar línies de sed o grep, i alhora la potència d'un llenguatge de programació. Condicionals, bucles, variables, funcions auxiliars, variables predefinides. Fins i tot pot "rebre paràmetres", a la crida li podem passar varlos a algunes variables.

# Filtramos las filas
# Cada fila que se printa, sólo saldrán algunos campos

BEGIN {
    FS = ","                # Field separator
    OFS = ";"               # Output field separator
    j = 0
}

/V/ { 	#Para todos los registros que contengan la V


# Creamos un IF para el NUMBER OF RECORDS sea mayor a 1.

if ( NR>1 ){

# Inicializamos una MATRIZ con un FOR con índice i=0 y j=0, el índice sea menor o igual a 23, incrementamos el contador.

# Definimos la variable col = columna, para tener solo las columnas que queremos.
# Contador, # la 3a a la 7a columna separadas por "-" y por último el número de columna.

    for (i = 0; i <= 23; i++) {
        col = 2 * (i + 1) + 6
        print j,$3,$4,$5,$6,$7"-"$8"-"$9 " " i":00", $col
	j = j + 1
    }
}
}

# NR: Constante que indica Number of Records

# NF: Number of fields

# Para llamar el AWK: awk -f filtre_aire.awk aire.csv 

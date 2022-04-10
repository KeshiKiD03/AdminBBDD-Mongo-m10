# filtre_aire.awk

# Filtrem les files
# Però de cada fila primtem només alguns camps

BEGIN {
    FS = ","                # Field separator
    OFS = ";"               # Output field separator
    j = 0
}

/V/ { 	#per tots els registres que continguin "V"

if ( NR>1 ){
		
    for (i = 0; i <= 23; i++) {
        col = 2 * (i + 1) + 6
        print j,$3,$4,$5,$6,$7"-"$8"-"$9 " " i":00", $col
	j = j + 1
    }
}
}

# NR: constante que indica Number of Records
# NF: Number of fields
# Per cridar-la: awk -f filtre_aire.awk aire.csv 

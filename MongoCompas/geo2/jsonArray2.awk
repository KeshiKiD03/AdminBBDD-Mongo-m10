BEGIN {
	linia=""
}


$0!="}" {
	linia = linia $0
}

$0=="}" {
	print linia $0
	linia = ""
}



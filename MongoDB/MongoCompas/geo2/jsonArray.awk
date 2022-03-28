BEGIN {
	print "["
}

/^}/ {
	print "},"
}

!/^}/ {
	print 
}


END {
	print "]"
}
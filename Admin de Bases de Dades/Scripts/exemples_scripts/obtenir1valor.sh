CURRENT_ID=$(psql -P t training -c "select max(ofinum) from oficina")
let NEXT_ID=CURRENT_ID+1
echo "next ofinum is $NEXT_ID"

echo "about to reset ofinum sequence on other database"
#$PSQL -X -U $DEV_USER $DEV_DB -c "alter sequence oficina.ofinum restart with $NEXT_ID"

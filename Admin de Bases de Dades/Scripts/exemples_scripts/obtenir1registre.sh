read ofinum ciudad region objetivo ventas <<< $(psql \
    -X \
    -d training \
    --single-transaction \
    --set ON_ERROR_STOP=on \
    --no-align \
    -t \
    --field-separator ' ' \
    --quiet \
    -c "select ofinum, ciudad, region, objetivo, ventas from oficina order by ofinum desc limit 1")

echo "Darrera oficina:"
echo "ofinum: $ofinum, ciudad: $ciudad, region: $region, objetivo: $objetivo, ventas: $ventas"


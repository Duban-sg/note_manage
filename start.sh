
echo "BAJANDO SERVICIOS COMPOSE"
docker compose down

sleep 5

echo "ELIMINANDO CONTENEDORES EXISTENTES"
docker rm $(docker ps -a "note-dock" -q)

sleep 5

echo "ELIMINANDO IMAGENES EXISTENTES"
docker rmi $(docker images -a "note-dock*" -q)

sleep 5

echo "LEVANTANDO COMPONSE"
docker compose up

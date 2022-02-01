!bin/bash

echo "Iniciando :)..."
docker network create library-network
docker run --name fronted-catalog --network=library-network -d -p 81:80 frontend-catalog-image
docker run --name fronted-reviews --network=library-network  -d -p 82:80 frontend-reviews-image
docker run --name fronted-store --network=library-network -d -p 80:80 frontend-store-image
docker run --name mysql-library --network=library-network -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d -v mysql-library-vol:/var/lib/mysql mysql:8.0.27
docker run --name backend-catalog --network=library-network -d -p 8081:8081 backend-catalog-image
docker run --name=mongodb-reviews --network=library-network -d -p 27017:27017 -v mongodb-reviews-vol:/data/db mongo:5.0.5
docker run --name backend-reviews --network=library-network -d -p 3000:3000 backend-reviews-image
docker run --name backend-store --network=library-network -d -p 8082:8082 backend-store-image
echo "Finalizau :)..."


echo "PORT=$PORT"
git fetch origin && git reset --hard origin/main && git clean -f -d
GATEWAY_PORT=$PORT docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d
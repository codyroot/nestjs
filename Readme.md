- Docker container dev mit node_modules update

# Docker
## Docker ohne readonly file system
- docker run -v $(pwd):/usr/src/app -p 5000:5000 nestjs
## Docker mit readonly file system
- docker run -v $(pwd):/usr/src/app:ro -p 5000:5000 nestjs
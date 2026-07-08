pipeline {
    agent any

    environment {
        DOCKER_API_VERSION = '1.40'
    }

    tools {
        nodejs 'Node18'
        dockerTool 'Dockertool'
    }

    stages {

        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
    steps {
        sh '''
            echo "=== Versión de Node ==="
            node -v

            echo "=== Versión de npm ==="
            npm -v

            echo "=== Contenido de node_modules/.bin ==="
            ls -la node_modules/.bin

            echo "=== Permisos de Jest ==="
            ls -l node_modules/.bin/jest

            chmod +x node_modules/.bin/jest || true

            echo "=== Versión de Jest ==="
            npx jest --version

            echo "=== Ejecutando pruebas ==="
            npx jest
        '''
    }
}

        stage('Construir Imagen Docker') {
            steps {
                sh 'docker build -t hola-mundo-node:latest .'
            }
        }

        stage('Ejecutar Contenedor Node.js') {
            steps {
                sh '''
                    docker stop hola-mundo-node || true
                    docker rm hola-mundo-node || true

                    docker run -d --name hola-mundo-node -p 3000:3000 hola-mundo-node:latest
                '''
            }
        }
    }
}
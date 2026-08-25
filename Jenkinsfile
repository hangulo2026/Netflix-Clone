pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                echo 'Repositorio clonado correctamente'
            }
        }

        stage('Verificar archivos') {
            steps {
                bat 'dir'
            }
        }

        stage('Despliegue') {
            steps {
                echo 'Despliegue realizado correctamente'
            }
        }
    }
}

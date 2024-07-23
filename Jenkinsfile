pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/AyaanHyder/small-project.git'
            }
        }
        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
                        env.PATH = "${nodeHome}/bin:${env.PATH}"
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
                        env.PATH = "${nodeHome}/bin:${env.PATH}"
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
        stage('Test Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to the server...'
            }
        }
    }
}

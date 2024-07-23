pipeline {
    agent any
    tools {
        // Define the name of your NodeJS installation as configured in Jenkins
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/AyaanHyder/small-project.git'
            }
        }
        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        // Ensure Node.js is available
                        def nodeHome = tool name: 'NodeJS', type: 'NodeJS installations'
                        env.PATH = "${nodeHome}/bin:${env.PATH}"
                        // Install dependencies for the backend
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        // Ensure Node.js is available
                        def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
                        env.PATH = "${nodeHome}/bin:${env.PATH}"
                        // Install dependencies and build the frontend
                        bat 'npm install'
                        bat 'npm run build'
                    }
                }
            }
        }
        stage('Test Backend') {
            steps {
                dir('backend') {
                    // Run backend tests
                    bat 'npm test'
                }
            }
        }
        stage('Test Frontend') {
            steps {
                dir('frontend') {
                    // Run frontend tests
                    bat 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                // Placeholder for deployment steps
                echo 'Deploying to the server...'
            }
        }
    }
    post {
        always {
            // Cleanup steps or notifications after pipeline execution
            echo 'Cleaning up...'
        }
    }
}

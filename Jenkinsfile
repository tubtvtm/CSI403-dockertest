pipeline {
    agent any
    
    stage ('AUTOMATION TEST'){
  container('robotframework') {
    script {
      sh """
        robot --nostatusrc -F robot -L TRACE -P libs -v DEVICE:* sit_tests
        rebot --nostatusrc --removekeywords all -l NONE -r NONE -o output.xml output.xml
      """
    }
    }
    



    }
    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo "Checkout repository..."
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        userRemoteConfigs: [[
                            credentialsId: 'tubtvtm',
                            url: 'https://github.com/tubtvtm/CSI403-dockertest.git'
                        ]],
                    ])
                    echo "Checkout Success"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo "Building Docker Image..."
                    bat "docker build -t csi401-frontend ."
                    echo "Docker Build Image Success"
                }
                echo "Running Docker Container..."
                bat "docker rm -f csi401-frontend-run || true"
                bat "docker run -d --name csi401-frontend-run -p 57100:3000 csi401-frontend:latest"
                echo "Docker Image to Running Container Success"
            }
        }

        stage('Testing') {
            steps {
                script {
                    echo "Running Tests"
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         script {
        //             echo "Deploying Image"
        //         }
        //     }
        // }
    }
}


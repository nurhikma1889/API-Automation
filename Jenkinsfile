pipeline {
    agent {
        label 'jenkins-slave2'
    }
    stages{
        stage('Install Dependencies'){
            steps{
                sh "npm install"
            }
        }

        stage('Running Test'){
            steps{
                sh "npm run test"
            }

            post{
                always{
                    publishHTML target : [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'reports',
                        reportFiles: 'api_automation_report.html',
                        reportName: 'API Automation Report',
                        reportTitles: 'API TEST REPORT'
                    ] 
                }
            }
        }
    }
    post{
        always{
            echo "Finish"
        }
    }
}

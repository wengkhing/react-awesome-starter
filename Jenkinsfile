pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Installing package..'
                slackSend color: "good", message: "Build Started - ${env.JOB_NAME} #${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
                configFileProvider([configFile(fileId: '7d096847-ee16-41e4-8da2-8b3ee605def8', targetLocation: '.env')]) {}
                sh '''#!/bin/bash -l
                rm -rf node_modules/
                yarn --pure-lockfile
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh '''#!/bin/bash -l
                yarn s3dev:publish
                '''
            }
        }
    }
    post {
        always {
            sh 'rm -rf ./build/'
        }
        success {
            slackSend color: "good", message: "Build SUCCESS - ${env.JOB_NAME} #${env.BUILD_NUMBER} after ${currentBuild.durationString} (<${env.BUILD_URL}|Open>)"
        }
        failure {
            slackSend color: "danger", message: "Build FAILED - ${env.JOB_NAME} #${env.BUILD_NUMBER} after ${currentBuild.durationString} (<${env.BUILD_URL}|Open>)"
        }
    }
}



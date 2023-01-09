pipeline {
  agent any
  stages {
    stage('install playwright') {
      steps {
        bat '''
          npm i
          npx playwright install
        '''
      }
    }
/*     stage('help') {
      steps {
        bat 'npx playwright test --help'
      }
    } */
    stage('test') {
      steps {
        bat 'npx playwright test chain_test'
      }
/*       post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          bat 'rm -rf *.png'
        }
      } */
    }
    stage('Reports') {
      steps {
          allure([
          includeProperties: false,
          jdk: '',
          properties: [[key: 'Browser', value: 'Chrome']],
          reportBuildPolicy: 'ALWAYS',
          results: [[path: 'allure-results']]
        ])
      }
    }
  }
}
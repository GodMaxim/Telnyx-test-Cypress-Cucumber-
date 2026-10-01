const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/results', 
    reportPath: 'cypress/results/html', 
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local test machine',
        platform: { name: 'ubuntu', version: 'latest' }
    }
});
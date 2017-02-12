var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
            options: {
                handler:****
            }
        }
    },
    lambda_deploy: {
        default: {
            arn: ***,
            options: {
                accessKeyId:***,
                secretAccessKey:***,
                region:'us-west-2',
                timeout : 10,
                memory: 256
            }
        }
    },
    lambda_package: {
        default: {
            options: {
                // Task-specific options go here.
            }
        }
    }
});



const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

//创建一个gulp任务 start
gulp.task('start', function() {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
});

//创建默认任务
gulp.task('default', ['start'], function() {

});

const gulp    = require('gulp');
const spawn   = require('child_process').spawn;

let node;

gulp.task('devenv', () => {
  process.env.NODE_ENV = 'development';
  process.env.DEBUG = 'lilianeevictor:*';
});

gulp.task('server', () => {
  if(node) node.kill();
  node = spawn('node', ['bin/www'], {stdio: 'inherit'});
  node.on('close', code => {
    if(code === 0) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(['./app.js', './routes/**/*.js'], ['server']);
})

gulp.task('dev', ['devenv', 'server', 'watch'])
gulp.task('default', ['dev']);

process.on('exit', () => {
  if(node) node.kill();
});
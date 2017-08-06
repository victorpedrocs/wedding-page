const gulp    = require('gulp');
const gutil = require('gulp-util');
const spawn   = require('child_process').spawn;
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');

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

gulp.task('bundle', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({colos:true}));
    done();
  })
});

gulp.task('watch', () => {
  gulp.watch(['./app.js', './routes/**/*.js'], ['server']);
  gulp.watch(['src/js/*.js', 'src/style/**/*.scss', 'src/fonts/**/*.scss'], ['bundle']);
});

gulp.task('dev', ['devenv', 'server','bundle', 'watch']);
gulp.task('default', ['dev']);

process.on('exit', () => {
  if(node) node.kill();
});
import path from 'path';
export default {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],
  testPaths : ['__test__/*.test.js'],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  scssAssets: ['src/scss/**/*.scss'],
  mainScss: 'src/scss/index.scss',
  devServerPort : 8234,
  webpack : {
    module: {
      loaders: [
        {test: /\.rt$/, loaders: ['react-templates-loader?targetVersion=0.14.0'], include: path.join(__dirname, 'src')}
      ]
    }
  }
}

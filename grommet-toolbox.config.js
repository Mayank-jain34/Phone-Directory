import path from 'path';
export default {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  devServerPort : 8234,
  webpack : {
    module: {
      loaders: [
        {test: /\.rt$/, loaders: ['react-templates-loader?targetVersion=0.14.0'], include: path.join(__dirname, 'src')}
      ]
    }
  }
}

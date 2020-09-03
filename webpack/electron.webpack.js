const path = require('path');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  entry: path.resolve(rootPath, 'electron', 'main.ts'),
  target: 'electron-main',
  
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        
          loader: 'babel-loader',
        },
      }
    ],
  },
  
    __dirname: false,
  },
  
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js',
  },
};

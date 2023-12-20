module.exports = {
    apps : [
      {
        name: 'API-MAIN',
        script: './api/index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'API-MYSQL',
        script: './mysql/index-mysql.js',
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'API-POST',
        script: './post/index-post.js',
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ],
  };
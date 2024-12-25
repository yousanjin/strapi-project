module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '8.137.35.177'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'yousanjin'),
      user: env('DATABASE_USERNAME', 'yousanjin'),
      password: env('DATABASE_PASSWORD', 'yuwei1991'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
 // url: 'https://strapi-backend-dsm.herokuapp.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f460e3fd153d4a424c149dae6074a58e'),
    },
  },
});

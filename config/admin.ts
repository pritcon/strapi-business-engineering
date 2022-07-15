export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb41aad2190939d5ee730b865a3da469'),
  },
});

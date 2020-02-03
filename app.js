require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
}).catch((error) => {
  console.log(error);
});

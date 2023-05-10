const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mock-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const response = router.db.get('login');
  res.json(response);
});

server.use(router);
server.listen(5001, () => {
  console.log('JSON Server is running on port 5001');
});

// index.js


const SocketService = require("./SocketService");


 /* Create Server from http module.
  If you use other packages like express, use something like,*/

  const app = require("express")();
  const server = require("http").Server(app);  

app.listen(8000, function() {
  console.log('listening on 8000');
  const socketService = new SocketService();
  socketService.attachServer(server);
});

app.get('/api', (req, res) => {     
  res.send('Terminal Server is Running!') 
});




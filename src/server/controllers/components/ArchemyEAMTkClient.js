const net = require('net');

const client = new net.Socket();
client.connect(9898, '127.0.0.1', function* () {
  console.log('Connected');
  client.write('http://localhost:9898/ArchemyEAMTkServer?process_id=1?task_id=8');
  yield;
});

client.on('data', function* (data) {
  console.log(`Received: ${data}`);
  client.destroy(); // kill client after server's response
  yield;
});

client.on('close', function* () {
  console.log('Connection closed');
  yield;
});

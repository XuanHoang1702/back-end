module.exports = {
    onConnection: (ws) => {
      console.log('Client đã kết nối');
  
      ws.on('message', (message) => {
        console.log('Nhận từ client:', message);
        ws.send(`Server phản hồi: ${message}`);
      });
  
      ws.on('close', () => {
        console.log('Client đã ngắt kết nối');
      });
    },
  };
  
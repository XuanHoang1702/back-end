const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const UserRoute = require('./routes/UserRoute');
const AddressRoute = require('./routes/AddressRoutes');
const BrandRoute = require('./routes/BrandRoutes');
const CategoryRoute = require('./routes/CategoryRoute');
const ProductRoute = require('./routes/ProductRoute');
const HeaderRoute = require('./routes/HeaderRoute');
const FooterRoute = require('./routes/FooterRoute');
const ProductImageRoute = require('./routes/ProductImageRoute');
const OrderRoute = require('./routes/OrderRoutes');
const OrderDetailRoute = require('./routes/OrderDetailRoutes');
const LikedRoute = require('./routes/LikedRoutes');
const ReviewRoute = require('./routes/ReviewRoutes');
const DiscountRoute = require('./routes/DiscountRoutes');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/users', UserRoute);
app.use('/address', AddressRoute);
app.use('/brand', BrandRoute);
app.use('/categories', CategoryRoute);
app.use('/products', ProductRoute);
app.use('/header', HeaderRoute);
app.use('/footer', FooterRoute);
app.use('/product_image', ProductImageRoute);
app.use('/order', OrderRoute);
app.use('/order_detail', OrderDetailRoute);
app.use('/liked', LikedRoute);
app.use('/review', ReviewRoute);
app.use('/discount', DiscountRoute);

wss.on('connection', (ws) => {
    console.log('Client đã kết nối');
    ws.send('Chào mừng đến WebSocket server!');
    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message.toString());
            console.log('Nhận từ client:', parsedMessage);
            ws.send(`Server nhận được: ${JSON.stringify(parsedMessage)}`);
        } catch (err) {
            console.error('Lỗi khi xử lý message:', err.message);
            ws.send('Dữ liệu không hợp lệ!');
        }
    });
    ws.on('close', () => {
        console.log('Client đã ngắt kết nối');
    });
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

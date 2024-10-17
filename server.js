const express = require('express');
const path = require('path');
const webRoute = require('./routes/webRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Thiết lập EJS là view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Thiết lập thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng router
app.use('/', webRoute);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

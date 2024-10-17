// AboutController.js
exports.index = (req, res) => {
    res.render('about', { title: 'Giới Thiệu', content: 'Thông tin về chúng tôi' });
};

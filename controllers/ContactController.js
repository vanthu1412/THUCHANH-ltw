// ContactController.js
exports.index = (req, res) => {
    res.render('contact', { title: 'Liên Hệ', content: 'Thông tin liên hệ' });
};

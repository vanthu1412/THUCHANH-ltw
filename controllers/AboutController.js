// AboutController.js
export const renderAbout = (req, res) => {
    const username = req.session.username;
    res.render('about', { title: 'Giới Thiệu', content: 'Thông tin về chúng tôi', username, title: 'Về chúng tôi' });
};

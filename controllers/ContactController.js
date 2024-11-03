// ContactController.js
export const renderContact = (req, res) => {
    const username = req.session.username;
    res.render('contact', { title: 'Liên Hệ', content: 'Thông tin liên hệ', username, title:'Liên hệ' });
};

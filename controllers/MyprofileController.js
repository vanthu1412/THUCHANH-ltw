import db from '../config/db.js';

export const renderMyProfile = async (req, res) => {
    const username = req.session.username;
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    console.log(rows); // Log the retrieved data
    res.render('myProfile', {users: rows[0], title: 'Hồ Sơ Của Tôi', username}); // Change rows to rows[0]
};

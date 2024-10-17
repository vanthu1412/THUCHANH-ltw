// routes/webRoute.js
const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const AboutController = require('../controllers/AboutController');
const ContactController = require('../controllers/ContactController');

// Định nghĩa các route
router.get('/', HomeController.index);
router.get('/about', AboutController.index);
router.get('/contact', ContactController.index);

module.exports = router;

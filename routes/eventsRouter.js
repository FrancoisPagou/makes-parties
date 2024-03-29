const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../utils/uploadMiddleware');

router.get('/', async (req, res) => {
    eventController.getAllEvents(req, res);
});
router.get('/events', async (req, res) => {
    eventController.getAllEvents(req, res);
});

// NEW
router.get('/events/new', (req, res) => {
    eventController.getCreateEventForm(req, res);
});

// CREATE
router.post('/events', upload.single('imgUrl'), async (req, res) => {
    eventController.createEvent(req, res);
});

// SHOW
router.get('/events/:id', async (req, res) => {
    eventController.showEvent(req, res);
});

// EDIT
router.get('/events/:id/edit', async (req, res) => {
    eventController.getEditEventForm(req, res);
});

// UPDATE
router.put('/events/:id', upload.single('imgUrl'), async (req, res) => {
    await eventController.updateEvent(req, res);
});

// DELETE
router.delete('/events/:id', async (req, res) => {
    eventController.deleteEvent(req, res);
});

module.exports = router;
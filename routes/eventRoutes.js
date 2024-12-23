const express = require('express');
const { GetEvents, AddEvent, UpdateEvent, DeleteEvent } = require('../controllers/eventHandlers');
const EventsRouter = express.Router();

// Event Management API definitions
EventsRouter.get('/', GetEvents);
EventsRouter.post('/', AddEvent);
EventsRouter.patch('/:id', UpdateEvent);
EventsRouter.delete('/:id', DeleteEvent);

module.exports = {
    EventsRouter
};
import express from 'express'
import eventController from '../controllers/event-controller.js'
var eventRouter = express.Router()

// GET /api/events
eventRouter.get('/', function(req, res) {
  eventController.getAllEvents(req, res)
})

// GET /api/customers/:event_id
eventRouter.get('/:event_id', function(req, res) {
  eventController.getEventByID(req, res)
})

// POST /api/events
eventRouter.post('/', function(req, res) {
  eventController.postEvent(req, res)
})


// DELETE /api/events/:event_id
eventRouter.delete('/:event_id', function(req, res) {
  eventController.deleteEventByID(req, res)
})

export default eventRouter

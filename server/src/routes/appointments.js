const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

// All routes are protected by auth middleware
router.use(auth);

// Create a new appointment
router.post('/', appointmentController.createAppointment);

// Get all appointments for logged-in user
router.get('/', appointmentController.getUserAppointments);

// Provider-specific routes
router.get('/provider', appointmentController.getProviderAppointments);
router.patch('/:id/provider-status', appointmentController.updateProviderAppointmentStatus);
router.get('/:id/customer-details', appointmentController.getCustomerDetails);

// Update appointment status (for customers)
router.patch('/:id/status', appointmentController.updateAppointmentStatus);

// Delete an appointment
router.delete('/:id', appointmentController.deleteAppointment);

// Reschedule an appointment
router.put('/:id/reschedule', appointmentController.rescheduleAppointment);

module.exports = router; 
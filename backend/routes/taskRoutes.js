const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware'); // ✅ make sure path is correct

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController'); // ✅ make sure these functions are exported

// Routes
router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.put('/:id', auth, updateTask); // ❗this is the line that caused the error
router.delete('/:id', auth, deleteTask);

module.exports = router;

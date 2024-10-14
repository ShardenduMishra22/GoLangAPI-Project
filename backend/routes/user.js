// userRoutes.js
import express from 'express';
import { registerUser, getUserPreferences, updateUserPreferences } from '../controllers/userController.js';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to get user preferences
router.get('/:id/preferences', getUserPreferences);

// Route to update user preferences
router.put('/:id/preferences', updateUserPreferences);


export default router;
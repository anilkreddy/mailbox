import express from 'express';
import AuthController from '../controllers/AuthController';
import { validateUser } from '../middleware/authenticate';

import UserController from '../controllers/UserController';
import MessageController from '../controllers/MessageController';

const router = express.Router();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);
router.get('/auth/me', validateUser, AuthController.me);
router.get('/auth/logout', validateUser, AuthController.logout);

router.get('/users', validateUser, UserController.getAllUsers);

router.get('/messages', validateUser, MessageController.getAllMessage);
router.get('/messages/:id', validateUser, MessageController.getMessage);
router.get('/messages/:id/read', validateUser, MessageController.readMessage);
router.get(
  '/messages/:id/delete',
  validateUser,
  MessageController.deleteMessage
);
router.post('/messages', validateUser, MessageController.createMessage);

export default router;

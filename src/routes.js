import { Router } from 'express';

import authController from './controllers/authController';
import petController from './controllers/petController';
import tasksController from './controllers/tasksController';

import protectedRouteMiddleware from './middlewares/protectedRoute';

const router = Router();

router.use('/auth', authController); // rota pública

router.use(protectedRouteMiddleware); // middleware de rota protegida

router.use('/pet', petController); // rotas privadas
router.use('/tasks', tasksController);

export default router;

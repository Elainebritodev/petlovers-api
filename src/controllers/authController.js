import { Router } from 'express';

import RegisterRequestDTO from '../dtos/RegisterRequestDTO';

import LoginRequestDTO from '../dtos/LoginRequestDTO';

import User from '../models/User';

import AuthRepository from '../repository/authRepository';

import AuthoService from '../service/authService';

// Injeção de dependências (Dependency Injection)

const authRepository = new AuthRepository(User);
const authService = new AuthoService(authRepository);

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    const body = new RegisterRequestDTO(req.body);
    const userResponse = await authService.register(body);

    // chamar o service
    res.status(201).json(userResponse);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const body = new LoginRequestDTO(req.body);
    const loginResponse = await authService.login(body);
    res.status(200).json(loginResponse);
  } catch (error) {
    next(error);
  }
});

export default router;

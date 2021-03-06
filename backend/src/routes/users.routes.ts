import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    user.password = '';

    res.status(201).json(user);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default usersRouter;

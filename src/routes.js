import { Router } from 'express';

const routes = new Router();

routes.post('/users', UserController.store);

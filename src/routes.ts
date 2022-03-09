import { Router } from 'express';
import CreateTagController from './controllers/CreateTagController';
import CreateUserController from './controllers/CreateUserController';
import CreateCategoryController from './controllers/CreateCategoryController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createCategoryController = new CreateCategoryController();

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);
router.post('/category', createCategoryController.handle);

export default router;

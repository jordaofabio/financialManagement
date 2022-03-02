import { Router } from 'express';
import CreateTagController from './controllers/CreateTagController';
import CreateUserController from './controllers/CreateUserController';
import CreateCategoryController from './controllers/CreateCategoryController';
import CreateSubcategoryController from './controllers/CreateSubcategoryController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createCategoryController = new CreateCategoryController();
const createSubcategoryController = new CreateSubcategoryController();

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);
router.post('/category', createCategoryController.handle);
router.post('/subcategory', createSubcategoryController.handle);

export default router;

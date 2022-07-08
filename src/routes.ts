import { Router } from 'express';
import CreateTagController from './controllers/CreateTagController';
import CreateUserController from './controllers/CreateUserController';
import CreateCategoryController from './controllers/CreateCategoryController';
import RouteTeste from './teste/route-teste';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createCategoryController = new CreateCategoryController();

function routeFactory(classArray: any[]) {
  for (let theClass of classArray) {
    new theClass(router);
  }
}

routeFactory([RouteTeste])

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);
router.post('/category', createCategoryController.handle);

export default router;

import { Router, Request, Response} from "express";
import * as menuController from '../controllers/menu.controller';
import * as searchController from '../controllers/search.controller';

const router = Router();

// Rotas do menu
router.get('/', menuController.home);
router.get('/dogs', menuController.dogs);
router.get('/cats', menuController.cats);
router.get('/fishes', menuController.fishes);

// Rota de pesquisa
router.get('/search', searchController.search);




export default router;
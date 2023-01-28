import { Router } from 'express';
import { controller } from './controllers/controller';
import { garagem } from './controllers/garagem';

const router: Router = Router();

router.post('/palindromo', controller.palindromo);
router.post('/troco', controller.troco);
router.get('/garagem', garagem.getGaragem);
router.post('/garagem', garagem.postGaragem);
router.delete('/garagem', garagem.deleteGaragem);

export { router }
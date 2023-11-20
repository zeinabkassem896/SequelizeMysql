import { Router } from 'express';
const router = Router();

import { getAll, getById, create, update } from '../controllers/CategoryController.js';

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);



export default router;
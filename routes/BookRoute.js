import { Router } from 'express';
const router = Router();

import { getAll, getById, create } from '../controllers/BookController.js';

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);


export default router;
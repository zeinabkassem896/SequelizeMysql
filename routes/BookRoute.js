import { Router } from 'express';
const router = Router();


import { getAll, getById, create, deleteData, fetchLBA} from '../controllers/BookController.js';

router.get('/lba', fetchLBA)
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id',deleteData)


export default router;
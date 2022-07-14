import { Router } from 'express';
import ItemsController from '../controllers/ItemsController.js';

const ItemRouter = Router();


ItemRouter.post('/create', ItemsController.CreateItem);
ItemRouter.post('/edit', ItemsController.EditItem);
ItemRouter.delete('/delete', ItemsController.DeleteItem);
ItemRouter.post('/by-id', ItemsController.GetItemById);
ItemRouter.get('/last-added', ItemsController.GetLastAddedItems);
ItemRouter.get('/tags', ItemsController.GetAllItemsTags);


export default {
    path: '/items',
    router: ItemRouter
}
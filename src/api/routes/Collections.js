import { Router } from "express";
import CollectionsController from '../controllers/CollectionsController.js';


const CollectionRouter = Router();

// CollectionRouter.get('/by-id', CollectionsController.GetCollectionById)
CollectionRouter.post('/create', CollectionsController.CreateCollection);
// CollectionRouter.patch('/edit', CollectionsController.EditCollection)
// CollectionRouter.delete('/delete', CollectionsController.DeleteCollection);
// CollectionRouter.get('/all', CollectionsController.GetAllCollections);
// CollectionRouter.get('/popular', CollectionsController.GetMostPopularCollections);


export default {
    path: '/collections',
    router: CollectionRouter
}
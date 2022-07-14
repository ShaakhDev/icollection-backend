import { AuthChecker } from "../helpers/AuthChecker.js";
import { uid } from "../modules/GenerateId.js";


export default class ItemsController {
    static async CreateItem(req, res, next) {
        try {

            const { status, message } = await AuthChecker(req);

            if (status !== 200) throw new res.error(status, message);

            const collection = await req.db.collections.findOne({
                id: req.body.collection_id
            });

            if (!collection) {
                throw new res.error(404, "Collection not found!");
            }

            const { name, author, tags, collection_id } = req.body
            console.log(name, author, tags, collection_id)
            const item = await req.db.items.create({
                name,
                author,
                tags,
                collection_id,
                // user_id,
                item_id: uid(),
                date: new Date()
            })


            res.json({
                ok: true,
                status: 200,
                message: "Item created successfully!",
                data: item
            });
        } catch (err) {
            next()
        }
    }

    static async GetItemById(req, res, next) {
        try {

        } catch (err) {

        }
    }

    static async EditItem(req, res, next) {
        try {

        } catch (err) {

        }
    }

    static async DeleteItem(req, res, next) {
        try {

        } catch (err) {

        }
    }

    static async GetLastAddedItems(req, res, next) {
        try {

            const items = await req.db.items.find({
                $sort: {
                    date: -1
                },
                $limit: 5
            })

            if (!items) {
                throw new res.error(404, "No items found!");
            }
            items.length = 5
            res.json({
                ok: true,
                status: 200,
                message: "Items found!",
                data: items
            });
        } catch (err) {

        }
    }
    static async GetAllItemsTags(req, res, next) {
        try {
            const tags = await req.db.items.distinct("tags")

            if (!tags) {
                throw new res.error(404, "No tags found!");
            }

            res.json({
                ok: true,
                status: 200,
                message: "Tags found!",
                data: tags
            });
        } catch (err) {
            next()
        }
    }


}

import { AuthChecker } from "../helpers/AuthChecker.js";
import { v2 as cloudinary } from "cloudinary";
import { uid } from "../modules/GenerateId.js";

export default class CollectionsController {
    static async GetCollectionById(req, res, next) {
        try {
            const collection = await req.db.collections.findOne({
                collection_id: req.body.collection_id
            })
            if (collection === null) {
                throw new res.error(404, "Collection not found!");
            }

            const items = await req.db.items.find({
                collection_id: req.body.collection_id
            })

            if (items === null) {
                collection.items = []
            }

            res.json({
                ok: true,
                status: 200,
                message: "Collection found!",
                data: {
                    collection,
                    items
                }
            });
        } catch (error) {
            next();
        }
    }


    static async CreateCollection(req, res, next) {
        try {
            const { status, message } = await AuthChecker(req);
            if (status !== 200) throw new res.error(status, message);
            const user = await req.db.users.findOne({
                id: req.body.user_id
            });
            if (!user) {
                throw new res.error(404, "User not found!");
            }

            if (user.status === "blocked") {
                throw new res.error(403, "User is blocked!");
            }


            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.CLOUD_KEY,
                api_secret: process.env.CLOUD_SECRET,

            });

            const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
                folder: 'collections',
            });

            const { name, description, topic, user_id } = req.body;
            console.log(name, description, topic, user_id)
            const collection = await req.db.collections.create({
                name,
                description,
                topic,
                author_id: user_id,
                author_name: user.user_name,
                image_url: result.secure_url,
                collection_id: uid(10),
                date: new Date(),
                updated_at: new Date(),
                items: [],
            })



            res.json({
                data: collection,
                ok: true,
                status: 200,
                message: "Collection created successfully!",
            });
        } catch (error) {
            next();
        }
    }

    // static async EditCollection(req, res, next) {
    //     try {

    //     } catch (error) {

    //     }
    // }

    // static async DeleteCollection(req, res, next) {
    //     try {

    //     } catch (error) {

    //     }
    // }

    static async GetMostPopularCollections(req, res, next) {
        try {
            const collection = await req.db.collections.find({
                $sort: {
                    items: 1
                }
            })

            res.json({
                ok: true,
                status: 200,
                message: "Collections found!",
                data: collection
            });
        } catch (error) {
            next();
        }
    }

    // static async GetAllCollections(req, res, next) {
    //     try {

    //     } catch (error) {

    //     }
    // }
}
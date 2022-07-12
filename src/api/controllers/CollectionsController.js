import { AuthChecker } from "../helpers/AuthChecker.js";
import { v2 as cloudinary } from "cloudinary";
import { uid } from "../modules/GenerateId.js";


export default class CollectionsController {
    // static async GetCollectionById(req, res, next) {
    //     try {

    //     } catch (error) {

    //     }
    // }


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


            const collection = await req.db.collections.create({
                user_id: req.body.user_id,
                name: req.body.name,
                description: req.body.description,
                image_url: result.secure_url,
                date: Date.now(),
                updated_at: Date.now(),
                id: uid(5),
                topic: req.body.topic
            })
            console.log(collection);



            res.json({
                ok: true,
                message: "Collection created successfully!",
                data: collection
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

    // static async GetMostPopularCollections(req, res, next) {
    //     try {

    //     } catch (error) {

    //     }
    // }

    // static async GetAllCollections(req, res, next) {
    //     try {

    //     } catch (error) {

    //     }
    // }
}
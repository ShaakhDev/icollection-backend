import { verifyJwtToken } from "../modules/jwt.js";
import { AuthChecker } from "../helpers/AuthChecker.js";

export default class CollectionsController {
    static async GetCollectionById(req, res, next) {
        try {

        } catch (error) {

        }
    }


    static async CreateCollection(req, res, next) {
        try {
            console.log(req.body)
            // const { status, message } = await AuthChecker(req);
            // if (status !== 200) throw new res.error(status, message);
            // const { data } = verifyJwtToken(req.headers["authorization"].split(" ")[1]);
            // const isUserExist = await req.db.users.findOne({
            //     id: data.id
            // });
            // console.log(data, isUserExist);


            res.json({
                ok: true,
                message: "Collection created successfully!"
            });

        } catch (error) {
            next();
        }
    }

    static async EditCollection(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async DeleteCollection(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async GetMostPopularCollections(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async GetAllCollections(req, res, next) {
        try {

        } catch (error) {

        }
    }
}
import Mongoose from "mongoose";
import DotEnv from 'dotenv'
import UsersModel from '../models/UsersModel.js'
import CollectionsModel from '../models/CollectionsModel.js'

DotEnv.config()


const DB_URI = process.env.MONGODB_URI

if (!DB_URI) {
    throw new Error("MongoDB URI not found");
}

export default async function mongodb() {
    try {
        await Mongoose.connect(DB_URI, { useUnifiedTopology: true })
        console.log("MongoDB ga ulanish hosil qilindi");

        //create database object
        let db = {}
        db.users = await UsersModel(Mongoose)
        db.collections = await CollectionsModel(Mongoose)
        return db;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
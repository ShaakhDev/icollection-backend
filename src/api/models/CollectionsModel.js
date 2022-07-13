import Mongoose from "mongoose";

export default async function CollectionsModel(Mongoose) {
    const collectionSchema = new Mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },
        collection_id: {
            type: String,
            required: true,
            unique: true,
        },
        date: {
            type: Date,
            required: true,
        },
        updated_at: {
            type: Date,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        author_id: {
            type: String,
            required: true,
        },
        author_name: {
            type: String,
            required: true,
        },
        items: [{ type: String, required: true }],

    });

    return Mongoose.model("collections", collectionSchema);
}


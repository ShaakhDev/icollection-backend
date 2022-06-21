export default async function CollectionsModel(Mongoose) {
    const collectionSchema = new Mongoose.Schema({
        collection_name: {
            type: String,
            required: true,
        },
        collection_description: {
            type: String,
            required: true,
        },
        collection_image: {
            type: String,
            required: true,
        },
        collection_id: {
            type: String,
            required: true,
            unique: true,
        },
        collection_date: {
            type: Date,
            required: true,
        },
        collection_topic: {
            type: String,
            required: true,
        },
        collection_user_id: {
            type: String,
            required: true,
        }
    });

    return Mongoose.model("collections", collectionSchema);
}
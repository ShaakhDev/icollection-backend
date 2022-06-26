export default async function ItemsModel(Mongoose) {
    const itemSchema = new Mongoose.Schema({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        tags: [{ type: String, required: true }],
        name: {
            type: String,
            required: true
        },
        image_url: {
            type: String,
        },
        date: {
            type: Date,

        },
        collection_id: {
            type: String,
            required: true,
            unique: true
        },
        user_id: {
            type: String,
            required: true
        }

    })

    return Mongoose.model("items", itemSchema);
}
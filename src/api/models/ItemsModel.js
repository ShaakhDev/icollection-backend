export default async function ItemsModel(Mongoose) {
    const itemSchema = new Mongoose.Schema({
        item_id: {
            type: String,
            required: true,
            unique: true,
        },
        tags: [{ type: String, required: true }],
        likes: [{ type: String }],
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
        },
        author: {

            type: String,

        },
        custom_string_1: {
            type: String,
        },
        custom_string_2: {
            type: String,
        },
        custom_string_3: {
            type: String,
        },
        custom_date_1: {
            type: Date,
        },
        custom_date_2: {
            type: Date,
        },
        custom_date_3: {
            type: Date,
        },
        custom_number_1: {
            type: Number,
        },
        custom_number_2: {
            type: Number,
        },
        custom_number_3: {
            type: Number,
        },
        custom_boolean_1: {
            type: Boolean,
        },
        custom_boolean_2: {
            type: Boolean,
        },
        custom_boolean_3: {
            type: Boolean,
        },
        custom_textarea_1: {
            type: String,
        },
        custom_textarea_2: {
            type: String,
        },
        custom_textarea_3: {
            type: String,
        }
    })

    return Mongoose.model("items", itemSchema);
}
import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone_number: {
            type: String,
            required: true
        },

        city_of_departure: {
            type: String,
            required: true
        },

        destination_city: {
            type: String,
            required: true
        },
    }
)

const Data = mongoose.model("Datas", DataSchema);
export default Data
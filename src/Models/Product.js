import mongoose, {Schema} from "mongoose"

// Crea el esquema del producto
const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    photo: String
})

// Exporta el esquema como un modelo
export default mongoose.model("Product", productSchema)
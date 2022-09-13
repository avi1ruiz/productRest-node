import Product from '../Models/Product.js'

export const getProducts = (req, res) => {
    Product.find( (error, data) => {
        res.json(data)
    })
}

export const getProduct = (req, res) => {
    const id = req.params.id
    Product.findById(id, (error, data) => {
        error ? res.send(error) : res.json(data)
    })
}

export const createProducts = async (req, res) => {
    const {title, description, price, photo} = req.body

    const newProduct = new Product( {title, description, price, photo} )
    try {
        await newProduct.save()
        console.log("data inserted")
    } catch (error){
        res.send(error)
    }
}

export const updateProduct = (req, res) => {
    const {title, description, price, photo} = req.body
    const id = req.params.id

    Product.findByIdAndUpdate(id, {title, description, price, photo}, (error, data) => {
        error ? res.send(error) : res.send("data updated succesfully" + data)
    })
}

export const deleteProduct = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id, (error, data) => {
        error ? res.send(error) : res.send("product deleted succesfully")
    })
}
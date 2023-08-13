const bookModel = require('../models/booksModel')
exports.bookController = async (req, res) => {
    try {
        const {name, description, author, image, price } = req.body;
        const newBook = await new bookModel({ name, description, author, image, price }).save()
        res.status(200).json({ success: true, message: "Data inserted succesfully", newBook })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error"

        })
    }
}

//get request
exports.getbookController = async (req, res) => {
 
    try {
      let books = await bookModel.find()
        res.status(200).json({ message: "get all book", books })

    } catch (error) {
        console.log(error)
    }

}

//get request by id

exports.singlebookcontroller = async (req, res) => {
    let book;
    const id = req.params.id
    try {
        book = await bookModel.findById(id)
        res.status(200).json({ book })
    } catch (error) {
        console.log(error)
    }

}

//update book

exports.updatebookController = async (req, res) => {
    let id = req.params.id
    const { name, description, author, image, price } = req.body
    let updatedbook;
    try {
        updatedbook = await bookModel.findByIdAndUpdate(id, { name, description, author, image, price })
        await updatedbook.save()
        res.status(200).json({ message: "succesfully updated", updatedbook })

    } catch (error) {
        console.log(error)
    }
}

// delete book by id

exports.deletebookController = async (req, res) => {
    const {id} = req.params
    try {
        await bookModel.findByIdAndDelete({_id:id})
        res.status(200).json({ message: "deleted succesfully" })
    } catch (error) {
        console.log(error)
    }
}




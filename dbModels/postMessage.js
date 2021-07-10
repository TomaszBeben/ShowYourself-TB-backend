import mongoose from 'mongoose'

// const postShema = mongoose.Schema({
//     currentUser: String,
//     name: String,
//     surname: String,
//     file: String,
//     message: String,
//     createdAt:{
//         type: Date,
//         default: new Date()
//     }
// })

const postShema = mongoose.Schema({
    currentUser: String,
    file: String,
    name: String,
    surname: String,
    dateOfBirth: String,
    country: String,
    city: String,
    phone: Number,
    email: String,
    zipCode: String
})



const PostMessage = mongoose.model('PostMessage', postShema)

export default PostMessage
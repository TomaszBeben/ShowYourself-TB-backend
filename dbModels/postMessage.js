import mongoose from 'mongoose'

const postShema = mongoose.Schema({
    currentUser: String,
    name: String,
    surname: String,
    file: String,
    message: String,
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postShema)

export default PostMessage
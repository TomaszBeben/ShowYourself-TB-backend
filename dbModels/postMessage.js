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
// empty phone num returns null and it shouldnt be like this!!!!!

import mongoose from 'mongoose'
const postShema = mongoose.Schema({
    cvpattern: String,
    currentUser: String,
    file: String,
    name: String,
    surname: String,
    dateOfBirth: String,
    country: String,
    city: String,
    phone: String,
    email: String,
    zipCode: String,
    test: String,
    education: {
        first: {
            degree: String,
            school: String,
            city: String,
            start: String,
            end: String,
            description: String
        },
        second: {
            degree: String,
            school: String,
            city: String,
            start: String,
            end: String,
            description: String
        },
        third: {
            degree: String,
            school: String,
            city: String,
            start: String,
            end: String,
            description: String
        }
    }
})
const PostMessage = mongoose.model('PostMessage', postShema)
export default PostMessage
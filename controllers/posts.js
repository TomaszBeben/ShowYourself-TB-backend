import mongoose from 'mongoose'
import PostMessage from '../dbModels/postMessage.js'

// export const getPost = async (req, res) => {

//     try {
//         const postMessage = await PostMessage.find()
//         res.status(200).json(postMessage)
//     } catch (error) {
//         res.status(404).json({ message: error })
//     }
// }//working !!!!!!!!!!

export const getPost = async (req, res) => {

    console.log(req.headers.host);

    try {

        const currentUser  = req.url.substring(1)
        const postMessage = await PostMessage.find({"currentUser":`${currentUser}`})

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}


// export const getPost = async (req, res) => {
//     const currentUser = req.url //current mail
//     try {
//         const postMessage = await PostMessage.findById(currentUser)
//         res.status(200).json(postMessage)
//     } catch (error) {
//         res.status(404).json({ message: error })
//     }
// }
// export const getUserPost = async (req, res) => { 
//     const { id } = req.params;
//     console.log(id);

//     try {
//         const post = await PostMessage.findById(id);
        
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
//not working

export const createPost = async (req, res) => {

    const post = req.body // current post object

    const newPost = new PostMessage(post)
    try {

        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true })
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
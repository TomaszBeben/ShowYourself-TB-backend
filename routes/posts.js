import express from 'express'
import { getPost, createPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router()

// router.get('/', getPost)
// router.post('/', createPost)
//work

// router.get('/', getPost)
router.get('/:currentUser', getPost)
router.post('/:currentUser', createPost)
//not yet

router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router
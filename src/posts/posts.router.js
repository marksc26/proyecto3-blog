const postServices = require("./posts.services")

const router = require("express").Router()

router.get('/posts', postServices.getAllPosts)
router.post('/posts', postServices.postNewPosts)
router.get('/posts/:id', postServices.getPostById)
router.patch('/posts/:id', postServices.patchPost)
router.delete('/posts/:id', postServices.deletePost)

module.exports = router


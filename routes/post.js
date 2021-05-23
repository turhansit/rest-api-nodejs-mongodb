const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.get('/get-data', async (request, response) => {
    try {
        const post = await Post.find();
        response.json(post);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

router.post('/post-data', (request, response) => {
    const post = new Post({
        title: request.body.title,
        description: request.body.description,
        short: request.body.short
    });
    post.save()
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            response.json({
                mesaage: err
            });
        });
});

router.get('/search-data/:Id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.Id);
        response.json(post);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

router.get('/search-data-with-request', async (request, response) => {
    try {
        const post = await Post.findById(request.body.Id);
        response.json(post);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

router.patch('/update-data/:Id', async (request, response) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: request.params.Id
        }, {
            $set: {
                title: request.body.title,
                description: request.body.description,
                short: request.body.short
            }
        });
        response.json(updatedPost);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

router.patch('/update-data-with-request', async (request, response) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: request.body.Id
        }, {
            $set: {
                title: request.body.title,
                description: request.body.description,
                short: request.body.short
            }
        });
        response.json(updatedPost);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

router.delete('/delete-data/:Id', async (request, response) => {
    try {
        const removedPost = await Post.remove({
            _id: request.params.Id
        });
        response.json(removedPost);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

router.delete('/delete-data-with-request', async (request, response) => {
    try {
        const removedPost = await Post.remove({
            _id: request.body.Id
        });
        response.json(removedPost);
    } catch (err) {
        response.json({
            mesaage: err
        });
    }
});

module.exports = router;
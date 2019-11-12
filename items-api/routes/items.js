var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eat_it_db', { useNewUrlParser: true });

var itemSchema = new mongoose.Schema({
    "name": String,
    "price": Number,
    "currency": String,
    "qty": Number,
    "isAvailable": Boolean,
    "images": Array,
    "ingredients": Object,
    "hotel": Object,
    "description": String,
    "tags": Array
});

var Item = mongoose.model('Item', itemSchema, "items");  // Model



var reviewSchema = new mongoose.Schema({
    "stars": Number,
    "body": String,
    "author": String,
    "item": mongoose.Types.ObjectId,
});

var Review = mongoose.model('Review', reviewSchema, "reviews");  // Model



router
    .get('/', function (req, res, next) {
        Item.find({}, (err, result) => {
            if (err) throw err;
            return res.json(result)
        })
    })
    .post('/', function (req, res, next) {
        let body = req.body;
        let newItem = new Item(body);
        newItem.save((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .put('/:itemId', function (req, res, next) {
        let body = req.body;
        let itemId = req.params.itemId;
        Item.updateOne({ _id: mongoose.Types.ObjectId(itemId) }, body, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .delete('/:itemId', function (req, res, next) {
        Item.deleteOne({ _id: mongoose.Types.ObjectId(req.params.itemId) }, (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    })
    .post("/:itemId/reviews", (req, res, next) => {
        let itemId = req.params.itemId;
        let body = req.body;
        let newReview = new Review(body);
        newReview.item = mongoose.Types.ObjectId(itemId);
        newReview.save((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .get("/:itemId/reviews", (req, res, next) => {
        let itemId = req.params.itemId;
        Review.find({ item: mongoose.Types.ObjectId(itemId) }, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })

module.exports = router;

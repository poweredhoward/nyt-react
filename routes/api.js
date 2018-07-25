const router = require("express").Router();
const Article = require("../models/article.js");

//Saved articles in database
router.post("/articles", function(req, res){
  console.log(req.body);
  console.log("Inside article post");
  Article.create({
    title: req.body.title.title,
    date: req.body.date.date,
    url: req.body.url.url,
    snippet: req.body.snippet.snippet
  }).then(result =>{
    console.log(result);
    res.send(result);
  })
});

//Get saved articles from DB
router.get("/articles", (req, res) =>{
  console.log("inside getting article")
  Article.find()
  .then(result =>{
    console.log(result)
    res.send(result);
  })
});

router.delete("/articles", (req, res)=>{
  console.log("inside deleting");
  Article.deleteOne().then(result =>{
    console.log(result);
    res.send(result);
  })
})

// router.get("/products", function(req, res) {
//   Product.find().then(results =>{
//     console.log(results);
//     res.send(results);
//   })
  
// });

// router.get("/products/:id", (req, res) =>{
//   console.log("inside get by id");
//   console.log(req.params.id);
//   Product.findById(req.params.id).then(result =>{
//     console.log(result);
//     res.send(result)
//   })
// })

// router.post("/product", (req, res)=>{
//   Product.create({
//     name: req.body.name,
//     description: req.body.description,
//     quantity: req.body.quantity
//   }).then(result =>{
//     console.log(result);
//     res.send(result);
//   })
// })

module.exports = router;
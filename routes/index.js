var express = require('express');
var router = express.Router();
var taskscollection=require('./users');
const app=express();

/* GET home page. */

router.post('/submit',(req,res)=>{
  taskscollection.create({
    content: req.body.task
  })
  .then(()=>{
    res.redirect("/");
  })
});

router.get('/', function(req, res, next) {
  taskscollection.find({},(err,docs)=>{
    if(err){
      console.log(err)
      }else{
  res.render('index', {taskscollection: docs});
      }
  })
});
router.get('/edit/:id',(req, res) =>{
  const id= req.params.id;
  taskscollection.find({},(err,docs)=>{
    if(err){
      console.log(err)
      }else{
    res.render('update',{taskscollection: docs, idupdate:id});
      }
  });
})
router.post('/edit/:id',(req, res) =>{
  const id= req.params.id;
  taskscollection.findByIdAndUpdate(id,{
    content: req.body.task
  },err =>{
    if(err){
      res.send(err);
    }
    else{
      res.redirect("/");
    }
  });
});
router.get('/remove/:id',(req, res) =>{
  const id= req.params.id;
  taskscollection.findByIdAndRemove(id,{
    content: req.body.task
  },err =>{
    if(err){
      res.send(err);
    }
    else{
      res.redirect("/");
    }
  });
});
module.exports = router;
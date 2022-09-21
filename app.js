const express=require('express')
const mongoose=require('mongoose');
const Recipe = require('./models/recipes');

const app=express()

const dbURI='mongodb+srv://iamdpunkr:deep1995@recipessite.sjoblb4.mongodb.net/recipe?retryWrites=true&w=majority';
 
mongoose.connect(dbURI,{useNewUrlParser:true})
    .then(result=>app.listen(3000))
    .catch(err=>console.log(err))

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    Recipe.find().sort({createdAt:-1})
        .then(result=>{
            res.render('index',{recipes:result})
        }).catch(err=>console.log(err));
})

app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('/addRecipe',(req,res)=>{
    res.render('addRecipe')
})


app.get('/recipe/:id',(req,res)=>{
    const id=req.params.id;
    Recipe.findById(id)
    .then(result=>{
        res.render('recipe',{recipe:result})
    }).catch(err=>console.log(err));

})

app.post('/',(req,res)=>{
   const recipe=new Recipe(req.body);
    recipe.save()
      .then(result=>{
            res.redirect('/');
       }).catch(err=>console.log(err))

})

app.delete('/recipe/:id',(req,res)=>{
    const id=req.params.id;

    Recipe.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect:'/'})
        }).catch(err=>console.log(err))
})
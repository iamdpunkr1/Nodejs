const express=require('express')
const mongoose=require('mongoose');
const recipeRoutes=require('./routes/recipeRouter')

const app=express()

const dbURI='mongodb+srv://iamdpunkr:deep1995@recipessite.sjoblb4.mongodb.net/recipe?retryWrites=true&w=majority';
 
mongoose.connect(dbURI,{useNewUrlParser:true})
    .then(result=>app.listen(3000))
    .catch(err=>console.log(err))

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));

app.use(recipeRoutes)

app.use((req, res) => {
    res.status(404).render('404');
  });
const Recipe = require("../models/recipes");

const add_recipe=(req,res)=>{
    const recipe=new Recipe(req.body);

    recipe.save()
        .then(result=>{
            res.redirect('index');
        }).catch(err=>console.log(err))
}

const getAllRecipes=(req,res)=>{
    Recipe.find().sort({createdAt:-1})
        .then(result=>{
            res.render('index',{recipe:result})
        }).catch(err=>console.log(err));
}

const get_a_recipe=(req,res)=>{
    const id=req.params.id;
    Recipe.findById(id)
        .then(result=>{
            
        })
}
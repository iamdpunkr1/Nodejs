const Recipe = require("../models/recipes");

const add_recipe=(req,res)=>{
    const recipe=new Recipe(req.body);
    recipe.save()
      .then(result=>{
            res.redirect('/');
       }).catch(err=>console.log(err))
}

const getAbout=(req,res)=>{
    res.render('about')
}

const addRecipeMenu=(req,res)=>{
    res.render('addRecipe')
}

const getAllRecipes=(req,res)=>{
    Recipe.find().sort({createdAt:-1})
        .then(result=>{
            res.render('index',{recipes:result})
        }).catch(err=>console.log(err));
}

const get_recipe=(req,res)=>{
    const id=req.params.id;
    Recipe.findById(id)
    .then(result=>{
        res.render('recipe',{recipe:result})
    }).catch(err=>{
        res.status(404).render('404')
    });
}

const delete_recipe=(req,res)=>{
    const id=req.params.id;

    Recipe.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect:'/'})
        }).catch(err=>console.log(err))
}

module.exports={add_recipe,
                getAbout,
                getAllRecipes,
                get_recipe,
                delete_recipe,
                addRecipeMenu
                }
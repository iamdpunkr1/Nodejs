const express = require('express');
const recipeRoutes=require('../controller/recipeController')
const router=express.Router();

router.get('/',recipeRoutes.getAllRecipes)
router.get('/addRecipe',recipeRoutes.addRecipeMenu)
router.get('/recipe/:id',recipeRoutes.get_recipe)
router.get('/about',recipeRoutes.getAbout)
router.post('/',recipeRoutes.add_recipe)
router.delete('/recipe/:id',recipeRoutes.delete_recipe)

 module.exports=router;
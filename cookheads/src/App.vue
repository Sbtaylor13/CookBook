<script>
import AddRecipe from './components/AddRecipe.vue'
import RecipeCard from './components/RecipeCard.vue'
import RecipePage from './components/RecipePage.vue';
import TopNavbar from './components/TopNavbar.vue'
import RecipeList from './RecipeList.js';
/* eslint-disable */
export default {
  name: 'App',
  components: {
    RecipeCard,
    RecipePage, 
    AddRecipe,
    TopNavbar
    // RecipeList
  },
  data() {
    return {
      viewPage: "home", //or "recipe" or "add"
      recipeName: '',
      recipeList:RecipeList
    }
  },
  methods: {
    openRecipe(pageName) {
      console.log("opening recipe: " + pageName);
      console.log(this.recipeList)
      this.recipeName = pageName;
      this.viewPage = 'recipe';

      console.log("change")
    },
    revertPage() {
      console.log("return to home");
      this.recipeName = '';
      this.viewPage = 'home';

      console.log("home?")
    },
    addRecipe() {
      this.viewPage = 'add'
    },
    saveRecipe( recipe ){
      console.log("added Recipe to list");
      this.recipeList.push(recipe);
    }
    
  }
}
</script>

<template>
  <v-app>
    <!-- <v-container> -->
      <RecipeCard v-if="viewPage==='home'" @ViewRecipe="openRecipe" :Recipies="recipeList"/>
      <RecipePage v-if="viewPage==='recipe'" :RecipeName="recipeName" :Recipies="recipeList"/>
      <AddRecipe v-if="viewPage==='add'" @SaveRecipe="saveRecipe"></AddRecipe>
      <TopNavbar onHome="viewPage='home'" :hideHome="viewPage==='home'" @GoHome="revertPage" @GoAddRecipe="addRecipe"/>
    <!-- </v-container> -->
  </v-app>
</template>
<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <v-app>
    <!-- <v-container> -->
      <RecipeCard v-if="viewPage==='home'" @ViewRecipe="openRecipe" @DeleteRecipe="deleteRecipe" :Recipies="recipeList" :Five08="fiveOhEight"/>
      <RecipePage v-if="viewPage==='recipe'" :RecipeName="recipeName" :Recipies="recipeList" :Five08="fiveOhEight"/>
      <AddRecipe v-if="viewPage==='add'" @SaveRecipe="saveRecipe" :Five08="fiveOhEight"></AddRecipe>
      <TopNavbar onHome="viewPage='home'" :hideHome="viewPage==='home'" @GoHome="revertPage" @GoAddRecipe="addRecipe" :Five08="fiveOhEight" @Toggle508="toggle508"/>
    <!-- </v-container> -->
  </v-app>
</template>

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
      recipeList:RecipeList,
      fiveOhEight:false  // disabliity compliant
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
    deleteRecipe( recipeIndex ) {
      this.recipeList.splice(recipeIndex, 1)
    },
    saveRecipe( recipe ){
      console.log("added Recipe to list");
      this.recipeList.push(recipe);
},
    toggle508() {
      this.fiveOhEight = !this.fiveOhEight;
      console.log('set 508 to :' + this.fiveOhEight)
    }
    
  }
}
</script>

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

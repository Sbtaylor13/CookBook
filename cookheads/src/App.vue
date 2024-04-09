<script>
import AddRecipe from './components/AddRecipe.vue'
import RecipeCard from './components/RecipeCard.vue'
import RecipePage from './components/RecipePage.vue';
import TopNavbar from './components/TopNavbar.vue'

/* eslint-disable */
export default {
  name: 'App',
  components: {
    RecipeCard,
    RecipePage, 
    AddRecipe,
    TopNavbar
  },
  data() {
    return {
      viewPage: "home", //or "recipe" or "add"
      recipeName: ''
    }
  },
  methods: {
    openRecipe(pageName) {
      console.log("opening recipe: " + pageName);
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
    }
    
  }
}
</script>

<template>
  <v-app>
    <!-- <v-container> -->
      <RecipeCard v-if="viewPage==='home'" @ViewRecipe="openRecipe"/>
      <RecipePage v-if="viewPage==='recipe'" :RecipeName="recipeName" />
      <AddRecipe v-if="viewPage==='add'"></AddRecipe>
      <TopNavbar onHome="viewPage='home'" :hideHome="viewPage==='home'" @GoHome="revertPage" @GoAddRecipe="addRecipe"/>
    <!-- </v-container> -->
  </v-app>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>

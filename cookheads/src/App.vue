<script>
import RecipeCard from './components/RecipeCard.vue'
import TopNavbar from './components/TopNavbar.vue'

/* eslint-disable */
export default {
  name: 'App',
  components: {
    RecipeCard,
    TopNavbar
  }
}
</script>

<template>
  <v-app>
    <v-container>
      <RecipeCard />
<<<<<<< HEAD
      <v-app-bar style="background-color: blueviolet;" color="teal-darken-4"  :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon style="color:red"></v-app-bar-nav-icon>
        </template>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="pageView">Home</v-btn>
        <!--  <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="pageView">Recipes</v-btn>-->

        <!-- <v-icon>mdi-heart</v-icon> -->
        <v-icon icon="mdi-home" />
        <v-app-bar-title>Cookheads Recipe Project (coming soon!)</v-app-bar-title>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="pageView">+ New Recipe</v-btn>
      </v-app-bar>
      <!-- <v-icon icon="mdi-home" /> -->
      <!-- <HomePage></HomePage> 
      <HomePage v-show="viewPage===1"></HomePage>
      <RecipeBook  v-show="viewPage===2"></RecipeBook>-->
=======
      <TopNavbar />
>>>>>>> 6bb2659963be4c86645a26ba21a02766d729bd10
    </v-container>
  </v-app>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--<template>
  
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome CookHeads to Your Vue.js App"/>

</template> -->

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './components/HomePage.vue'
// import RecipeBook from './components/RecipeBook.vue'
import RecipeCard from './components/RecipeCard.vue'

import {ref} from 'vue'
/* eslint-disable */
export default {
  name: 'App',
  components: {
    // HomePage,
    // RecipeBook
    RecipeCard
  }
}

let viewPage = ref(1);  //homepage
function pageView() {
  console.log("Pagenum = " + viewPage);
   if( viewPage.value === 1) viewPage.value = 2
   else viewPage.value = 1;
}

</script>

<template>
  <v-app>
    <v-container>
      <!-- <v-icon icon="mdi-home" /> -->
      <RecipeCard />
      <v-app-bar style="background-color: blueviolet;" color="teal-darken-4"  :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon style="color:red"></v-app-bar-nav-icon>
        </template>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="pageView">Home</v-btn>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="pageView">Recipes</v-btn>

        <!-- <v-icon>mdi-heart</v-icon> -->
        <v-icon icon="mdi-home" />
        <v-app-bar-title>Cookheads Recipe Project (coming soon!)</v-app-bar-title>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="pageView">+ New Recipe</v-btn>
      </v-app-bar>
      <!-- <v-icon icon="mdi-home" /> -->
      <!-- <HomePage></HomePage> -->
      <HomePage v-show="viewPage===1"></HomePage>
      <RecipeBook  v-show="viewPage===2"></RecipeBook>
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

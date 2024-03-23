<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome CookHeads to Your Vue.js App"/>
</template> -->
<template>
  <v-app>
    <v-container>
      <!-- <v-icon icon="mdi-home" /> -->

      <v-app-bar style="background-color: blueviolet;" color="teal-darken-4"  :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon style="color:red"></v-app-bar-nav-icon>
        </template>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" onclick={setView(1)}>Home</v-btn>
        <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" onclick={setView(2)}>Recipes</v-btn>

        <!-- <v-icon>mdi-heart</v-icon> -->
        <v-icon icon="mdi-home" />
        <v-app-bar-title>Cookheads Recipe Project (coming soon!)</v-app-bar-title>
      </v-app-bar>
      <h1>hi</h1>
      <!-- <v-icon icon="mdi-home" /> -->
      <HomePage show={viewPage==1}></HomePage>
      <HomePage show={viewPage==2}></HomePage>
      <RecipeBook></RecipeBook>
    </v-container>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'
import RecipeBook from './components/RecipeBook.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    RecipeBook
  }
}

let viewPage = 1;  //homepage
function setView(pageNum) {
   viewPage = pageNum;
}

</script>

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

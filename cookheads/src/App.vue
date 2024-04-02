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
      <TopNavbar />
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

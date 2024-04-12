<template>
  <div class="bkgImg" :style="{ 'background-image': 'url(' + require('../assets/backgroundimage4.png') + ')'}">
    <!--Working Home Page button-->
    <!-- <v-btn @click.stop="revertPage()">test</v-btn> -->
    <v-container>
      <v-row>
        <v-col
          v-for="(food, index) in Recipies"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
        <v-hover
        v-slot="{ isHovering, props }"
        open-delay="200"
      >
          <!-- <v-card
            class="recipe-card"
            @mouseenter="showIngredients(index)"
            @mouseleave="hideIngredients(index)"
          > -->
          <v-card class="recipe-card">
            <v-card-title>        <!--food.name-->
              <v-btn @click.stop="$emit('ViewRecipe',food.name)" elevation="8" size="x-large">{{ food.name }}</v-btn>
            </v-card-title>
            <v-expand-transition>
              <!-- <v-card-text v-if="food.showIngredients"> -->
                <v-card-text :class="{ 'hide': !isHovering }" v-bind="props">
                <v-card-text><strong>Ingredients:</strong>
                <div v-for="(ingredient, i) in food.ingredients" :key="i">{{ ingredient.name }}</div></v-card-text>
              </v-card-text>
            </v-expand-transition>
            <v-card-text>Difficulty: {{ food.difficulty }}</v-card-text>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
 <!-- {{ Recipies }} -->
</template>

<script>

export default {
  props: ['Recipies'],
  data() {
    return {
      recipeName:'',
      // isHovering:false
      // RecipeCard: [
      //   { 
      //     name: 'Key Lime Pie', 
      //     difficulty: 'Difficulty: ⭐⭐', 
      //     ingredients: ['Key Lime Juice', 'Sweetened Condensed Milk', 'Graham cracker crumbs', 'Sour Cream', 'Graham Cracker Crust '], 
      //     showIngredients: false 
      //   },
      //   { 
      //     name: 'Banana Bread', 
      //     difficulty: 'Difficulty: ⭐⭐', 
      //     ingredients: ['Ripe Bananas', 'Flour', 'White Sugar', 'Butter', 'Eggs', 'Vanilla Extract', 'Baking Soda'], 
      //     showIngredients: false 
      //   },
      //   { 
      //     name: 'Strawberry Pineapple Smoothie', 
      //     difficulty: 'Difficulty: ⭐', 
      //     ingredients: ['Frozen Pineapple Chunks', 'Frozen Strawberries', 'Lemonade'], 
      //     showIngredients: false 
      //   },
      //   { 
      //     name: 'Tanghulu Grapes', 
      //     difficulty: 'Difficulty: ⭐⭐⭐', 
      //     ingredients: ['Grapes', 'Sugar', 'Skewers'], 
      //     showIngredients: false 
      //   },
      //   { 
      //     name: 'Peach Cobbler', 
      //     difficulty: 'Difficulty: ⭐⭐', 
      //     ingredients: ['Peaches', 'Sugar', 'Flour', 'Butter', 'Milk', 'Baking Powder', 'Cinnamon Powder'], 
      //     showIngredients: false 
      //   }
      // ]
    }
  },
  methods: {
    showIngredients(index) {
      this.RecipeCard[index].showIngredients = true;
    },
    hideIngredients(index) {
      this.RecipeCard[index].showIngredients = false;
    },
    // changePage(pageName) {
    //   console.log("opening recipe: " + pageName);
    //   this.recipeName = pageName;
    //   this.viewPage = 'recipe';

    //   console.log("change")
    // },
    // revertPage() {
    //   console.log("return to home");
    //   this.recipeName = '';
    //   this.viewPage = 'cards';

    //   console.log("home?")
    // }
  }
}
</script>

<style scoped>
.recipe-card {
  transition: all 0.3s ease;
}
.v-expand-transition-enter-active, .v-expand-transition-leave-active {
  transition: all 0.3s ease;
}
.v-expand-transition-enter, .v-expand-transition-leave-to {
  height: 0;
  opacity: 0;
  overflow: hidden;
}
.bkgImg {
      background-size: cover;
      height: 100%;

}
.hide {
  color:red;
  display: none !important;
}
</style>

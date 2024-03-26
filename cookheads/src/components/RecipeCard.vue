<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="(food, index) in RecipeCard"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            class="recipe-card"
            @mouseenter="showIngredients(index)"
            @mouseleave="hideIngredients(index)"
          >
            <v-card-title>{{ food.name }}</v-card-title>
            <v-expand-transition>
              <v-card-text v-if="food.showIngredients">
                <v-card-text><strong>Ingredients:</strong>
                <div v-for="(ingredient, i) in food.ingredients" :key="i">{{ ingredient }}</div></v-card-text>
              </v-card-text>
            </v-expand-transition>
            <v-card-text>{{ food.difficulty }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RecipeCard: [
        { 
          name: 'Key Lime Pie', 
          difficulty: 'Difficulty: ⭐⭐', 
          ingredients: ['Key Lime Juice', 'Sweetened Condensed Milk', 'Graham cracker crumbs', 'Sour Cream', 'Graham Cracker Crust '], 
          showIngredients: false 
        },
        { 
          name: 'Banana Bread', 
          difficulty: 'Difficulty: ⭐⭐', 
          ingredients: ['Ripe Bananas', 'Flour', 'White Sugar', 'Butter', 'Eggs', 'Vanilla Extract', 'Baking Soda'], 
          showIngredients: false 
        },
        { 
          name: 'Strawberry Pineapple Smoothie', 
          difficulty: 'Difficulty: ⭐', 
          ingredients: ['Frozen Pineapple Chunks', 'Frozen Strawberries', 'Lemonade'], 
          showIngredients: false 
        },
        { 
          name: 'Tanghulu Grapes', 
          difficulty: 'Difficulty: ⭐⭐⭐', 
          ingredients: ['Grapes', 'Sugar', 'Skewers'], 
          showIngredients: false 
        },
        { 
          name: 'Peach Cobbler', 
          difficulty: 'Difficulty: ⭐⭐', 
          ingredients: ['Peaches', 'Sugar', 'Flour', 'Butter', 'Milk', 'Baking Powder', 'Cinnamon Powder'], 
          showIngredients: false 
        }
      ]
    }
  },
  methods: {
    showIngredients(index) {
      this.RecipeCard[index].showIngredients = true;
    },
    hideIngredients(index) {
      this.RecipeCard[index].showIngredients = false;
    }
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
</style>

<template>
  <div class="bkgImg" :style="{ 'background-image': 'url(' + require('../assets/food.jpg') + ')'}">
    <div style="margin-right: 20px; margin-left: 20px;margin-top: 50px;">
      <v-row>
        <v-col
          v-for="(food, index) in Recipies"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            class="recipe-card"
            @mouseenter="showIngredients(index)"
            @mouseleave="hideIngredients()"
          >
            <v-card-title>
              <v-btn @click.stop="$emit('ViewRecipe',food.name)" elevation="8" >{{ food.name }}</v-btn>
            </v-card-title>
            <v-expand-transition>
              <v-card-text v-if="showIngredientFlag[index]">
                  <v-card-text><strong>Ingredients:</strong>
                    <div v-for="(ingredient, i) in food.ingredients" :key="i">{{ ingredient.name }}</div>
                  </v-card-text>
              </v-card-text>
            </v-expand-transition>
            <v-card-text>Difficulty: {{ food.difficulty }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
     </div>
  </div>
 <!-- {{ Recipies }} -->
</template>

<script>

export default {
  props: ['Recipies'],
  data() {
    return {
      recipeName:'',
      showIngredientFlag:[]
    }
  },
  methods: {
    showIngredients(index) {
      //we need a flag per recipe to show/hide, but it can't be 
      // in the Recipes object because we can't set it true/false
      // from this child component
      this.showIngredientFlag = [];
      for(let i=0;i<this.Recipies.length;i++){
        if( index === i)
          this.showIngredientFlag.push(true);
        else
          this.showIngredientFlag.push(false);
      }
    },
    hideIngredients() {
      this.showIngredientFlag = [];
      for(let i=0;i<this.Recipies.length;i++){
        this.showIngredientFlag.push(false);
      }
    },
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
</style>

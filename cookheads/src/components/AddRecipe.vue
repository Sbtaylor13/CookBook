<template>
    <div>
        <h1>add recipe!</h1>
        <v-text-field label="Recipe Name"></v-text-field>
        <div>Ingredients:<v-btn @click="addIngredient">plus</v-btn>
          <ul>
            <li v-for="ingredient,index in recipe.ingredients" :key="index">
              <v-text-field label="Amount" v-value="ingredient.amt"></v-text-field>
              <v-text-field label="Units"  v-value="ingredient.units"></v-text-field>
              <v-text-field label="Name"  v-value="ingredient.name"></v-text-field>
            </li>
        </ul>
        </div>
        <div>Steps:<v-btn @click="addInstruction">plus</v-btn>
          <ol>
            <li v-for="instruction, index in recipe.instructions" :key="index">
              <v-text-field label="Instruction" v-value="instruction"></v-text-field>
              
            </li>
        </ol>
        </div>
    </div>
</template>

<script>
  export default {

    data() {
      return {
        recipe: {ingredients:[], instructions:[]}
      }
    },
    methods: {
      addIngredient(){
        this.recipe.ingredients.push({amt:"",units:"", name:""});
      },
      addInstruction() {
        this.recipe.instructions.push("");
      }
    }
  }
</script>


<style scoped>

</style>

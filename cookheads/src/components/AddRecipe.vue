<template>
    <div>
        <h1>add recipe!</h1>
        <v-text-field v-model="recipe.name" label="Recipe Name"></v-text-field>
        <div>Ingredients:<v-btn @click="addIngredient">plus</v-btn>
          <v-row v-for="ingredient,index in recipe.ingredients" :key="index">
              <v-text-field label="Amount" v-model="ingredient.amt" ></v-text-field>
              <v-text-field label="Units"  v-model="ingredient.units"></v-text-field>
              <v-text-field label="Name"  v-model="ingredient.name"></v-text-field>
              <v-btn @click="removeIngredient(index)">{{ "del "+index }}</v-btn>
          </v-row>


        </div>
        <div>Steps:<v-btn @click="addInstruction">plus</v-btn>
          <v-row v-for="instruction, index in recipe.instructions" :key="index">
              <v-label>{{ index+1 }}</v-label><!--why doesn't this show up!!!-->
              <v-text-field label="Instruction" v-model="instruction.step"></v-text-field>
              <v-btn @click="removeInstruction(index)">delete</v-btn>
          </v-row>
        </div>
       <v-btn @click="$emit('SaveRecipe',recipe)">save</v-btn>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        recipe: {name:"", ingredients:[], instructions:[]}
      }
    },
    methods: {
      addIngredient(){
        this.recipe.ingredients.push({amt:"",units:"", name:""});
      },
      addInstruction() {
        this.recipe.instructions.push({step:""});
      },
      removeIngredient(index) {
        console.log("removing ingredient: " + index);
        this.recipe.ingredients.splice(index,1);
      },
      removeInstruction(index) {
        console.log("removing ingredient: " + index);
        this.recipe.instructions.splice(index,1);
      },
      // save() {
      //   this.Recipies.push(this.recipe);
      //   console.log(`Recipe ${this.recipe.name} saved!` )
      // }
    }
  }
</script>


<style scoped>

</style>

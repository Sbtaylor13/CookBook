<template>
    <div class="bkgImg" :style="[Five08?{'background-color':'#C0C0C0'}:{ 'background-image': 'url(' + require('../assets/addrecipeimage.jpg') + ')'}]">

        <h1 style="color: rgb(55, 137, 189);text-align: center; background-color:rgb(224, 243, 255)" aria-label="Add Recipe">Add a New Recipe!</h1>
        <v-text-field style="background-color: white; opacity: 80%; color:black" v-model="recipe.name" label="Add Recipe Name"></v-text-field>
        <div style="color: white;  font-size: 40px;" aria-label=" add ingredients">Ingredients:<v-btn aria-label="add line" @click="addIngredient">plus</v-btn>
          <v-row v-for="ingredient,index in recipe.ingredients" :key="index">
              <v-text-field style="background-color: white; opacity: 80%; color:black" label="Amount" v-model="ingredient.amt" ></v-text-field>
              <v-text-field style="background-color: white; opacity: 80%; color:black" label="Units"  v-model="ingredient.units"></v-text-field>
              <v-text-field style="background-color: white; opacity: 80%; color:black" label="Name"  v-model="ingredient.name"></v-text-field>
              <v-btn aria-label="delete ingredient line" @click="removeIngredient(index)">{{ "delete"}}</v-btn>
          </v-row>


        </div>
        <div style="color: white; font-size: 40px;" aria-label="steps for instructions">Steps:<v-btn aria-label="add instruction" @click="addInstruction">plus</v-btn>
          <v-row v-for="instruction, index in recipe.instructions" :key="index">
              <v-label>{{ index+1 }}</v-label><!--why doesn't this show up!!!-->
              <v-text-field style="background-color: white; opacity: 80%; color:black" label="Instruction" v-model="instruction.step"></v-text-field>
              <v-btn aria-label="delete instruction line" @click="removeInstruction(index)">delete</v-btn>
          </v-row>
        </div>
        <div style="color: white; font-size: 40px;" aria-label="difficulty rating">Difficulty: <v-btn aria-label="remve star" @click="removeStar">minus</v-btn>{{ recipe.difficulty }} <v-btn aria-label="add star" @click="addStar">plus</v-btn></div>
       <v-btn aria-label="save recipe" @click="$emit('SaveRecipe',recipe)">save</v-btn>
    </div>
</template>

<script>

  export default {
    props: ['Five08'],
    data() {
      return {
        recipe: {name:"", difficulty:"⭐⭐⭐", ingredients:[{amt:"",units:"", name:""}], instructions:[{step:""}]},
      }
    },
    methods: {
      addIngredient(){
        this.recipe.ingredients.push({amt:"",units:"", name:""});
      },
      addInstruction() {
        this.recipe.instructions.push();
      },
      removeIngredient(index) {
        console.log("removing ingredient: " + index);
        this.recipe.ingredients.splice(index,1);
      },
      removeInstruction(index) {
        console.log("removing ingredient: " + index);
        this.recipe.instructions.splice(index,1);
      },
      removeStar() {
        this.recipe.difficulty = this.recipe.difficulty.substring(0,this.recipe.difficulty.length-1);
      },
      addStar() {
        this.recipe.difficulty = this.recipe.difficulty += "⭐";

      }
      // save() {
      //   this.Recipies.push(this.recipe);
      //   console.log(`Recipe ${this.recipe.name} saved!` )
      // }
    }
  }
</script>


<style scoped>

</style>

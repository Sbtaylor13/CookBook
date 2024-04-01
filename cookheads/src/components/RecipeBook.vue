<template lang="">
    <div>
        <h1>Recipes</h1>
    </div>

    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recipe, Ingredient Substitution, and Unit Converter</title>
  <style>
    #app {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .recipe-container, .substitution-container, .unit-converter-container {
      width: 45%;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="recipe-container">
      <h2>Recipe 1: Key Lime Pie</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>28 oz sweetened condensed milk</li>
        <li>¾ cup key lime juice</li>
        <li>½ cup sour cream</li>
        <li>1 tbsp lime zest</li>
        <li>1 10 inch graham cracker crust</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Combine condensed milk, key lime juice, sour cream, lime zest in a large bowl and mix until well combined.</li>
        <li>Pour mixture into graham cracker crust.</li>
        <li>Bake at 350°F for 10-15 minutes or until pie is firm to the touch but still jiggly.</li>
        <li>Enjoy!</li>
      </ol>
    </div>
    <div class="substitution-container">
      <h2>Find Substitutes</h2>
      <div>
        <input type="text" v-model="searchQuery" @input="searchSubstitutions" placeholder="Enter an ingredient...">
      </div>
      <div v-if="substitutions.length">
        <h3>Substitutions for "{{ searchQuery }}"</h3>
        <ul>
          <li v-for="(substitution, index) in substitutions" :key="index">{{ substitution }}</li>
        </ul>
      </div>
      <div v-else-if="searchQuery.length">
        <p>No substitutions found for "{{ searchQuery }}"</p>
      </div>
      <div v-else>
        <p>Please enter an ingredient to find its substitutions.</p>
      </div>
    </div>
    <div class="unit-converter-container">
      <h2>Unit Converter</h2>
      <div>
        <input type="text" v-model="metricValue" @input="convertToUS" placeholder="Enter metric value...">
        <select v-model="metricUnit">
          <option value="ml">ml to cup</option>
          <option value="cup">cup to ml</option>
          <option value="kg">kg (kilogram)</option>
        </select>
      </div>
      <div v-if="usValue">
        <p>{{ metricValue }} {{ metricUnit }} is approximately {{ usValue }} {{ usUnit }}</p>
      </div>
      <div v-else-if="metricValue">
        <p>Invalid metric value</p>
      </div>
      <div v-else>
        <p>Please enter a metric value to convert</p>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        searchQuery: '',
        substitutions: [],
        metricValue: '',
        metricUnit: 'ml',
        usValue: null,
        usUnit: 'fl oz' // Default US unit
      },
      methods: {
        searchSubstitutions() {
          const ingredientSubstitutions = {
            "allspice": ["1 teaspoon of this is equivalent to", "1/2 teaspoon cinnamon", "1/4 teaspoon ginger", "1/4 teaspoon cloves"],
            "arrowroot starch": ["1 teaspoon of this is equivalent to", "1 tablespoon flour", "1 teaspoon cornstarch"],
            "baking mix": ["1 cup of this is equivalent to", "1 cup pancake mix"],
            "baking powder": ["1 teaspoon of this is equivalent to", "1/4 teaspoon baking soda plus 1/2 teaspoon cream of tartar", "1/4 teaspoon baking soda plus 1/2 cup buttermilk (decrease liquid in recipe by 1/2 cup)"],
            "baking soda": ["1 teaspoon of this is equivalent to", "4 teaspoons baking powder", "1 teaspoon potassium bicarbonate and 1/3 teaspoon salt. NOTE: If the recipe calls for an acidic liquid such as sour cream, yogurt, buttermilk, vinegar, molasses, or citrus juice, you should replace it with the same amount of whole milk"],
            "beer": ["1 cup of this is equivalent to", "1 cup nonalcoholic beer", "1 cup chicken broth"],
            "brandy": ["1/4 cup of this is equivalent to", "1 teaspoon imitation brandy extract plus enough water to make 1/4 cup"],
            "bread crumbs": ["1 cup of this is equivalent to", "1 cup cracker crumbs", "1 cup matzo meal", "1 cup ground oats"],
            "brown sugar": ["1 cup, packed of this is equivalent to", "1 cup white sugar plus 1/4 cup molasses and decrease the liquid in recipe by 1/4 cup", "1 cup white sugar", "1 1/4 cups confectioners' sugar"],
            "butter": ["1 cup of this is equivalent to", "1 cup shortening", "7/8 cup vegetable oil", "7/8 cup lard"],
            "buttermilk": ["1 cup of this is equivalent to", "1 cup yogurt", "1 tablespoon lemon juice or vinegar plus enough milk to make 1 cup"],
            "cheddar cheese": ["1 cup shredded of this is equivalent to", "1 cup shredded Colby cheddar", "1 cup shredded Monterey Jack cheese"],
            "cocoa": ["1/4 cup of this is equivalent to", "1 (1-ounce) square unsweetened chocolate"],
            "corn syrup": ["1 cup of this is equivalent to", "1 1/4 cup white sugar plus 1/3 cup water", "1 cup honey", "1 cup light treacle syrup"],
            "cottage cheese": ["1 cup of this is equivalent to", "1 cup farmer's cheese", "1 cup ricotta cheese"],
            "heavy cream": ["1 cup of this is equivalent to", "1 cup evaporated milk", "3/4 cup milk plus 1/3 cup butter"],
            "light cream": ["1 cup of this is equivalent to", "1 cup evaporated milk", "3/4 cup milk plus 3 tablespoons butter"],
            "whipped cream": ["1 cup of this is equivalent to", "1 cup frozen whipped topping, thawed"],
            "egg": ["1 whole egg (3 tablespoons or 1.7 oz) is equivalent to", "2 1/2 tablespoons of powdered egg substitute plus 2 1/2 tablespoons water", "1/4 cup liquid egg substitute", "1/4 cup silken tofu pureed", "3 tablespoons mayonnaise", "half a banana mashed with 1/2 teaspoon baking powder", "1 tablespoon powdered flax seed soaked in 3 tablespoons water"],
            "evaporated milk": ["1 cup of this is equivalent to", "1 cup light cream"],
            "bread flour": ["1 cup", "1 cup all-purpose flour plus 1 teaspoon wheat gluten"],
            "garlic": ["1 clove of this is equivalent to", "1/8 teaspoon garlic powder", "1/2 teaspoon granulated garlic", "1/2 teaspoon garlic salt, reduce salt in recipe"],
            "gelatin": ["1 tablespoon of this is equivalent to", "2 teaspoons agar agar"],
            "green onion": ["1/2 cup of this is equivalent to", "1/2 cup chopped onion", "1/2 cup chopped leek", "1/2 cup chopped shallots"],
            "hazelnuts": ["1 cup of this is equivalent to", "1 cup macadamia nuts", "1 cup almonds"],
            "herbs": ["1 tablespoon chopped fresh herbs is equivalent to", "1 teaspoon (chopped or whole leaf) dried herbs"],
            "herring": ["8 ounces of this is equivalent to", "8 ounces of sardines"],
            "honey": ["1 cup of this is equivalent to", "1 1/4 cup white sugar plus 1/3 cup water", "1 cup corn syrup", "1 cup light treacle syrup"],
            "hot pepper sauce": ["1 teaspoon of this is equivalent to", "3/4 teaspoon cayenne pepper plus 1 teaspoon vinegar"],
            "lard": ["1 cup of this is equivalent to", "1 cup shortening", "7/8 cup vegetable oil", "1 cup butter"],
            "lemon grass": ["2 fresh stalks of this is equivalent to", "1 tablespoon lemon zest"],
            "lemon juice": ["1 teaspoon of this is equivalent to", "1/2 teaspoon vinegar", "1 teaspoon white wine", "1 teaspoon lime juice"],
            "lemon zest": ["1 teaspoon of this is equivalent to", "1/2 teaspoon lemon extract", "2 tablespoons lemon juice"],
            "lime juice": ["1 teaspoon of this is equivalent to", "1 teaspoon vinegar", "1 teaspoon white wine", "1 teaspoon lemon juice"],
            "lime zest": ["1 teaspoon of this is equivalent to", "1 teaspoon lemon zest"],
            "macadamia nuts": ["1 cup of this is equivalent to", "1 cup almonds", "1 cup hazelnuts"],
            "mace": ["1 teaspoon of this is equivalent to", "1 teaspoon nutmeg"],
            "margarine": ["1 cup of this is equivalent to", "1 cup shortening plus 1/2 teaspoon salt", "1 cup butter", "7/8 cup vegetable oil plus 1/2 teaspoon salt", "7/8 cup lard plus 1/2 teaspoon salt"],
            "mayonnaise": ["1 cup of this is equivalent to", "1 cup sour cream", "1 cup plain yogurt"],
            "milk": ["1 cup of this is equivalent to", "1 cup soy milk", "1 cup rice milk", "1 cup water or juice", "1/4 cup dry milk powder plus 1 cup water", "2/3 cup evaporated milk plus 1/3 cup water"],
            "mint": ["1/4 cup of this is equivalent to", "1 tablespoon dried mint leaves"],
            "molasses": ["1 cup of this is equivalent to", "Mix 3/4 cup brown sugar and 1 teaspoon cream of tartar"],
            "mustard": ["1 tablespoon of this is equivalent to", "Mix together 1 tablespoon dried mustard", "1 teaspoon water", "1 teaspoon vinegar and 1 teaspoon sugar"],
            "onion": ["1 cup (chopped) of this is equivalent to", "1 cup chopped green onions", "1 cup chopped shallots", "1 cup chopped leeks", "1/4 cup dried minced onion", "1/4 cup onion powder"],
            "orange juice": ["1 tablespoon of this is equivalent to", "1 tablespoon other citrus juice"],
            "orange zest": ["1 tablespoon of this is equivalent to", "1/2 teaspoon orange extract", "1 teaspoon lemon juice"],
            "parmesan cheese": ["1/2 cup (grated) of this is equivalent to", "1/2 cup grated Asiago cheese", "1/2 cup grated Romano cheese"],
            "parsley": ["1 tablespoon of this is equivalent to", "1 tablespoon chopped fresh chervil", "1 teaspoon dried parsley"],
            "pepperoni": ["1 ounce of this is equivalent to", "1 ounce salami"],
            "raisin": ["1 cup of this is equivalent to", "1 cup dried currants", "1 cup dried cranberries", "1 cup chopped pitted prunes"],
            "rice": ["1 cup (cooked) of this is equivalent to", "1 cup cooked barley", "1 cup cooked bulgur", "1 cup cooked brown or wild rice"],
            "ricotta": ["1 cup of this is equivalent to", "1 cup dry cottage cheese", "1 cup silken tofu"],
            "rum": ["1 tablespoon of this is equivalent to", "1/2 teaspoon rum extract, plus enough water to make 1 tablespoon"],
            "saffron": ["1/4 teaspoon of this is equivalent to", "1/4 teaspoon turmeric"],
            "salami": ["1 ounce of this is equivalent to", "1 ounce pepperoni"],
            "chocolate chips": ["1 cup of this is equivalent to", "1 cup chocolate candies", "1 cup peanut butter or other flavored chips", "1 cup chopped nuts", "1 cup chopped dried fruit"],
            "shallots": ["1/2 cup of this is equivalent to", "1/2 cup chopped onion", "1/2 cup chopped leek", "1/2 cup chopped green onion"],
            "shortening": ["1 cup of this is equivalent to", "1 cup butter", "1 cup margarine minus 1/2 teaspoon salt from recipe"],
            "sour cream": ["1 cup of this is equivalent to", "1 cup plain yogurt", "1 tablespoon lemon juice or vinegar plus enough cream to make 1 cup", "3/4 cup buttermilk mixed with 1/3 cup butter"],
            "sour milk": ["1 cup of this is equivalent to", "1 tablespoon vinegar or lemon juice mixed with enough milk to make 1 cup: Let stand 5 minutes to thicken"],
            "soy sauce": ["1/2 cup of this is equivalent to", "1/4 cup Worcestershire sauce mixed with 1 tablespoon water"],
            "stock": ["1 cup of this is equivalent to", "1 cube beef or chicken bouillon dissolved in 1 cup water"],
            "sweetened condensed milk": ["1 (14-ounce) can of this is equivalent to", "3/4 cup white sugar mixed with 1/2 cup water and 1 1/8 cups dry powdered milk: Bring to a boil and cook, stirring frequently, until thickened, about 20 minutes"],
            "vegetable oil": ["1 cup of this is equivalent to", "1 cup applesauce", "1 cup fruit puree"],
            "vinegar": ["1 teaspoon of this is equivalent to", "1 teaspoon lemon or lime juice", "2 teaspoons white wine"],
            "white sugar": ["1 cup of this is equivalent to", "1 cup brown sugar", "1 1/4 cups confectioners' sugar", "3/4 cup honey", "3/4 cup corn syrup"],
            "wine": ["1 cup of this is equivalent to", "1 cup chicken or beef broth", "1 cup fruit juice mixed with 2 teaspoons vinegar", "1 cup water"],
            "yeast": ["1 (.25-ounce) package of this is equivalent to", "1 cake compressed yeast", "2 1/2 teaspoons active dry yeast", "2 1/2 teaspoons rapid rise yeast"],
            "yogurt": ["1 cup of this is equivalent to", "1 cup sour cream", "1 cup buttermilk", "1 cup sour milk"]
          };

          const query = this.searchQuery.toLowerCase();
          this.substitutions = ingredientSubstitutions[query] || [];
        },
        convertToUS() {
          // Conversion rates (approximate)
          const conversionRates = {
            ml: 0.033814, // 1 ml ≈ 0.033814 fl oz
            g: 0.035274, // 1 g ≈ 0.035274 oz
            kg: 35.274 // 1 kg ≈ 35.274 oz
          };

          const rate = conversionRates[this.metricUnit];
          if (rate) {
            this.usValue = (parseFloat(this.metricValue) * rate).toFixed(2);
          } else {
            this.usValue = null;
          }
        }
      }
    });

</body>
</html>

export default {
    
}
</script>
<style lang="sass">
    
</style>
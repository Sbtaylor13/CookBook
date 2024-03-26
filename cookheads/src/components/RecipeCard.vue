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
          <v-card>
            <v-card-title>{{ food.name }}</v-card-title>
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
        { name: 'Key Lime Pie', difficulty: 'Difficulty: ⭐⭐' },
        { name: 'Banana Bread', difficulty: 'Difficulty: ⭐' },
        { name: 'Strawberry Pineapple Smoothie', difficulty: 'Difficulty: ⭐' },
        { name: 'Tanghulu Grapes', difficulty: 'Difficulty: ⭐⭐⭐' },
        { name: 'Peach Cobbler', difficulty: 'Difficulty: ⭐⭐'}
      ]
    }
  }
}
</script>
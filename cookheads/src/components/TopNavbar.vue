<template>
        <v-app-bar style="background-color: blueviolet;" color="teal-darken-4"  :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon style="color:red"></v-app-bar-nav-icon>
            </template>
            <v-btn v-if="!hideHome" style="background-color:blueviolet;color:white;font-weight: bolder;" @click="$emit('GoHome')">Home</v-btn>
           

            <v-icon icon="mdi-home" />
            <v-app-bar-title>Cookheads Recipe Project (coming soon!)</v-app-bar-title>
            <v-btn style="background-color:blueviolet;color:white;font-weight: bolder;" @click="$emit('GoAddRecipe')">+ New Recipe</v-btn>
        </v-app-bar>
      <!-- <RecipeBook  v-show="viewPage===2"></RecipeBook> -->
</template>

<script>
export default {
    props: ['hideHome'],
    name: 'TopNavbar'
}
</script>
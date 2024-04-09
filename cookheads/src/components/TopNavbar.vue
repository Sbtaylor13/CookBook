<template>
        <v-app-bar color="rgb(188,226,227)"  :elevation="2">
            <!-- <template v-slot:prepend>
                <v-app-bar-nav-icon style="color:red"></v-app-bar-nav-icon>
            </template> -->
            <v-btn v-if="!hideHome" style="background-color:rgb(92,136,121);color:white;font-weight: bolder;" @click="$emit('GoHome')">Home</v-btn>
           

            <!-- <v-icon icon="mdi-home" /> -->
            <v-app-bar-title style="font-size:22pt; color:rgb(92,136,121);text-align: center;">Cookheads Recipe Project</v-app-bar-title>
            <v-btn style="background-color:rgb(92,136,121);color:white;font-weight: bolder;" @click="$emit('GoAddRecipe')">+ New Recipe</v-btn>
        </v-app-bar>
</template>

<script>
export default {
    props: ['hideHome'],
    name: 'TopNavbar'
}
</script>
<style>

</style>
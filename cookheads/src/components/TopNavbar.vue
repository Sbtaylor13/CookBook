<template>
        <v-app-bar color="rgb(188,226,227)"  :elevation="2">
            <v-btn @click="toggleTheme">{{ Five08?"Graphics": "High Contrast" }}</v-btn>
            <!-- <template v-slot:prepend>}
                <v-app-bar-nav-icon style="color:red"></v-app-bar-nav-icon>
            </template> -->
            <v-btn v-if="!hideHome" style="background-color:rgb(92,136,121);color:white;font-weight: bolder;" @click="$emit('GoHome')">Home</v-btn>
           

            <!-- <v-icon icon="mdi-home" /> -->
            <v-app-bar-title style="font-size: 22pt; color: rgb(92, 136, 121); text-align: center; line-height: 1.3;">
                Cookheads Recipe Project
            </v-app-bar-title>

            <v-btn style="background-color:rgb(92,136,121);color:white;font-weight: bolder;" @click="$emit('GoAddRecipe')">+ New Recipe</v-btn>
        </v-app-bar>
</template>


<!-- <script setup> -->
<!-- // import { useTheme } from 'vuetify'
// const theme = useTheme()

function toggleTheme () {
  //  const newTheme = theme.global.current.dark ? 'light' : 'dark';
    // console.log("New Theme: " + newTheme)
//   theme.global.name =  newTheme;
//   theme.global.name.value = 'dark' //newTheme

} -->
<!-- </script> -->

<script>
export default {
    props: ['hideHome', 'Five08'],
    name: 'TopNavbar',
    methods: {
        toggleTheme() {
            this.$emit("toggle508");
            // const theme = useTheme();
            // theme.global.name = theme.global.current.dark ? 'light' : 'dark';
            this.$vuetify.theme.dark = true;
        }
    }
}

</script>
<style>

</style>
import { createApp } from 'vue'
import App from './App.vue'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

//import Vue from 'vue'
//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//@import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader
// Vuetify
//import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import RecipeBook from './components/RecipeBook.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi
    }
  }
})
//Vue.use(vuetify)
const app = createApp(App).use(vuetify).mount('#app')
// createApp(App).use(vuetify).mount('#app')
app.component('RecipeBook', {RecipeBook})
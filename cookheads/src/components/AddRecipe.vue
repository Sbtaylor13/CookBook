<template>
    <div>
        <v-container>
            <v-row>
                <v-card
                    class="recipe-card"
                    @click="toggleAdd()"
                >
                </v-card>

        
            </v-row>
        </v-container>
    </div>
</template>

<script>
methods: {
    toggleAdd() {

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
</style>

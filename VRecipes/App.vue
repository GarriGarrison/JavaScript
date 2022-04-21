<template>
  <div class="container">
    <AddRecipe :onAdd="addRecipe" />

    <div class="columns">
      <RecipeList @select="onSelectRecipe" :recipes="recipes" />
      <RecipeDetail :recipe ="current" @remove="onRemoveRecipe" />
    </div>
  </div>
</template>

<script lang="ts">
import AddRecipe from '@/components/AddRecipe.vue'
import RecipeDetail from '@/components/RecipeDetail.vue'
import RecipeList from '@/components/RecipeList.vue'
import {useRecipes} from '@/composition/recipes'

export default {
  name: 'app',
  components: {
    AddRecipe,
    RecipeList,
    RecipeDetail,
  },
  setup() {
    return {
      ...useRecipes()
    }
  }
  // data() {
  //   return {
  //     recipes: [],
  //     current: null
  //   }
  // },
  // methods: {
  //   addRecipe(recipe) {
  //     this.recipes.push(recipe)
  //     // console.log('recipes', this.recipes)
  //   },
  //   onSelectRecipe(id) {
  //     this.current = this.recipes.find(r => r.id === id)
  //   },
  //   onRemoveRecipe(id) {
  //     this.current = null
  //     this.recipes = this.recipes.filter(r => r.id !== id)
  //   }
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  color: #222;
}
a {
  text-decoration: none;
  color: darkblue;
  transition: 0.3s all ease;
}
.center {
  text-align: center;
}
a:hover {
  cursor: pointer;
  opacity: 0.7;
  text-decoration: underline;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
}
.columns {
  display: flex;
}
.detail,
.list {
  width: 50%;
  border: 1px solid #eee;
}
.list {
  border-right: 0;
}
.btn {
  border-radius: 5px;
  background: darkblue;
  color: #fff;
  padding: 6px 14px;
  cursor: pointer;
}
.btn:disabled {
  background-color: #eee;
  color: black;
  cursor: not-allowed;
}
.btn.remove {
  background: darkred;
}
.btn.secondary {
  background: grey;
}
</style>

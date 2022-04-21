import { TRecipe } from '@/types'
import {ref} from 'vue'

export function useRecipes() {
  const recipes = ref<TRecipe[]>([])
  const current = ref<TRecipe | null>(null)

  const addRecipe = (recipe: TRecipe) => {
      recipes.value.push(recipe)
      // console.log('recipes', this.recipes)
  }

  const onSelectRecipe = (id: string) => {
    // current.value = recipes.value.find((r) => r.id === id) //as TRecipe
    const res = recipes.value.find((r) => r.id === id)

    if (res === undefined) {
      current.value = null
    } else {
      current.value = res
    }
  }

  const onRemoveRecipe = (id: string) => {
    current.value = null
    recipes.value = recipes.value.filter(r => r.id !== id)
  }

  return {
    recipes,
    current,
    addRecipe,
    onSelectRecipe,
    onRemoveRecipe,
  }
}

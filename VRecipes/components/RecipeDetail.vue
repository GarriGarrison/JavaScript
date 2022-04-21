<template>
  <div class="detail">
    <div class="recipe" v-if="recipe">
      <h2>{{ recipe.title }}</h2>
      <a href="#" @click.prevent="onToggle">{{ visible ? 'Скрыть' : 'Показать' }}</a>
      <p v-if="visible">{{ recipe.description }}</p>
      <button class="btn remove" @click="$emit('remove', recipe.id)">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useToggle } from '@/composition/toggle'
import { watch } from 'vue'
// import toggleMixin from '@/mixin/toggleMixin'

export default {
  props: {
    recipe: Object,
  },
  setup(props) {
    const { visible, onToggle } = useToggle()

    watch(
      () => props.recipe,
      () => {
        visible.value = false
      }
    )

    return {
      // ...useToggle()
      visible,
      onToggle,
    }
  },
  // mixins: [toggleMixin],
  // data() {
  //   return {
  //     visible: false
  //   }
  // },
  // methods: {
  //   onToggle() {
  //     this.visible = !this.visible
  //   }
  // },
  // watch: {
  //   recipe() {
  //     this.visible = false
  //   }
  // }
}
</script>

<style>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.recipe p {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}
.recipe a,
.recipe h2 {
  margin-bottom: 0.5rem;
}
</style>

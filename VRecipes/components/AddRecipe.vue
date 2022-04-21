<template>
  <form class="form" @submit.prevent="onSubmit">
    <h1>Добавить рецепт</h1>
    <!-- <div v-if="visible"> -->
    <div v-if="show">
      <div class="input">
        <input type="text" placeholder="Название рецепта" v-model="form.title" />
      </div>
      <div class="input">
        <input type="text" placeholder="Описание рецепта" v-model="form.description" />
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Создать</button>
      <!-- <button class="btn secondary" type="button" @click="onToggle">{{ visible ? 'Убрать' : 'Показать' }} форму</button> -->
      <button class="btn secondary" type="button" @click="changeShow">{{ show ? 'Убрать' : 'Показать' }} форму</button>
    </div>
  </form>
</template>

<script lang="ts">
// import toggleMixin from '@/mixin/toggleMixin'
// import { ref, reactive, computed } from 'vue'
import { useToggle } from '@/composition/toggle'
import { useForm } from '@/composition/form'

export default {
  props: {
    onAdd: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // const visible = ref(true)

    // const onToggle = () => {
    //   visible.value = !visible.value
    // }

    // const form = reactive({
    //   title: '',
    //   description: '',
    // })

    // const onSubmit = () => {
    //   const recipe = {
    //     title: form.title.trim(),
    //     description: form.description.trim(),
    //     id: Date.now().toString(),
    //   }

    //   form.title = ''
    //   form.description = ''

    //   props.onAdd(recipe)
    // }

    // const valid = computed(() => {
    //   return form.title.trim() && form.description.trim()
    // })

    const { visible: show, onToggle: changeShow } = useToggle()

    return {
      // visible,
      // onToggle,
      // onSubmit,
      // form,
      // valid,
      // ...useToggle()
      ...useForm(props),
      show,
      changeShow,
    }
  },

  // mixins: [toggleMixin],
  // data() {
  //   return {
  //     title: '',
  //     description: '',
  //     // visible: true,
  //   }
  // },
  // methods: {
  // onToggle() {
  //   this.visible = !this.visible
  // },
  // onSubmit() {
  //   const recipe = {
  //     title: this.title.trim(),
  //     description: this.description.trim(),
  //     id: Date.now().toString(),
  //   }

  //   this.title = ''
  //   this.description = ''

  //   this.onAdd(recipe)
  // },
  //},
  // computed: {
    // valid() {
    //   return this.title.trim() && this.description.trim()
    // },
  // },
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}
.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}
.input {
  margin-bottom: 1rem;
}
.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}
.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>

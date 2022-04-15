<template>
  <form @submit.prevent="onSubmit">
    <textarea v-model="body" required placeholder="Type tweet here" />
    <button class="btn btnTweet" type="submit">Создать</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['onSubmit'],  //здесь можно сделать описание emits, так же как описываюся props

  // setup(props, context) {
    setup(_, {emit}) {
    const body = ref('')

    const onSubmit = () => {
      // context.emit('onSubmit', {
        emit('onSubmit', {
        id: Date.now(),
        body: body.value,
        likes: 0,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        // date: Date.now().toLocaleString(), //*date": "1 649 921 362 307"
        date: new Date(Date.now()).toLocaleString(), //* "date": "14.04.2022, 10:29:18"
      })

      body.value = ''
    }

    return { body, onSubmit }
  },
}

// export default {
//   data() {
//     return {
//       body: '',
//     }
//   },
//   methods: {
//     onSubmit() {
//       // e.preventDefault()
//       // console.log(this.item)
//       this.$emit('onSubmit', {
//         id: Date.now(),
//         body: this.body,
//         likes: 0,
//         avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
//         // date: Date.now().toLocaleString(), //*date": "1 649 921 362 307"
//         date: new Date(Date.now()).toLocaleString(), //* "date": "14.04.2022, 10:29:18"
//       })
//       this.body = ''
//     },
//   },
// }
</script>

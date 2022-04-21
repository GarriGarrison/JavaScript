import { reactive, computed } from 'vue'

interface FormProps {
  onAdd: Function
}

export function useForm(props: FormProps) {
  const form = reactive({
    title: '',
    description: '',
  })

  const onSubmit = () => {
    const recipe = {
      title: form.title.trim(),
      description: form.description.trim(),
      id: Date.now().toString(),
    }

    form.title = ''
    form.description = ''

    props.onAdd(recipe)
  }

  const valid = computed(() => {
    return form.title.trim() && form.description.trim()
  })

  return { form, onSubmit, valid }
}

import { ref } from 'vue'

export function useToggle() {
  const visible = ref(true)

  const onToggle = () => {
    visible.value = !visible.value
  }

  return { visible, onToggle }
}

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);
  const getCount = computed(() => count.value);
  const dividedBy = computed(() => (divisor) => count.value / divisor);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function incrementBy(number) {
    count.value += number;
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
    incrementBy,
    getCount,
    dividedBy
  };
});

import { defineStore } from 'pinia'

export const useStore = defineStore('auth', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    tryLogin({identifier, password}) {
      axios.get('/auth/local', {params: {identifier, password}})
          .then((response) => {
            console.log(response);
          }).catch((error) => {
        console.log(error);
      })
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
});

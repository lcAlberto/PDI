import { defineStore } from "pinia"

export const userStore = defineStore('user', {
    state: () => {
        return {
            usersList: [
                { id: '1', name: 'Marília Mendonça' },
                { id: '2', name: 'Maiara' },
                { id: '3', name: 'Maraisa' },
            ]
        }
    }
})
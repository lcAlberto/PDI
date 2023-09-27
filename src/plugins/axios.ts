import axios from 'axios'
import * as process from 'process'

const baseURL = process.env.BASE_URL

axios.create({
    baseURL,
    // 'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    "Content-Type": "application/json"
})

axios.onResponse((err) => {
    if (err.response.status === 401) {
        // store.dispatch('tryLogout', false)
        // store.commit('updateAlert', {
        //     open: true,
        //     type: 'warning',
        //     message: 'Sessão expirada, por favor faça o login novamente',
        //     force: true
        // })
        redirect(401, '/')
    } else if (err.response.status === 404) {
        // store.commit('updateAlert', {
        //     open: true,
        //     type: 'warning',
        //     message: 'Essa função não está disponível para exemplo.',
        //     force: true
        // })
    } else if (err.response.status === 503) {
        error({ statusCode: 503, message: 'Sistema em manutenção' })
    }
})

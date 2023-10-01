<template>
  <div class="form-control">
    {{counter}}
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <input
        v-model="form.username"
        type="email"
        placeholder="email"
        class="input input-bordered"
    />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input
          v-model="form.password"
          type="password"
          placeholder="password"
          class="input input-bordered"
      />
        <label class="label">
          <a
              href="#"
              class="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
    </div>
    <div class="form-control mt-6">
        <button
            class="btn btn-primary"
            @click="handleSubmit"
        >
          Login
        </button>
    </div>
</template>

<script lang="ts">
// import { mapActions } from 'pinia';
import { userStore } from '@/stores/user'

export default {
  data () {
    const store = userStore()
    return {
      users: store.usersList,
      form: {
        username: '',
        password: '',
      }
    }
  },
  mounted() {
    console.log(this.users)
  },
  methods: {
    // ...mapActions(['tryLogin']),

    async handleSubmit () {
      if (this.form.password.length && this.form.username.length) {
        // store.tryLogin({
        //   identifier: this.form.username,
        //   password: this.form.password
        // })
      }
    }
  }

}
</script>

<style></style>
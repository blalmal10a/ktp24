<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-xl">
      <q-card-section>
        <q-form
          @submit="onSubmitLogin"
          class="row q-col-gutter-md"
        >
          <div class="full-width">
            <q-input
              outlined
              v-model="auth.user.username"
              label="username"
            ></q-input>

          </div>
          <div class="full-width">
            <q-input
              outlined
              v-model="auth.user.password"
              label="password"
              type="password"
            ></q-input>
          </div>
          <div class="full-width">
            <q-input
              outlined
              v-model="auth.user.password_confirmation"
              label="confirm password"
              type="password"
            ></q-input>
          </div>
          <div class="full-width">
            <q-btn
              type="submit"
              color="primary"
              class="full-width"
              label="submit"
            ></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <!--  -->
  </q-page>
</template>
<script setup>
import { api } from 'src/boot/axios';
import { reactive } from 'vue';

const auth = reactive({
  user: {
    username: '',
    password: '',
    password_confirmation: '',
  }
});
async function onSubmitLogin() {
  try {
    const res = await api.post('register', auth.user, {
      headers: {
        Authorization: `Bearer 7vW7IpORXkvKXrOTo9OQV71siwDvv4bViknIFqb67be4facd`
        // Authorization: `Bearer ${localStorage.getItem('token') ?? 'e1NbMeEIKB5oH0jod9f0Oxw8kSz4w7a2SNHmmIm270822559'}`
      }
    })

  } catch (error) {
    console.error(error.message);
  }
}
</script>

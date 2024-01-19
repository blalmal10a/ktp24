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
          <!-- <div class="full-width">
            <q-input
              outlined
              v-model="auth.user.password_confirmation"
              label="confirm password"
              type="password"
            ></q-input>
          </div> -->
          <div class="full-width">
            <q-btn
              type="submit"
              color="primary"
              class="full-width"
              label="submit"
            ></q-btn>
          </div>
          <div class="full-width">
            <q-btn
              @click="getUser"
              color="primary"
              class="full-width"
              label="get user"
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
import { onMounted, reactive } from 'vue';

const auth = reactive({
  user: {
    username: '',
    password: '',
    // password_confirmation: '',
  }
});
onMounted(async () => {
  await api.get('http://localhost:24102/sanctum/csrf-cookie')
  // await api.get('sanctum/csrf-cookie')
  getUser();
})
async function onSubmitLogin() {
  try {
    const res = await api.post('login', auth.user, {
      headers: {
        Authorization: `Bearer 7vW7IpORXkvKXrOTo9OQV71siwDvv4bViknIFqb67be4facd`
      }
    })

  } catch (error) {
    console.error(error.message);
  }
}

async function getUser() {
  // 3|OfpFh3XevTS88jm3RFkVzrBq7GSpHItA42PcSkUX4c7cdc66
  try {
    const res = await api.get(`user`, {
      // headers: {
      //   Authorization: `Bearer 3|OfpFh3XevTS88jm3RFkVzrBq7GSpHItA42PcSkUX4c7cdc66`
      // }
    })
  } catch (error) {
    console.error(error.message);
  }
}
</script>

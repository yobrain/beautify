<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">Beautify</h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Adventure starts here 🚀</p>
          <p class="mb-2">Please sign-up to your account and start the adventure</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              placeholder="JohnDoe"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <v-checkbox hide-details class="mt-1">
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy &amp; terms</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn block color="primary" class="mt-6"> Sign Up </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> Already have an account? </span>
          <router-link :to="{ name: 'login' }"> Sign in instead </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social link -->
        <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLinks" :key="link.icon" icon class="ms-1">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const socialLinks = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      isPasswordVisible,
      username,
      email,
      password,
      socialLinks,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>

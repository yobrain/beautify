<template>
  <v-app>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar app flat absolute color="transparent">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
          <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <a href="https://github.com/vision-ui/beautify" target="_blank" rel="nofollow">
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a>
          <theme-switcher></theme-switcher>

          <!--  -->
          <v-badge bordered color="error" content="6" overlap>
            <v-btn icon small class="ms-3">
              <v-icon>
                {{ icons.mdiBellOutline }}
              </v-icon>
            </v-btn>
          </v-badge>
          <!--  -->
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer app inset color="transparent" absolute height="56" class="px-0">
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; {{ currentYear }}
            <a href="https://github.com/tal7aouy" class="text-decoration-none" target="_blank">tal7aouy</a></span
          >
          <span class="d-sm-inline d-none">
            <a href="#" target="_blank" class="me-6 text--secondary text-decoration-none">About</a>
            <a href="mailto:tal7aouy@gmail.com" target="_blank" class="me-6 text--secondary text-decoration-none"
              >Contact Us</a
            >
            <a
              href="https://github.com/tal7aouy/beautify-dashboard/blob/main/LICENSE"
              target="_blank"
              class="text--secondary text-decoration-none"
              >MIT Licence</a
            >
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)
    const currentYear = ref(new Date().getFullYear())

    return {
      isDrawerOpen,
      currentYear,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>

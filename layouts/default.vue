<script setup lang="ts">
const links = [
  { name: "Партнеры", path: "/#our-teams" },
  // { name: "Портфолио", path: "/#cases" },
  { name: "Заказать сайт", path: "/#order" }
];

const activeIndex: any = ref(null);

const setActiveLink = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <v-app>
    <v-app-bar color="black" height="80">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12" xl="11">
            <v-app-bar-title>
              <v-row class="d-flex justify-space-between">
                <v-col cols="2" class="d-flex align-center justify-start">
                  <NuxtLink to="/" class="logo-container">
                    <img src="~/assets/icons/firetechno-logo.svg" alt="" class="logo">
                    <span class="d-none d-md-flex">
                      &nbsp;FIRE TECHNO
                    </span>
                  </NuxtLink>
                </v-col>
                <v-col cols="10" class="navigation">
                  <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path" class="animated-link"
                    :class="{ active: activeIndex === index }" @click="setActiveLink(index)">
                    {{ link.name }}
                  </NuxtLink>
                  <!-- <NuxtLink to="#our-teams" class="animated-link" :active-class="'active'">
                  О нас
                </NuxtLink>
                <NuxtLink to="#cases" class="animated-link">
                  Портфолио
                </NuxtLink>
                <NuxtLink to="#order" class="animated-link">
                  Заказать сайт
                </NuxtLink>  -->
                </v-col>
              </v-row>
            </v-app-bar-title>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  color: white;
  font-weight: 600;
}

.logo {
  height: 65px;
  cursor: pointer;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    text-decoration: none;
    color: white;
    // info abt clamp:
    // 360 -- 1264
    // 12 -- 20
    // font-size: clamp(0.75rem, 0.5509rem + 0.885vw, 1.25rem);
    // 300 -- 1264
    // 8 -- 20
    // font-size: clamp(0.5rem, 0.2666rem + 1.2448vw, 1.25rem);
    // 300 -- 1264
    // 10 -- 20
    font-size: clamp(0.625rem, 0.4305rem + 1.0373vw, 1.25rem);
    margin: 10px;
  }
}

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.animated-link {
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.animated-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.animated-link.active::after {
  width: 100%;
}
</style>
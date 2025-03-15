<script setup lang="ts">
useHead({
  title: "FIRE TECHNO"
})
useSeoMeta({
  title: 'FIRE TECHNO',
  ogTitle: 'FIRE TECHNO',
  description: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO',
  ogDescription: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO',
  ogImage: 'https://example.com/image.png',
})

const links = [
  { name: "О нас", path: "/#our-teams" },
  { name: "Портфолио", path: "/#cases" },
  { name: "Заказать сайт", path: "/#order" }
];

const activeIndex: any = ref(null);

const setActiveLink = (index: number) => {
  activeIndex.value = index;
};
</script>
<template>
  <v-app-bar color="black" height="80">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" xl="11">
          <v-app-bar-title>
            <v-row class="d-flex justify-space-between">
              <v-col cols="2" class="d-flex align-center justify-start">
                <NuxtLink to="/">
                  <img src="~/assets/icons/firetechno-logo.svg" alt="" class="logo">
                </NuxtLink>
              </v-col>
              <v-col cols="10" class="navigation">
                <NuxtLink
                  v-for="(link, index) in links"
                  :key="index"
                  :to="link.path"
                  class="animated-link"
                  :class="{ active: activeIndex === index }"
                  @click="setActiveLink(index)"
                >
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
  
  <v-container class="container" style="margin-top: 80px;"><!-- margin for header -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" xl="11">
        <LandingSiteDevelopmentForYourTasks />
      </v-col>
      <v-col cols="12" xl="11">
        <LandingStagesOfDevelopment />
      </v-col>
      <v-col cols="12" xl="11">
        <LandingLandings />
      </v-col>
      <v-col cols="12" xl="11">
        <LandingTelegramBots />
      </v-col>
    </v-row>
  </v-container>
  <div class="why-us-background">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" xl="11">
          <LandingWhyUs />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" xl="11">
        <LandingStagesOfWork />
      </v-col>
      <v-col cols="12" xl="11" id="our-teams">
        <LandingOurTeams />
      </v-col>
    </v-row>
  </v-container>

  <div class="fire-container">
    <img src="~/assets/images/fire.png" alt="" class="fire-image" />
  </div>

  <div style="background-color: #c60202">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" xl="11" id="cases">
          <LandingCases />
        </v-col>
        <v-col cols="12" xl="11" id="order">
          <LandingFeedback />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped lang="scss">
.fire-image {
  width: 100vw;
  height: 101%;
  z-index: 1000;
}
.why-us-background {
  background-image: url("~/assets/images/why-us.png");
  background-position: center;
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

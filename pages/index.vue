<script setup lang="ts">
useHead({
  title: "FIRE TECHNO",
  meta: [
    { name: 'description', content: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO' },
    { name: 'keywords', content: 'лендинги, продвижение, заказная разработка, telegram, telegram mini-apps' },
    { name: "yandex-verification", content: "8542f5bff424e91c" }
  ]
})
useSeoMeta({
  title: 'FIRE TECHNO',
  ogTitle: 'FIRE TECHNO',
  description: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO',
  ogDescription: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO',
  ogImage: '/og-image.png',
})


</script>
<template>
  <div>

    <v-container class="container">
      <v-row class="d-flex justify-center">
        <v-col cols="12" xl="11">
          <LandingSiteDevelopmentForYourTasks />
        </v-col>




        <!-- <v-col cols="12" xl="11">
            <LandingLandings />
          </v-col>
          <v-col cols="12" xl="11">
            <LandingTelegramBots />
          </v-col> -->
      </v-row>
    </v-container>


    <div class="fire-container">
      <ClientOnly>
        <img src="~/assets/images/fire.png" alt="" class="fire-image" />
      </ClientOnly>
    </div>

    <div style="background-color: #c60202">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12" xl="11" id="our-teams" style="margin-bottom: 100px;">
            <LandingOurTeams />
          </v-col>
          <!-- <v-col cols="12" xl="11" id="cases">
            <LandingCases />
          </v-col> -->
          <!-- <v-col cols="12" xl="11" id="order">
            <LandingFeedback />
          </v-col> -->
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style scoped lang="scss">
.fire-container {
  position: relative;
  height: calc(100vw*595px/1697px);
}

.fire-image {
  position: absolute;
  bottom: -5px;
  width: 100vw;
  // height: 101%;
  z-index: 1000;
}

.why-us-background {
  background-image: url("~/assets/images/why-us.png");
  background-position: center;
}
</style>

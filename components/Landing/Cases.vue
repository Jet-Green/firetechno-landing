<script setup></script>
<template>
  <ClientOnly>
    <v-row style="margin-top: 60px;">
      <v-col cols="12">
        <h2>
          Сайты под ключ: <br />
          разработка и запуск
        </h2>
      </v-col>

      <v-row>
        <v-col cols="12" md="4">
          <NuxtLink to="https://gorodaivesi.ru" target="_blank">
            <img src="~/assets/images/gorodaivesi.png" alt="" class="image" />
          </NuxtLink>
        </v-col>
        <v-col cols="12" md="4">
          <NuxtLink to="https://afisha-hack.ru" target="_blank">
            <img src="~/assets/images/afisha-hack.png" alt="" class="image" />
          </NuxtLink>
        </v-col>
        <v-col cols="12" md="4">
          <NuxtLink to="https://plpo.ru" target="_blank">
            <img src="~/assets/images/plpo.png" alt="" class="image" />
          </NuxtLink>
        </v-col>
        <v-col cols="12">
          <p>Узнайте, как мы помогли другим компаниям достичь успеха.</p>
        </v-col>
      </v-row>
    </v-row>
  </ClientOnly>
</template>
<style scoped lang="scss">
  .image {
    width: 100%;
    cursor: pointer;
  }
</style>

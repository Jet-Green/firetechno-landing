<script setup lang="ts"></script>
<template>
  <v-row class="page">
    <v-col cols="12" md="6">
      <h1 class="first-heading">Разработка сайтов для ваших задач</h1>
      <p class="subtitle">Создание и разработка сайтов от команд FIRE TECHNO</p>

      <v-btn class="buy-btn" color="primary" size="x-large"> заказать </v-btn>
    </v-col>

    <v-col cols="12" md="6">
      <img src="~assets/images/rse-2-1 v1.webp" alt="" class="first-page-image" />
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.page {
  min-height: 100dvh;
  display: flex;
  align-items: center;
}

.first-heading {
  font-weight: 700;
  line-height: 1.2;
  // 36 -> 52
  // font-size: clamp(2.25rem, 1.4545rem + 2.2727vw, 3.25rem);
  // 32 -> 58
  font-size: clamp(2rem, 0.7074rem + 3.6932vw, 3.625rem);
}

.subtitle {
  color: rgb(167, 167, 167);
  margin-top: 20px;
  font-weight: 200;
  font-size: clamp(1.125rem, 0.9261rem + 0.5682vw, 1.375rem);
}
.buy-btn {
  margin-top: 50px;
}
.first-page-image {
  width: 100%;
  border-radius: 20px;
}
</style>

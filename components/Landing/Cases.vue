<script setup>
const cases = [
  { title: "Лендинги", icon: "mdi-monitor-cellphone", desc: "Современные промо-сайты с упором на конверсию." },
  { title: "Интернет-магазины", icon: "mdi-cart-outline", desc: "UX, интеграции и удобство для продаж." },
  { title: "Платформы", icon: "mdi-server", desc: "Веб-сервисы и личные кабинеты любой сложности." },
  { title: "Мессенджеры", icon: "mdi-message-outline", desc: "Автоматизация и коммуникации через чаты." },
  { title: "Telegram боты и Mini Apps", img: "~/assets/icons/telegram-svgrepo-com.svg", desc: "Интерактивные мини-приложения под Telegram." },
]
</script>
<template>
  <ClientOnly>
    <v-row style="margin-top: 60px;">
      <v-col cols="12">
        <h2>
          Наши разработки
        </h2>
      </v-col>
      <v-row class="cases-section" dense align="stretch" justify="center">
        <v-col v-for="(item, i) in cases" :key="i" cols="12" sm="6" md="4" class="d-flex">
          <v-card class="case-card flex-grow-1" rounded="xl">
            <v-icon v-if="item.icon" :icon="item.icon" size="64" class="mb-4 case-icon" />
            <img v-else :src="item.img"></img>
            <div class="case-content ml-auto">
              <h3 class="text-h6 text-md-h5 font-weight-bold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-body-2 text-medium-emphasis">
                {{ item.desc }}
              </p>
            </div>
          </v-card>
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

.cases-section {
  // background: linear-gradient(180deg, #b71c1c 0%, #d32f2f 100%);
  padding: 80px 0;
}

.case-card {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 60px;

  justify-content: start;
  cursor: pointer;
}

.case-content {
  max-width: 280px;
}
</style>

<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col cols="12">
      <h2>
        Сайты под ключ: <br />
        разработка и запуск
      </h2>
    </v-col>
    
    <v-col cols="12">
      <v-row class="features">
        <v-col cols="12" md="6" lg="4" class="feature">
          <v-row>
            <v-col cols="6">
              <p class="card-title">Полный цикл разработки</p>
            </v-col>
            <v-col cols="6"> картинка </v-col>
          </v-row>
          <p>От концепции до готового сайта.</p>
        </v-col>

        <v-col cols="12" md="6" lg="4" class="feature">
          <p class="card-title">Адаптивный дизайн</p>
          <p>Корректное отображение на всех устройствах.</p>
        </v-col>

        <v-col cols="12" md="6" lg="4" class="feature">
          <p class="card-title">SEO-оптимизация</p>
          <p>Повышение позиций в поисковых системах.</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.features {
  display: flex;
}
.feature {
  border: 1px solid #dc0000;
  border-radius: 25px;
}
</style>

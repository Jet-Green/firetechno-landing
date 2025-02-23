<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col cols="12" style="margin-bottom: 60px;">
      <h2>
        Сайты под ключ: <br />
        разработка и запуск
      </h2>
    </v-col>

    <v-col cols="12">
      <v-row class="features">
        <v-col cols="12" md="6" lg="4">
          <div class="feature">
            <v-row>
              <v-col cols="8">
                <p class="card-title">Полный цикл разработки</p>
              </v-col>
              <v-col cols="4" class="d-flex justify-end"> 
                <img src="~/assets/icons/Speech Bubble.svg" class="card-icon" alt="">
              </v-col>
            </v-row>

            <p class="comment">От концепции до готового сайта.</p>
          </div>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <div class="feature">
            <v-row>
              <v-col cols="8">
                <p class="card-title">Адаптивный дизайн</p>
              </v-col>
              <v-col cols="4" class="d-flex justify-end">
                <img src="~/assets/icons/Favorite.svg" class="card-icon" alt="">
              </v-col>
            </v-row>

            <p class="comment">Корректное отображение на всех устройствах.</p>
          </div>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <div class="feature">
            <v-row>
              <v-col cols="8">
                <p class="card-title">SEO-оптимизация</p>
              </v-col>
              <v-col cols="4" class="d-flex justify-end">
                <img src="~/assets/icons/Settings.svg" class="card-icon" alt="">
              </v-col>
            </v-row>

            <p class="comment">Повышение позиций в поисковых системах.</p>
          </div>
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
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.comment {
  margin-top: 40px;
}
.card-icon {
  height: 80px;
}
</style>

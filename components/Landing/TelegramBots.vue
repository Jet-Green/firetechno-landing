<script setup></script>
<template>
  <v-row style="margin-top: 150px;">
    <v-col cols="12" lg="8" class="d-flex">
      <v-row>
        <v-col cols="12">
          <h2>
            Чат-боты для Telegram: <br />
            автоматизация и общение <br />
            с клиентами 24/7
          </h2>
        </v-col>
        <v-col cols="12" class="d-flex d-lg-none justify-center">
          <img src="~/assets/images/chop-chop-phone.png" style="height: 50vh;" alt="">
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="6" lg="4">
              <img src="~/assets/icons/Dialog Plus.svg" alt="" class="item-icon" />
              <p class="card-title">Автоматизация</p>
              
              <p class="mt-10 d-flex d-lg-none">
                Ответы на часто
                задаваемые вопросы.
              </p>
            </v-col>

            <v-col cols="12" md="6" lg="4">
              <img src="~/assets/icons/Support.svg" alt="" class="item-icon" />
              <p class="card-title">
                Круглосуточная
                поддержка
              </p>

              <p class="mt-10 d-flex d-lg-none">
                Повышение лояльности и <br />
                удовлетворенности клиентов.
              </p>
            </v-col>

            <v-col cols="12" md="6" lg="4">
              <img src="~/assets/icons/Target.svg" alt="" class="item-icon" />
              <p class="card-title">Вовлеченность</p>
              <p class="mt-10 d-flex d-lg-none">
                Доступность для клиентов в любое время.
              </p>
            </v-col>
          </v-row>
          <v-row class="d-none d-lg-flex">
            <v-col cols="12" md="6" lg="4">
              <p>
                Ответы на часто
                задаваемые вопросы.
              </p>
            </v-col>
            
            <v-col cols="12" md="6" lg="4">
              <p>Доступность для клиентов в любое время.</p>
            </v-col>

            <v-col cols="12" md="6" lg="4">
              <p>
                Повышение лояльности и <br />
                удовлетворенности клиентов.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="4" class="d-none d-lg-flex justify-start">
      <img src="~/assets/images/chop-chop-phone.png" alt="">
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.item-icon {
  height: 40px;
}
</style>

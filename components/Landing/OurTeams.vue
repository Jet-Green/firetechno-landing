<script setup></script>
<template>
  <h2>Команды исполнителей</h2>
  <v-col cols="12">
    <v-row class="features">
      <v-col cols="12" md="6" lg="4">
        <NuxtLink class="feature" to="https://t.me/GrachevRV" target="_blank">
          <v-row>
            <v-col cols="auto" class="d-flex align-center justify-end">
              <img src="~/assets/images/qbit-logo.jpg" alt="" class="team-logo">
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <p class="card-title">Кубит</p>
            </v-col>
          </v-row>

          <p class="comment">Клуб программирования</p>
        </NuxtLink>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <NuxtLink class="feature" to="https://t.me/FireTechnologies" target="_blank">
          <v-row>
            <v-col cols="auto" class="d-flex align-center justify-end">
              <img src="~/assets/icons/firetechno-logo.svg" alt="" class="team-logo">
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <p class="card-title">FIRE TECHNO team</p>
            </v-col>
          </v-row>

          <p class="comment">Если нужно выполнить заказ - пишите нам!</p>
        </NuxtLink>
      </v-col>

      <!-- <v-col cols="12" md="6" lg="4">
        <div class="feature">
          <v-row>
            <v-col cols="8">
              <p class="card-title">Команда продвижения</p>
            </v-col>
            <v-col cols="4" class="d-flex justify-end"> </v-col>
          </v-row>

          <p class="comment">Повышение заинтересованности клиентов .</p>
        </div>
      </v-col> -->
    </v-row>
  </v-col>
</template>
<style scoped lang="scss">
h2 {
  padding-bottom: 74px;
  padding-top: 94px;
}
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
  text-decoration: none;
  color: white;
}
.comment {
  margin-top: 40px;
}
.card-icon {
  height: 80px;
}
.team-logo {
  height: 80px;
}
</style>

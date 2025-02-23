<script setup></script>
<template>
  <h2></h2>
  <v-col cols="12">
    <v-row class="features">
      <v-col cols="12" md="6" lg="4">
        <div class="feature">
          <v-row>
            <v-col cols="8">
              <p class="card-title">Интернет-Агенство</p>
            </v-col>
            <v-col cols="4" class="d-flex justify-end"> </v-col>
          </v-row>

          <p class="comment">От концепции до готового сайта.</p>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <div class="feature">
          <v-row>
            <v-col cols="8">
              <p class="card-title">Команда разработчиков</p>
            </v-col>
            <v-col cols="4" class="d-flex justify-end"> </v-col>
          </v-row>

          <p class="comment">От идеи до реализации.</p>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <div class="feature">
          <v-row>
            <v-col cols="8">
              <p class="card-title">Команда продвижения</p>
            </v-col>
            <v-col cols="4" class="d-flex justify-end"> </v-col>
          </v-row>

          <p class="comment">Повышение заинтересованности клиентов .</p>
        </div>
      </v-col>
    </v-row>
  </v-col>
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

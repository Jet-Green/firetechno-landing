<script setup></script>
<template>
  <v-row style="margin-top: 100px;">
    <v-col cols="12" lg="6"> 
      <div class="card">
        <v-row style="color: white;">
          <v-col cols="12">
            <h2 class="text-center">Заказать сайт</h2>
          </v-col>

          <v-col cols="12">
            <v-text-field variant="outlined" label="Имя"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field variant="outlined" label="Электронная почта"></v-text-field>
          </v-col>
          
          <v-col cols="12">
            <v-text-field variant="outlined" label="Контактный телефон"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field variant="outlined" label="Бюджет"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea variant="outlined" label="Комментарий"></v-textarea>
          </v-col>
          
          <v-col cols="12">
            <v-btn class="buy-btn" color="primary" size="x-large" style="width: 100%;"> заказать </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" lg="6">
      <div class="back">
        <h2>
          Форма обратной связи: <br />
          получите бесплатную <br />
          консультацию
        </h2>
        <div class="inf">
          <h4>
            Заполните форму, и мы с вами свяжемся в <br />
            ближайшее время.
          </h4>
          <p>
            Оставьте свои контактные данные, и наш специалист <br />
            проконсультирует вас по всем вопросам.
          </p>
        </div>
        <div class="inf">
          <h4>Узнайте, как мы можем помочь вашему бизнесу!</h4>
          <p>
            Мы предлагаем индивидуальные решения <br />
            для каждого клиента.
          </p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.inf {
  padding-top: 59px;
  h4 {
    padding-bottom: 19px;
    font-size: 24px;
  }
  p {
    font-size: 20px;
  }
}
.card {
  background-color: black;
  border-radius: 30px;
  padding: 30px;
}
</style>

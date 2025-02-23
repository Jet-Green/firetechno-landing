<script setup></script>
<template>
  <v-row>
    <v-col cols="6"> тут первая половина(форма) </v-col>
    <v-col cols="6">
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
.back {
  padding-top: 89px;
}
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
</style>

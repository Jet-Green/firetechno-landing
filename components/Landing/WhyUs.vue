<script setup></script>
<template>
  <v-row>
    <v-col cols="12">
      <h2>
        Наши преимущества: <br />
        почему выбирают нас?
      </h2>
    </v-col>
    <v-col cols="6" class="d-flex justify-end">
      <div class="exp">
        <h4>Опыт</h4>
        <p>
          Многолетний опыт в сфере <br />
          интернет-маркетинга.
        </p>
      </div>
    </v-col>
    <v-col cols="6">
    </v-col>

    <v-col cols="6">
    </v-col>
    <v-col cols="6" class="d-flex justify-start">
      <div class="ind">
        <h4>Индивидуальный подход</h4>
        <p>
          Разработка решений, <br />
          адаптированных под ваши задачи.
        </p>
      </div>
    </v-col>
   
    <v-col cols="6" class="d-flex justify-end">
    
      <div class="qual">
        <h4>Качество</h4>
        <p>
          Гарантия высокого качества <br />
          предоставляемых услуг.
        </p>
      </div>
    </v-col>
    <v-col cols="6">
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.cont {
  h4 {
    padding-top: 74px;
    padding-left: 74px;
  }
  .exp {
    padding-right: 44px;
    padding-bottom: 25px;
    padding-left: 300px;
    p {
      padding-left: 74px;
      padding-top: 20px;
    }
  }
  .ind {
    padding-left: 700px;
    p {
      padding-left: 74px;
      padding-top: 20px;
    }
  }
  .qual {
    padding-left: 300px;
    p {
      padding-left: 74px;
      padding-top: 20px;
    }
  }
}
</style>

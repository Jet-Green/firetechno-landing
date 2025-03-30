<script setup></script>
<template>
  <v-row style="margin-top: 150px;">
    <v-col cols="12" class="mb-10">
      <h2>Лендинги, которые конвертируют <br />посетителей в клиентов</h2>
    </v-col>

    <v-col cols="12" lg="6">
      <div class="list">
        <div class="">
          <p class="card-title mb-6">Привлекательный дизайн</p>
          <p class="mb-10">Визуально убедительное <br />представление вашего продукта.</p>
        </div>
        <div class="">
          <p class="card-title mb-6">Четкий призыв к действию</p>
          <p class="mb-10">
            Мотивация посетителей к совершению <br />
            целевого действия.
          </p>
        </div>
        <div class="">
          <p class="card-title mb-6">Аналитика и оптимизация</p>
          <p class="mb-10">
            Отслеживание результатов и улучшение<br />
            показателей.
          </p>
        </div>
      </div>
    </v-col>

    <v-col cols="12" lg="6" class="d-none d-lg-flex align-start justify-start"
      style="position: relative; overflow: visible;">
      <ClientOnly>
        <img src="~/assets/images/man with computer.png" alt="" class="man-with-comp" />
      </ClientOnly>
    </v-col>

    <div class="photo">
      <img src="" alt="" />
    </div>
  </v-row>
</template>
<style scoped lang="scss">
  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .man-with-comp {
    height: 80vh;
    position: absolute;
    left: -200px;
    top: -200px;
  }
</style>

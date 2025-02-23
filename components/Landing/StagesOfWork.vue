<script setup lang="ts">
</script>
<template>
  <v-row style="margin-top: 150px;">
    <v-col cols="12" style="margin-bottom: 70px;">
      <h2>
        Этапы работы: от идеи <br />
        до реализации проекта
      </h2>
    </v-col>

    <v-col cols="12">
      <v-row class="all__comp">
        <v-col class="number" cols="12" sm="6" lg="3">
          <span>1</span>
          <p class="card-title mb-4">Автоматизация</p>
          <p style="margin-top: auto;">
            Ответы на часто <br />
            задаваемые вопросы.
          </p>
        </v-col>
        <v-col class="number" cols="12" sm="6" lg="3">
          <span>2</span>
          <p class="card-title mb-4">
            Круглосуточная <br />
            поддержка
          </p>
          <p style="margin-top: auto;">
            Доступность для <br />
            клиентов в любое время.
          </p>
        </v-col>
        <v-col class="number" cols="12" sm="6" lg="3">
          <span>3</span>
          <p class="card-title mb-4">Вовлеченность</p>
          <p style="margin-top: auto;">
            Повышение лояльности и <br />
            удовлетворенности клиентов.
          </p>
        </v-col>
        <v-col class="number" cols="12" sm="6" lg="3">
          <span>4</span>
          <p class="card-title mb-4">Результат</p>
          <p style="margin-top: auto;">
            Довольный клиент и <br />
            готовое решение для бизнеса
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
span {
  color: #d80100;
  font-size: 64px;
}
.number {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>

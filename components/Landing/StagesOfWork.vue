<script setup lang="ts">
</script>
<template>
  <v-row style="margin-top: 150px;">
    <v-col cols="12" style="margin-bottom: 100px;">
      <h2>
        Этапы работы: от идеи <br />
        до реализации проекта
      </h2>
    </v-col>

    <v-col cols="12">
      <v-row class="all__comp">
        <v-col class="number">
          <span>1</span>
          <h4>Автоматизация</h4>
          <p>
            Ответы на часто <br />
            задаваемые вопросы.
          </p>
        </v-col>
        <v-col class="number">
          <span>2</span>
          <h4>
            Круглосуточная <br />
            поддержка
          </h4>
          <p>
            Доступность для <br />
            клиентов в любое время.
          </p>
        </v-col>
        <v-col class="number">
          <span>3</span>
          <h4>Вовлеченность</h4>
          <p>
            Повышение лояльности и <br />
            удовлетворенности клиентов.
          </p>
        </v-col>
        <v-col class="number">
          <span>4</span>
          <h4>Результат</h4>
          <p>
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>

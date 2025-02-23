<script setup></script>
<template>
  <div class="work">
    <h2>
      Этапы работы: от идеи <br />
      до реализации проекта
    </h2>
    <img src="~/assets/icons/GroupingStages.svg" alt="" />
    <div class="all__comp">
      <div class="one_num">
        <span>1</span>
        <h4>Автоматизация</h4>
        <p>
          Ответы на часто <br />
          задаваемые вопросы.
        </p>
      </div>
      <div class="two_num">
        <span>2</span>
        <h4>
          Круглосуточная <br />
          поддержка
        </h4>
        <p>
          Доступность для <br />
          клиентов в любое время.
        </p>
      </div>
      <div class="three_num">
        <span>3</span>
        <h4>Вовлеченность</h4>
        <p>
          Повышение лояльности и <br />
          удовлетворенности клиентов.
        </p>
      </div>
      <div class="four_num">
        <span>4</span>
        <h4>Результат</h4>
        <p>
          Довольный клиент и <br />
          готовое решение для бизнеса
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.work {
  .all__comp {
    display: flex;
  }
  h2 {
    padding-top: 94px;
    padding-bottom: 102px;
  }
  img {
    justify-content: center;
    padding-left: 150px;
    padding-bottom: 14px;
  }
  span {
    color: #d80100;
    font-size: 64px;
  }
  .one__num {
    h4 {
      margin-bottom: 54px;
    }
  }
}
</style>

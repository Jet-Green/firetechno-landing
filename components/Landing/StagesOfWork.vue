<script setup lang="ts">
const items = [
  { title: 'Автоматизация', description: "Ответы на часто <br />задаваемые вопросы." },
  { title: 'Круглосуточная поддержка', description: "Круглосуточная <br />поддержка" },
  { title: 'Вовлеченность', description: "Доступность для <br />клиентов в любое время." },
  { title: 'Результат', description: "Довольный клиент и <br />готовое решение для бизнеса" }
]
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
      <v-row class="d-none d-lg-block">
        <v-col cols="12">
          <div class="timeline">
            <!-- Numbered sections -->
            <div class="grid">
              <!-- Thicker horizontal line positioned relative to the grid -->
              <div class="horizontal-line"></div>
              
              <div v-for="(item, index) in items" :key="index" class="section">
                <!-- Thick vertical line starting from the horizontal line -->
                <div class="vertical-line"></div>
                
                <!-- Number without circle -->
                <span class="number">
                  {{ index + 1 }}
                </span>
                <!-- Title -->
                <h2 class="card-title">{{ item.title }}</h2>
                
                <p v-html="item.description" style="margin-top: auto;"></p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <v-row class="d-flex d-lg-none">
        <v-col class="number-small-screen" cols="12" sm="6" lg="3">
          <span>1</span>
          <p class="card-title mb-4">Автоматизация</p>
          <p style="margin-top: auto;">
            Ответы на часто <br />
            задаваемые вопросы.
          </p>
        </v-col>
        <v-col class="number-small-screen" cols="12" sm="6" lg="3">
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
        <v-col class="number-small-screen" cols="12" sm="6" lg="3">
          <span>3</span>
          <p class="card-title mb-4">Вовлеченность</p>
          <p style="margin-top: auto;">
            Повышение лояльности и <br />
            удовлетворенности клиентов.
          </p>
        </v-col>
        <v-col class="number-small-screen" cols="12" sm="6" lg="3">
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

.number-small-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}


.container {
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 2rem;
}

.content {
  max-width: 1152px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding-top: 3rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  position: relative;
}

.horizontal-line {
  position: absolute;
  top: 0;
  left: 12%;
  right: 12%;
  height: 8px;
  background-color: white;
}

.section {
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
}

.vertical-line {
  position: absolute;
  top: 0;
  left: 50%;
  height: 48px;
  width: 8px;
  background-color: white;
  transform: translateX(-50%);
  border-radius: 0px 0 10px 10px;
}

.number {
  color: #dc2626;
  margin-top: 3rem;
  position: relative;
  z-index: 10;
}

.title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 1rem;
}
</style>

<script setup lang="ts">
useHead({
  title: "FIRE TECHNO",
  meta: [
    { name: 'description', content: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO' },
    { name: 'keywords', content: 'лендинги, продвижение, заказная разработка, telegram, telegram mini-apps' },
    { name: "yandex-verification", content: "8542f5bff424e91c" }
  ]
})

useSeoMeta({
  title: 'FIRE TECHNO',
  ogTitle: 'FIRE TECHNO',
  description: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO',
  ogDescription: 'Разработка сайтов для ваших задач. Создание и разработка сайтов от команд FIRE TECHNO',
  ogImage: '/og-image.png',
})

const categories = [
  "Маркетплейсы",
  "Веб-сервисы",
  "E-commerce",
  "Корпоративные сайты",
  "Лендинги",
  "Интеграции с AI",
  "Telegram Mini Apps",
  "Интеграции с API",
  "Telegram боты",
]

const activeCategories = ref<string[]>([])

const allCases = [
  {
    "id": 1,
    "title": "Маркетплейс туров «Города и веси»",
    "categories": ["Маркетплейсы", "Веб-сервисы", "E-commerce"],
    "description": "Федеральный маркетплейс для бронирования туров. Высоконагруженный сервис с личными кабинетами, системой бронирования и онлайн-оплаты.",
    "stack": ["Vue.js", "Express", "MongoDB"],
    "url": "https://gorodaivesi.ru"
  },
  {
    "id": 2,
    "title": "Сервис-афиша «Place of Posters»",
    "categories": ["Веб-сервисы", "Маркетплейсы"],
    "description": "Всероссийский сервис-афиша для тысяч событий. Сложная архитектура для быстрой обработки данных и удобного планирования досуга.",
    "stack": ["Nuxt 3.0", "NestJS", "MongoDB"],
    "url": "https://plpo.ru"
  },
  {
    "id": 3,
    "title": "Маркетплейс «glazovest.ru»",
    "categories": ["Маркетплейсы", "E-commerce", "Веб-сервисы"],
    "description": "Онлайн-маркетплейс формата «лавок», объединяющий локальных продавцов на одной платформе с real-time взаимодействием.",
    "stack": ["Nuxt 3.0", "TypeScript", "WebSocket", "NestJS"],
    "url": "https://glazovest.ru"
  },
  {
    "id": 4,
    "title": "«Городская IT библиотека»",
    "categories": ["Веб-сервисы", "Корпоративные сайты"],
    "description": "Система онлайн-бронирования книг для IT-сообщества. Автоматизирует и упрощает доступ к библиотечному фонду.",
    "stack": ["Vue.js", "Firebase", "Express.js", "MongoDB"],
    "url": "https://lib.qbit-club.com"
  },
  {
    "id": 5,
    "title": "Сайт барбершопа «Location21»",
    "categories": ["Корпоративные сайты", "Лендинги", "Интеграции с AI"],
    "description": "Стильный сайт с онлайн-записью через YClients и уникальной функцией подбора стрижки с помощью искусственного интеллекта.",
    "stack": ["Nuxt", "Yandex Cloud Functions"],
    "url": "https://location21barbershop.ru"
  },
  {
    "id": 6,
    "title": "Сайт компании «NIKA STEEL»",
    "categories": ["Корпоративные сайты", "Лендинги"],
    "description": "Быстрый и современный корпоративный сайт для производителя металлоконструкций. Эффективно представляет продукцию в B2B-сегменте.",
    "stack": ["Nuxt", "Yandex Cloud", "AWS SDK"],
    "url": "https://nikasteel.ru/"
  },
  {
    "id": 7,
    "title": "Лендинг «FIRE TECHNO»",
    "categories": ["Корпоративные сайты", "Лендинги"],
    "description": "Лендинг для агентства web-разработки, демонстрирующий ключевые услуги и подход к работе.",
    "stack": ["Nuxt", "Yandex Cloud", "AWS SDK"],
    "url": "https://firetechno.ru/"
  },
  {
    "id": 8,
    "title": "Location21 Telegram Mini App",
    "categories": ["Telegram Mini Apps", "Интеграции с AI", "Интеграции с API"],
    "description": "MiniApp для записи в барбершоп через YClients с рекомендациями от ИИ Яндекса прямо в Telegram.",
    "stack": ["Nuxt 3.0", "Yandex Cloud Functions"],
    "url": "https://t.me/location21_miniapp_bot"
  },
  {
    "id": 9,
    "title": "CHOP-CHOP Telegram Mini App",
    "categories": ["Telegram Mini Apps", "Интеграции с API"],
    "description": "Удобный MiniApp для быстрой записи на услуги популярной сети барбершопов CHOP-CHOP через YClients.",
    "stack": ["Nuxt", "Yandex Cloud", "AWS SDK"],
    "url": "https://t.me/chop_chop_testbot"
  },
  {
    "id": 10,
    "title": "Matrix Sochi Bot",
    "categories": ["Telegram боты", "Интеграции с API"],
    "description": "Telegram-бот с интеграцией по API SmartShell для авторизации, проверки и пополнения баланса пользователей.",
    "stack": ["Node.js", "MongoDB"],
    "url": "https://t.me/MatrixSochiBot/"
  }
]

const toggleCategory = (category: string) => {
  const index = activeCategories.value.indexOf(category);
  if (index === -1) {
    activeCategories.value.push(category);
  } else {
    activeCategories.value.splice(index, 1);
  }
}

const filteredCases = computed(() => {
  if (!activeCategories.value.length) return allCases;
  return allCases.filter(c => c.categories.some(cat => activeCategories.value.includes(cat)));
})

</script>

<template>
  <v-container class="container">
    <v-row class="d-flex justify-center mb-8">
      <v-col cols="12" md="10" xl="9" lg="8" class="d-flex justify-center">
        <div class="d-flex justify-center align-center flex-wrap gap-4">
          <v-chip v-for="(category, index) in categories" :key="index" class="case-chip ma-2"
            :prepend-icon="activeCategories.includes(category) ? 'mdi-check' : ''"
            :class="{ 'chip-active': activeCategories.includes(category) }" @click="toggleCategory(category)"
            size="large" pill variant="outlined" color="white">
            {{ category }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col v-for="caseItem in filteredCases" :key="caseItem.id" cols="12" md="10" xl="9" lg="8">
        <v-card class="mb-6 pa-8 case-card" color="rgba(255,255,255,0.05)" flat>
          <h3 class="text-h5 text-white mb-2">
            {{ caseItem.title }}
          </h3>
          <p class="text-body-2 text-grey mb-4">
            {{ caseItem.description }}
          </p>

          <div class="d-flex flex-wrap gap-2 mb-4">
            <v-chip v-for="(tech, i) in caseItem.stack" :key="i" color="white" variant="outlined" size="small"
              class="tech-chip ma-1">
              {{ tech }}
            </v-chip>
          </div>

          <NuxtLink :to="caseItem.url" target="_blank" class="text-decoration-none underline-link">
            Перейти к проекту →
          </NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.case-chip {
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 1.5rem !important;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white !important;
  transition: all 0.25s ease-in-out;
  cursor: pointer; // Добавим курсор для понятности

  &:hover {
    border-color: white;
    transform: scale(1.05);
  }
}

.chip-active {
  background-color: white !important;
  color: black !important;
  font-weight: 600;
  border-color: white !important;
}

.case-card {
  border-radius: 20px;
  backdrop-filter: blur(8px);
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
}

.tech-chip {
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white !important;
  font-weight: 500;
}

.underline-link {
  color: white;
  text-decoration: underline;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
}

.chip-content {
  padding: 20px !important;
}
</style>
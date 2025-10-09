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

const casesStore = useCases()
const route = useRoute()
const router = useRouter()

const categories = casesStore.categories;
const cases = casesStore.cases;


const activeCategories = computed<string[]>(() => {
  const queryParam = route.query.categories;
  if (typeof queryParam === 'string' && queryParam) {
    return queryParam.split(',');
  }
  return [];
});

const toggleCategory = (category: string) => {
  const newCategories = [...activeCategories.value];
  const index = newCategories.indexOf(category);

  if (index === -1) {
    newCategories.push(category);
  } else {
    newCategories.splice(index, 1);
  }

  router.replace({
    query: {
      categories: newCategories.length ? newCategories.join(',') : undefined
    }
  });
};

const filteredCases = computed(() => {
  if (!activeCategories.value.length) return cases.value;
  return cases.value.filter(c => c.categories.some(cat => activeCategories.value.includes(cat)));
});

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
          <v-carousel v-if="caseItem?.images" hide-delimiters class="mt-4">
            <v-carousel-item v-for="(img, index) of caseItem.images" :src="img" contain></v-carousel-item>
          </v-carousel>
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
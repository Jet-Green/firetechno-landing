<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'; // watchEffect заменяем на watch, onMounted добавляем
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const links = [
  { name: "Партнеры", path: "/#our-teams" },
  { name: "Кейсы", path: "/cases" },
  { name: "Заказать сайт", path: "/#order" },
];

const activeIndex = ref<number | null>(null);

// Функция для обновления индекса, чтобы не дублировать код
const updateActiveIndex = () => {
  const currentPath = route.path;
  const currentHash = route.hash;

  const foundIndex = links.findIndex(link => {
    const [linkBasePath, linkHashRaw] = link.path.split('#');
    const normalizedLinkPath = linkBasePath || '/';
    const linkHash = linkHashRaw ? `#${linkHashRaw}` : '';

    return normalizedLinkPath === currentPath && linkHash === currentHash;
  });

  activeIndex.value = foundIndex !== -1 ? foundIndex : null;
};

// onMounted гарантирует, что этот код выполнится только на клиенте
onMounted(() => {
  // Устанавливаем начальное активное состояние
  updateActiveIndex();

  // Следим за изменениями URL и обновляем активное состояние
  // Используем watch вместо watchEffect для явного отслеживания полного пути
  watch(() => route.fullPath, updateActiveIndex);
});

const handleLinkClick = (path: string) => {
  router.push(path);
};
</script>

<template>
  <v-app>
    <v-app-bar color="black" height="80" flat>
      <v-container>
        <v-row align="center" justify="space-between" no-gutters>
          <!-- Логотип -->
          <v-col cols="auto" class="d-flex align-center">
            <NuxtLink to="/" class="logo-container">
              <img src="~/assets/icons/firetechno-logo.svg" alt="" class="logo" />
              <span class="d-none d-md-flex">&nbsp;FIRE TECHNO</span>
            </NuxtLink>
          </v-col>

          <!-- Навигация -->
          <v-col cols="auto" class="navigation">
            <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path" class="nav-link"
              :class="{ active: activeIndex === index }" @click.prevent="handleLinkClick(link.path)">
              {{ link.name }}
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
/* Ваши стили остаются без изменений */
.logo-container {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  text-decoration: none;
}

.logo {
  height: 65px;
  cursor: pointer;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: white;
  padding: 0.5rem 0;
  font-size: clamp(0.625rem, 0.43rem + 1.0373vw, 1.25rem);
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: color 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &:hover {
    color: #e0e0e0;
  }
}
</style>
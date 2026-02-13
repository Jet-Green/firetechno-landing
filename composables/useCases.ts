export function useCases() {
  const route = useRoute()
  const router = useRouter()

  const categories = [
    { key: 'marketplaces', name: 'Маркетплейсы' },
    { key: 'web-services', name: 'Веб-сервисы: магазины и порталы' },
    { key: 'payment-integration', name: 'Интеграция платежной системы' },
    { key: 'corporate', name: 'Корпоративные сайты' },
    { key: 'landings', name: 'Лендинги' },
    { key: 'ai-integration', name: 'Интеграции с AI' },
    { key: 'telegram-miniapps', name: 'Telegram Mini Apps' },
    { key: 'api-integration', name: 'Интеграции с API' },
    { key: 'telegram-bots', name: 'Telegram боты' },
    { key: 'yclients', name: 'YClients - система записи на услуги' },
    { key: 'budget-orgs', name: 'Для бюджетных организаций' },
  ]

  const cases = ref([
    {
      id: 12,
      title: '"Сая Лаундж"',
      categoryKeys: ['landings', 'ai-integration'],
      description:
        'Посадочная страница для пермского коктейль-бара  <span class="text-primary">"Сая"</span> премиум-сегмента, подбор коктейлей с помощью ИИ',
      stack: ['Nuxt 3.0', 'Giga Chat'],
      url: 'https://sayalounge.ru',
      images: ['case-images/saya1.png', 'case-images/saya2.png'],
    },
    {
      id: 13,
      title: 'Облака',
      categoryKeys: ['landings', 'ai-integration'],
      description:
        'Посадочная страница для пермского ресторан-бара <span class="text-primary">"Облака"</span>, подбор коктейлей с помощью ИИ',
      stack: ['Nuxt 3.0', 'Giga Chat'],
      url: 'https://oblaka-perm.ru/',
      images: ['case-images/oblaka1.png', 'case-images/oblaka2.png'],
    },
    {
      id: 1,
      title: 'Маркетплейс туров «Города и веси»',
      categoryKeys: ['marketplaces', 'web-services', 'payment-integration'],
      description:
        'Портал для бронирования туров и поездок. Высоконагруженный сервис с личными кабинетами, системой бронирования и онлайн-оплаты и <span class="text-primary">crm-системой</span>, разработанной под <span class="text-primary">индивидуальный запрос</span> заказчика.',
      stack: ['Vue.js', 'Express', 'MongoDB'],
      url: 'https://gorodaivesi.ru',
      images: ['case-images/gorodaivesi1.png', 'case-images/gorodaivesi2.png'],
    },
    {
      id: 2,
      title: 'Сервис-афиша «Place of Posters»',
      categoryKeys: ['web-services', 'marketplaces'],
      description:
        '<span class="text-primary">Афиша</span> для тысяч событий. Сложная архитектура для быстрой обработки данных и удобного планирования досуга.',
      stack: ['Nuxt 3.0', 'NestJS', 'MongoDB'],
      url: 'https://plpo.ru',
      images: ['case-images/plpo1.png', 'case-images/plpo2.png'],
    },
    {
      id: 3,
      title: 'Маркетплейс «glazovest.ru»',
      categoryKeys: ['marketplaces', 'payment-integration', 'web-services'],
      description:
        'Онлайн-маркетплейс «лавок», объединяющий локальных продавцов на одной платформе с real-time взаимодействием и обработкой заказов прямо на платформе в <span class="text-primary">crm-системе</span>.',
      stack: ['Nuxt 3.0', 'TypeScript', 'WebSocket', 'NestJS'],
      url: 'https://glazovest.ru',
      images: [
        'case-images/glazovest1.png',
        'case-images/glazovest2.png',
        'case-images/glazovest3.png',
      ],
    },
    {
      id: 4,
      title: '«Городская IT библиотека»',
      categoryKeys: ['web-services'],
      description:
        'Система <span class="text-primary">онлайн-бронирования книг</span> для IT-сообщества. Автоматизирует и упрощает доступ к библиотечному фонду.',
      stack: ['Vue.js', 'Firebase', 'Express.js', 'MongoDB'],
      url: 'https://lib.qbit-club.com',
    },
    {
      id: 5,
      title: 'Сайт барбершопа «Location21»',
      categoryKeys: ['landings', 'ai-integration', 'yclients'],
      description:
        'Стильный сайт с онлайн-записью через <span class="text-primary">YClients</span> и уникальной функцией <span class="text-primary">подбора стрижки</span> с помощью <span class="text-primary">ИИ</span>.',
      stack: ['Nuxt', 'Yandex Cloud Functions'],
      url: 'https://location21barbershop.ru',
      images: [
        'case-images/location21-landing1.png',
        'case-images/location21-landing2.png',
      ],
    },
    {
      id: 6,
      title: 'Сайт фитнес-тренера «NIKA STEEL»',
      categoryKeys: ['landings'],
      description:
        'Продающий и мотивирующий <span class="text-primary">лендинг</span>, повышающий лояльность клиента.',
      stack: ['Nuxt', 'Yandex Cloud', 'AWS SDK'],
      url: 'https://nikasteel.ru/',
      images: ['case-images/nikasteel1.png', 'case-images/nikasteel2.png'],
    },
    {
      id: 7,
      title: 'Лендинг «FIRE TECHNO»',
      categoryKeys: ['corporate', 'landings'],
      description:
        'Лендинг для агентства web-разработки <span class="text-primary">FIRE TECHNO</span>, демонстрирующий ключевые услуги и подход к работе.',
      stack: ['Nuxt', 'Yandex Cloud', 'AWS SDK'],
      url: 'https://firetechno.ru/',
      images: ['case-images/firetechno1.png', 'case-images/firetechno2.png'],
    },
    {
      id: 8,
      title: 'Location21 Telegram Mini App',
      categoryKeys: ['telegram-miniapps', 'ai-integration', 'api-integration', 'yclients'],
      description:
        '<span class="text-primary">Telegram MiniApp</span> для записи в барбершоп через YClients с рекомендациями от <span class="text-primary">ИИ Яндекса</span> прямо в Telegram.',
      stack: ['Nuxt 3.0', 'Yandex Cloud Functions'],
      url: 'https://t.me/location21_miniapp_bot',
      images: [
        'case-images/location21-miniapp1.png',
        'case-images/location21-miniapp2.png',
        'case-images/location21-miniapp3.png',
        'case-images/location21-miniapp4.png',
      ],
    },
    {
      id: 9,
      title: 'HEADMAN Telegram Mini App',
      categoryKeys: ['telegram-miniapps', 'api-integration', 'yclients'],
      description:
        'Удобный <span class="text-primary">Telegram MiniApp</span>, встроенный в <span class="text-primary">Telegram-канал</span>, для быстрой записи на услуги популярной сети барбершопов HEADMAN через <span class="text-primary">YClients</span>.',
      stack: ['Nuxt', 'Yandex Cloud', 'AWS SDK'],
      url: 'https://t.me/chop_chop_testbot',
      images: ['case-images/headman1.png', 'case-images/headman2.png'],
    },
    {
      id: 10,
      title: 'Matrix Sochi Bot',
      categoryKeys: ['telegram-bots', 'payment-integration', 'api-integration'],
      description:
        '<span class="text-primary">Telegram-бот</span> с интеграцией по API SmartShell для авторизации, проверки и пополнения баланса пользователей.',
      stack: ['Node.js', 'MongoDB'],
      url: 'https://t.me/MatrixSochiBot/',
    },
    {
      id: 11,
      title: 'БПОУ "Глазовский политехнический колледж"',
      categoryKeys: ['budget-orgs'],
      description: 'Цифровой образовательный контент для колледжа.<br/><br/> Проект посвящён изучению классификации электроизмерительных приборов и систем.<br/> Рассматриваются их назначение, принципы действия и области применения.<br/> Особое внимание уделено видам приборов по измеряемой величине и системе. Полученные знания необходимы для проверки и наладки электрооборудования.',
      stack: ['Vue.js'],
      url: '',
      images: [
        'case-images/college-tsok1.png',
        'case-images/college-tsok2.png',
        'case-images/college-tsok3.png',
      ],
    },
  ])

  const activeCategories = ref<string[]>([])

  onMounted(async () => {
    await router.isReady()
    const queryParam = route.query.categories
    if (typeof queryParam === 'string' && queryParam) {
      activeCategories.value = queryParam.split(',')
    }
  })

  watch(
    () => route.query.categories,
    (newVal) => {
      if (typeof newVal === 'string' && newVal) {
        activeCategories.value = newVal.split(',')
      } else {
        activeCategories.value = []
      }
    },
    { immediate: true }
  )

  const filteredCases = computed(() => {
    if (!activeCategories.value.length) return cases.value
    return cases.value.filter((c) =>
      c.categoryKeys.some((key) => activeCategories.value.includes(key))
    )
  })

  const toggleCategory = (key: string) => {
    const newCategories = [...activeCategories.value]
    const index = newCategories.indexOf(key)
    if (index === -1) newCategories.push(key)
    else newCategories.splice(index, 1)

    router.replace({
      query: {
        categories: newCategories.length ? newCategories.join(',') : undefined,
      },
    })
  }

  return {
    categories,
    cases,
    activeCategories,
    filteredCases,
    toggleCategory,
  }
}

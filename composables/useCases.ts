export function useCases() {
  const cases = useState("cases", () => [
    {
      "id": 1,
      "title": "Маркетплейс туров «Города и веси»",
      "categories": ["Маркетплейсы", "Веб-сервисы: магазины и порталы", "Интеграция платежной системы"],
      "description": "Федеральный маркетплейс для бронирования туров. Высоконагруженный сервис с личными кабинетами, системой бронирования и онлайн-оплаты.",
      "stack": ["Vue.js", "Express", "MongoDB"],
      "url": "https://gorodaivesi.ru",
      images: ["case-images/gorodaivesi1.png", "case-images/gorodaivesi2.png"]
    },
    {
      "id": 2,
      "title": "Сервис-афиша «Place of Posters»",
      "categories": ["Веб-сервисы: магазины и порталы", "Маркетплейсы"],
      "description": "Всероссийский сервис-афиша для тысяч событий. Сложная архитектура для быстрой обработки данных и удобного планирования досуга.",
      "stack": ["Nuxt 3.0", "NestJS", "MongoDB"],
      "url": "https://plpo.ru",
      images: ["case-images/plpo1.png", "case-images/plpo2.png"]
    },
    {
      "id": 3,
      "title": "Маркетплейс «glazovest.ru»",
      "categories": ["Маркетплейсы", "Интеграция платежной системы", "Веб-сервисы: магазины и порталы"],
      "description": "Онлайн-маркетплейс формата «лавок», объединяющий локальных продавцов на одной платформе с real-time взаимодействием.",
      "stack": ["Nuxt 3.0", "TypeScript", "WebSocket", "NestJS"],
      "url": "https://glazovest.ru",
      images: ["case-images/glazovest1.png", "case-images/glazovest2.png", "case-images/glazovest3.png"]
    },
    {
      "id": 4,
      "title": "«Городская IT библиотека»",
      "categories": ["Веб-сервисы: магазины и порталы"],
      "description": "Система онлайн-бронирования книг для IT-сообщества. Автоматизирует и упрощает доступ к библиотечному фонду.",
      "stack": ["Vue.js", "Firebase", "Express.js", "MongoDB"],
      "url": "https://lib.qbit-club.com"
    },
    {
      "id": 5,
      "title": "Сайт барбершопа «Location21»",
      "categories": ["Лендинги", "Интеграции с AI", "YClients - система записи на услуги"],
      "description": "Стильный сайт с онлайн-записью через YClients и уникальной функцией подбора стрижки с помощью искусственного интеллекта.",
      "stack": ["Nuxt", "Yandex Cloud Functions"],
      "url": "https://location21barbershop.ru",
      images: ["case-images/location21-landing1.png", "case-images/location21-landing2.png"]

    },
    {
      "id": 6,
      "title": "Сайт фитнес-тренера «NIKA STEEL»",
      "categories": ["Лендинги"],
      "description": "Быстрый и современный корпоративный сайт для производителя металлоконструкций. Эффективно представляет продукцию в B2B-сегменте.",
      "stack": ["Nuxt", "Yandex Cloud", "AWS SDK"],
      "url": "https://nikasteel.ru/",
      images: ["case-images/nikasteel1.png", "case-images/nikasteel2.png"]
    },
    {
      "id": 7,
      "title": "Лендинг «FIRE TECHNO»",
      "categories": ["Корпоративные сайты", "Лендинги"],
      "description": "Лендинг для агентства web-разработки, демонстрирующий ключевые услуги и подход к работе.",
      "stack": ["Nuxt", "Yandex Cloud", "AWS SDK"],
      "url": "https://firetechno.ru/",
      images: ["case-images/firetechno1.png", "case-images/firetechno2.png"]
    },
    {
      "id": 8,
      "title": "Location21 Telegram Mini App",
      "categories": ["Telegram Mini Apps", "Интеграции с AI", "Интеграции с API", "YClients - система записи на услуги"],
      "description": "MiniApp для записи в барбершоп через YClients с рекомендациями от ИИ Яндекса прямо в Telegram.",
      "stack": ["Nuxt 3.0", "Yandex Cloud Functions"],
      "url": "https://t.me/location21_miniapp_bot",
      images: ["case-images/location21-miniapp1.png", "case-images/location21-miniapp2.png", "case-images/location21-miniapp3.png", "case-images/location21-miniapp4.png"]
    },
    {
      "id": 9,
      "title": "HEADMAN Telegram Mini App",
      "categories": ["Telegram Mini Apps", "Интеграции с API", "YClients - система записи на услуги"],
      "description": "Удобный MiniApp для быстрой записи на услуги популярной сети барбершопов HEADMAN через YClients.",
      "stack": ["Nuxt", "Yandex Cloud", "AWS SDK"],
      "url": "https://t.me/chop_chop_testbot",
      images: ["case-images/headman1.png", "case-images/headman2.png"]
    },
    {
      "id": 10,
      "title": "Matrix Sochi Bot",
      "categories": ["Telegram боты", "Интеграция платежной системы", "Интеграции с API"],
      "description": "Telegram-бот с интеграцией по API SmartShell для авторизации, проверки и пополнения баланса пользователей.",
      "stack": ["Node.js", "MongoDB"],
      "url": "https://t.me/MatrixSochiBot/"
    },
    {
      "id": 11,
      "title": "БПОУ \"Глазовский политехнический колледж\" - цифровой образовательный контент",
      "categories": ["Для бюджетных организаций"],
      "description": "",
      "stack": ["Vue.js"],
      "url": "",
      images: ["case-images/college-tsok1.png", "case-images/college-tsok2.png", "case-images/college-tsok3.png"]
    }
  ])

  const categories = useState("categories", () => [
    "Маркетплейсы",
    "Веб-сервисы: магазины и порталы",
    "Интеграция платежной системы",
    "Корпоративные сайты",
    "Лендинги",
    "Интеграции с AI",
    "Telegram Mini Apps",
    "Интеграции с API",
    "Telegram боты",
    "YClients - система записи на услуги",
    "Для бюджетных организаций"
  ])


  return {
    // vars
    cases, categories,
    // functions
  }
}
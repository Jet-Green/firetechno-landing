const { execSync } = require('child_process');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const BUCKET_NAME = process.env.YC_BUCKET_NAME;
const ACCESS_KEY = process.env.YC_ACCESS_KEY;
const SECRET_KEY = process.env.YC_SECRET_KEY;
const ENDPOINT = 'https://storage.yandexcloud.net';
const BUILD_DIR = 'dist';

// Шаг 1: Сборка статического сайта
console.log('🔧 Building Nuxt static site...');
execSync('npm run generate', { stdio: 'inherit' });

// Шаг 2: Настройка Yandex Object Storage
const s3 = new S3Client({
  region: 'ru-central1',
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
});

// Шаг 3: Функция загрузки файлов
async function uploadFile(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ACL: 'public-read',
    ContentType: getContentType(filePath),
  });

  await s3.send(command);
  console.log(`✅ Uploaded: ${key}`);
}

// Шаг 4: Рекурсивная загрузка
async function uploadDirectory(directory, prefix = '') {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const key = path.join(prefix, file).replace(/\\/g, '/');

    if (fs.statSync(fullPath).isDirectory()) {
      await uploadDirectory(fullPath, key);
    } else {
      await uploadFile(fullPath, key);
    }
  }
}

// Функция определения Content-Type
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
  };
  return types[ext] || 'application/octet-stream';
}

// Запуск загрузки
(async () => {
  console.log('🚀 Uploading files to Yandex Cloud Object Storage...');
  await uploadDirectory(BUILD_DIR);
  console.log('🎉 Deployment complete!');
})();

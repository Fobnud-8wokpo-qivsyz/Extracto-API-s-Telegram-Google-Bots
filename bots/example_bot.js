/**
 * Bot de práctica — Extracto-API-s-Telegram-Google-Bots
 * Long polling con node-telegram-bot-api
 *
 * Uso:
 *   1. cp .env.example .env  y pega TELEGRAM_BOT_TOKEN
 *   2. npm install
 *   3. npm start
 */

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token || token.includes('tu_token')) {
  console.error(
    '[Error] Falta TELEGRAM_BOT_TOKEN.\n' +
      'Copia .env.example a .env y pega el token de @BotFather.'
  );
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const WEB_VIVI =
  'https://fobnud-8wokpo-qivsyz.github.io/VIVIGEOSILHA/';
const WEB_PROMPTS =
  'https://fobnud-8wokpo-qivsyz.github.io/VIVIGEOSILHA/experiencia-personalizada.html';

bot.onText(/\/start/, (msg) => {
  const name = msg.from.first_name || 'explorador';
  bot.sendMessage(
    msg.chat.id,
    `Hola, ${name}.\n` +
      `Soy el bot de práctica del repo Extracto-API-s.\n\n` +
      `Comandos: /help /ping /web /prompt`
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Comandos disponibles:\n` +
      `/start  — saludo\n` +
      `/help   — esta lista\n` +
      `/ping   — comprobar que el bot vive\n` +
      `/web    — sitio VIVIGEOSILHA\n` +
      `/prompt — generador de prompts personalizados`
  );
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, `pong · ${new Date().toISOString()}`);
});

bot.onText(/\/web/, (msg) => {
  bot.sendMessage(msg.chat.id, `VIVIGEOSILHA:\n${WEB_VIVI}`);
});

bot.onText(/\/prompt/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Genera tu prompt personalizado aquí:\n${WEB_PROMPTS}`
  );
});

bot.on('polling_error', (err) => {
  console.error('[polling_error]', err.message);
});

console.log('Bot en marcha (polling). Prueba /start en Telegram.');

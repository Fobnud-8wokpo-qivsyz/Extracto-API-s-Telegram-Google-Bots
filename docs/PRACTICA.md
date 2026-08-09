# Guía de práctica

## 1. Crear el bot

1. Telegram → [@BotFather](https://t.me/BotFather)
2. `/newbot` → nombre y username
3. Copia el token

## 2. Configurar el repo

```bash
cp .env.example .env
# TELEGRAM_BOT_TOKEN=...
npm install
npm start
```

## 3. Probar

En el chat del bot:

- `/start`
- `/help`
- `/ping`
- `/web`
- `/prompt`

## 4. Retos siguientes

1. Añadir `/signo` que pida una fecha (dd/mm) y responda el signo (lógica similar a experiencia-personalizada).
2. Guardar el último comando usado en un archivo JSON local (sin base de datos).
3. Conectar un comando que lea una página de Notion (token solo en `.env`).

## 5. Errores frecuentes

| Síntoma | Causa probable |
|----------|----------------|
| Sale el mensaje de falta token | No existe `.env` o el nombre de la variable es incorrecto |
| `401 Unauthorized` | Token mal copiado |
| No responde | Otro proceso ya hace polling con el mismo token |

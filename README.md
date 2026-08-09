# Extracto-API-s-Telegram-Google-Bots

**Repo de práctica ejecutable:** bots y extractores listos para correr en local.  
Enfoque: Telegram (Node) + hooks para Google/Notion cuando los necesites.

---

## Para qué sirve

| Uso | Detalle |
|-----|---------|
| Practicar bots | Long polling en Node, sin hosting obligatorio |
| Extraer / automatizar | Punto de partida para scripts de APIs |
| Probar comandos | `/start`, `/help`, `/ping` de inmediato |

**Este repo es el “laboratorio”.**  
Plantillas y teoría de comandos → [Telegram-Comandos-](https://github.com/Fobnud-8wokpo-qivsyz/Telegram-Comandos-)  
Referencia de APIs (Google, Notion, PHP) → [Api-sGoogle](https://github.com/Fobnud-8wokpo-qivsyz/Api-sGoogle)

---

## Estructura

```
Extracto-API-s-Telegram-Google-Bots/
├── README.md
├── package.json
├── .env.example
├── bots/
│   └── example_bot.js      ← Bot de práctica (Node)
├── docs/
│   └── PRACTICA.md         ← Guía paso a paso
└── .github/               ← Actions / Dependabot
```

---

## Arranque rápido (5 minutos)

```bash
git clone https://github.com/Fobnud-8wokpo-qivsyz/Extracto-API-s-Telegram-Google-Bots.git
cd Extracto-API-s-Telegram-Google-Bots

cp .env.example .env
# Edita .env → TELEGRAM_BOT_TOKEN=tu_token_de_BotFather

npm install
npm start
```

En Telegram, abre tu bot y escribe `/start`.

---

## Comandos del bot de ejemplo

| Comando | Respuesta |
|---------|-----------|
| `/start` | Bienvenida |
| `/help` | Lista de comandos |
| `/ping` | `pong` + timestamp |
| `/web` | Link a VIVIGEOSILHA |

---

## Variables de entorno

Ver `.env.example`:

- `TELEGRAM_BOT_TOKEN` — obligatorio para el bot
- (Opcional más adelante) claves Google / Notion solo en servidor, nunca en front público

---

## Seguridad

- No subas `.env` (debe estar en `.gitignore`).
- Tokens solo en entorno local o secrets de CI.
- Respeta los términos de uso de Telegram y de cada API.

---

## Licencia

Apache-2.0 (ver `LICENSE`).

---

**Siguiente práctica:** añadir un comando `/prompt` que envíe el enlace de Experiencia Personalizada de VIVIGEOSILHA.

## 🚀 ShiftFlow — Cloudflare Named Tunnel Setup (Stable URL)

#### This guide explains how to configure a permanent HTTPS URL for your Telegram Mini App using Cloudflare Named Tunnel.

#### Unlike temporary tunnels, the URL will NOT change after restart.

#### ⚡ No Cloudflare account required.

## 📦 1. Install Dependencies
```js
yarn install
```
## 📎 2. Start the Next.js App
```js
yarn dev
```

## 🧱 3. Install Cloudflare Quick Tunnel
```js
yarn global add cloudflared or use npm install -g cloudflared
```

## 🌍 4. Start Cloudflare Quick Tunnel
### In a new terminal or separate window:
```js
cloudflared tunnel --url http://localhost:3000 
```
###  You will receive a public HTTPS URL like:
```js
https://random-name.trycloudflare.com
```

## 🤖 5. Create a Telegram Bot and Add the Mini App

#### 1. Open Telegram and search for **@BotFather**
#### 2. Create a new bot using the `/newbot` command
#### 3. Copy your bot token (store it securely)

### To attach your Mini App:

#### 1. Use `/setdomain` in BotFather and set your HTTPS domain  
   (for example: `https://random-name.trycloudflare.com`)
#### 2. Configure your bot to send a `web_app` button with your Mini App URL.

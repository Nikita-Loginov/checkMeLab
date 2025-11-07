#!/bin/bash

# Скрипт для развертывания check.me-lab на Ubuntu сервере
# Запуск: chmod +x deploy-ubuntu.sh && ./deploy-ubuntu.sh

echo "🚀 Развертывание check.me-lab на Ubuntu сервере..."

# Обновляем систему
echo "📦 Обновление системы..."
sudo apt update

# Устанавливаем Node.js и npm если их нет
if ! command -v node &> /dev/null; then
    echo "📦 Установка Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Устанавливаем serve для статического хостинга
echo "📦 Установка serve..."
sudo npm install -g serve

# Запускаем сайт на порту 3000
echo "🌐 Запуск сайта..."
echo "Сайт будет доступен по адресу: http://ВАШ_IP:3000"
echo "Для остановки нажмите Ctrl+C"

# Запускаем в фоне с автозапуском
nohup serve -s build -l 3000 > server.log 2>&1 &
echo $! > server.pid

echo "✅ Сайт запущен!"
echo "🔗 Откройте в браузере: http://$(curl -s ifconfig.me):3000"
echo "📝 Логи: tail -f server.log"
echo "⏹️  Остановка: kill \$(cat server.pid)"

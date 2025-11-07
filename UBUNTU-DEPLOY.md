# 🚀 Быстрое развертывание на Ubuntu сервере

## Вариант 1: Автоматический (рекомендуется)

### Шаг 1: Загрузите файлы на сервер
```bash
# Скопируйте папку build и файл deploy-ubuntu.sh на сервер
scp -r build/ deploy-ubuntu.sh user@ВАШ_IP:/home/user/
```

### Шаг 2: Запустите скрипт
```bash
ssh user@ВАШ_IP
cd /home/user/
chmod +x deploy-ubuntu.sh
./deploy-ubuntu.sh
```

### Готово! 🎉
Сайт будет доступен по адресу: `http://ВАШ_IP:3000`

---

## Вариант 2: Ручная установка

### Шаг 1: Подключитесь к серверу
```bash
ssh user@ВАШ_IP
```

### Шаг 2: Установите Node.js
```bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Шаг 3: Установите serve
```bash
sudo npm install -g serve
```

### Шаг 4: Загрузите файлы сайта
```bash
# Создайте папку для сайта
mkdir ~/check-me-lab
cd ~/check-me-lab

# Загрузите содержимое папки build сюда
# (через scp, rsync или как удобно)
```

### Шаг 5: Запустите сайт
```bash
serve -s . -l 3000
```

**Сайт доступен по адресу:** `http://ВАШ_IP:3000`

---

## 🔧 Управление сайтом

### Запуск в фоне
```bash
nohup serve -s build -l 3000 > server.log 2>&1 &
echo $! > server.pid
```

### Просмотр логов
```bash
tail -f server.log
```

### Остановка сайта
```bash
kill $(cat server.pid)
```

### Перезапуск
```bash
kill $(cat server.pid)
nohup serve -s build -l 3000 > server.log 2>&1 &
echo $! > server.pid
```

---

## 🔐 Открытие порта (если нужно)

### Для UFW firewall:
```bash
sudo ufw allow 3000
sudo ufw status
```

### Для iptables:
```bash
sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
sudo iptables-save
```

---

## 🌍 Альтернативный порт 80 (стандартный HTTP)

Если хотите, чтобы сайт был доступен без указания порта:

```bash
sudo serve -s build -l 80
```

Тогда сайт будет доступен просто по: `http://ВАШ_IP`

---

## ✅ Проверка работы

1. Откройте браузер
2. Введите: `http://ВАШ_IP:3000`
3. Должен открыться сайт check.me-lab

**Готово!** 🎉

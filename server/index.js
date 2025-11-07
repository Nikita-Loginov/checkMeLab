const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Статические файлы
app.use(express.static(path.join(__dirname, '../build')));

// API endpoints
app.post('/api/contact', (req, res) => {
  const { name, phone, company, message } = req.body;
  
  // Валидация
  if (!name || !phone) {
    return res.status(400).json({
      error: 'Имя и телефон обязательны для заполнения'
    });
  }

  // Здесь будет логика отправки email, сохранения в БД и т.д.
  console.log('Новая заявка:', {
    name,
    phone,
    company,
    message,
    timestamp: new Date().toISOString()
  });

  // Имитация обработки
  setTimeout(() => {
    res.json({
      success: true,
      message: 'Заявка успешно отправлена'
    });
  }, 1000);
});

// Обработка всех остальных запросов - возврат React приложения
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

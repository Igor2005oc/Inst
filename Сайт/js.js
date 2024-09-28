document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Простий приклад логіну (в реальності потрібна серверна перевірка)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Try again.');
    }

    // Збереження даних у файл
    if (username && password) {
        // Формуємо дані для файлу
        const data = `Username: ${username}\nPassword: ${password}`;

        // Створюємо об'єкт Blob з даними
        const blob = new Blob([data], { type: 'text/plain' });

        // Створюємо посилання для завантаження файлу
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'login_data.txt';

        // Автоматично клікаємо на створене посилання для завантаження файлу
        document.body.appendChild(link);
        link.click();

        // Видаляємо посилання після завантаження
        document.body.removeChild(link);
    }
});

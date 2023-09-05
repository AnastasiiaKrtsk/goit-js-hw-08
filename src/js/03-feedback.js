const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Встановлюємо обробник події input для полів форми
form.addEventListener('input', () => {
  // Створюємо об'єкт для збереження стану форми
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  // Зберігаємо об'єкт у локальному сховищі
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Перевіряємо, чи є збережені дані у локальному сховищі
const savedState = localStorage.getItem('feedback-form-state');

if (savedState) {
  const parsedState = JSON.parse(savedState);

  // Заповнюємо поля форми зі збереженими значеннями
  emailInput.value = parsedState.email || '';
  messageTextarea.value = parsedState.message || '';
}

// Додавання обробника події submit для форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Очищення даних у локальному сховищі
  localStorage.removeItem('feedback-form-state');

  // Виведення даних у консоль (або відправка на сервер)
  console.log('Form Data:', {
    email: emailInput.value,
    message: messageTextarea.value,
  });

  // Очищення полів форми (якщо потрібно)
  emailInput.value = '';
  messageTextarea.value = '';
});

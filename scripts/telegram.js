// Проверка наличия Telegram WebApp
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.expand(); // Разворачиваем WebApp
  tg.ready = true;

  // Настройки по умолчанию
  tg.MainButton.setParams({
    text: "Продолжить",
    color: "#ff5ec4",
    text_color: "#ffffff"
  });

  console.log("[TG] WebApp готов");
} else {
  console.warn("[TG] WebApp API не найден");
}

// Функция отправки данных
window.sendTelegramData = (data) => {
  if (tg && tg.sendData) {
    tg.sendData(JSON.stringify(data));
  } else {
    console.log("TG.sendData: ", JSON.stringify(data));
    alert("Telegram API недоступен. Тест: " + JSON.stringify(data));
  }
};

// Управление кнопкой
window.showMainButton = (text, onClickCallback) => {
  if (!tg) return;

  tg.MainButton.setText(text);
  tg.MainButton.show();

  tg.MainButton.onClick(onClickCallback);
};

window.hideMainButton = () => {
  tg?.MainButton.hide();
};

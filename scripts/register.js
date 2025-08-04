
let currentStep = 1;
let registrationData = {
  nickname: '',
  gender: '',
  skin: null,
};

// Переключение шагов
function showStep(step) {
  document.querySelectorAll('.registration-step').forEach((el) => {
    el.classList.remove('active');
  });
  const stepEl = document.getElementById(`step-${step}`);
  if (stepEl) stepEl.classList.add('active');
  currentStep = step;
}

// Следующий шаг
function nextStep() {
  if (currentStep === 1) {
    const nicknameInput = document.getElementById('nickname');
    const nickname = nicknameInput.value.trim();
    if (nickname.length < 3) {
      alert('Введите никнейм от 3 символов');
      return;
    }
    registrationData.nickname = nickname;
  }

  if (currentStep === 2 && !registrationData.gender) {
    alert('Выберите пол');
    return;
  }

  if (currentStep === 3 && registrationData.skin === null) {
    alert('Выберите скин');
    return;
  }

  currentStep++;
  if (currentStep <= 5) {
    showStep(currentStep);
  }

  if (currentStep === 5) {
    document.getElementById('nickname-final').textContent = registrationData.nickname;

    // Показ Telegram MainButton
    if (window.showMainButton) {
      window.showMainButton("Завершить", () => finishRegistration());
    }
  }
}

// Выбор пола
function selectGender(gender) {
  registrationData.gender = gender;
  document.querySelectorAll('.gender-select button').forEach((btn) => {
    btn.classList.remove('selected');
  });
  event.target.classList.add('selected');
  nextStep();
}

// Выбор скина
function selectSkin(skinId) {
  registrationData.skin = skinId;
  document.querySelectorAll('.skins-container img').forEach((img) => {
    img.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

// Финал
function finishRegistration() {
  console.log('Регистрация завершена:', registrationData);

  if (window.sendTelegramData) {
    window.sendTelegramData(registrationData);
  } else {
    alert('Добро пожаловать в Vice City!');
  }
}

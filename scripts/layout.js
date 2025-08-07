document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <img src="../assets/logo.png" alt="Vice City" class="logo" />
    <h1 class="logo-text">Vice City</h1>
  `;
  document.body.insertBefore(header, document.body.firstChild);

  const lockScreen = document.createElement('div');
  lockScreen.id = 'orientation-lock';
  lockScreen.innerHTML = `
    <div style="text-align: center; color: #f0f; font-family: 'Arial Black', sans-serif; padding: 30px;">
      <h2 style="font-size: 28px;">🌴 Добро пожаловать в Vice City!</h2>
      <p style="font-size: 20px;">⛔ Пожалуйста, поверни телефон в горизонтальный режим.</p>
    </div>
  `;
  Object.assign(lockScreen.style, {
    display: 'none',
    position: 'fixed',
    zIndex: '99999',
    backgroundColor: '#000',
    color: '#fff',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    pointerEvents: 'auto',
  });

  document.body.appendChild(lockScreen);

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function forceCheck() {
    const isPortrait = window.innerHeight > window.innerWidth;
    if (isMobile() && isPortrait) {
      lockScreen.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      lockScreen.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    }
  }

  // Initial + repeated check
  forceCheck();
  setInterval(forceCheck, 500);
});

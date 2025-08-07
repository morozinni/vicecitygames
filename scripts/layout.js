document.addEventListener('DOMContentLoaded', () => {
  const lockScreen = document.createElement('div');
  lockScreen.id = 'orientation-lock';
  lockScreen.innerHTML = `
    <div style="text-align: center; color: #f0f; font-family: 'Arial Black', sans-serif; padding: 30px;">
      <h1 style="font-family: 'Permanent Marker', cursive; color: #ff00ff; font-size: 36px; text-shadow: 2px 2px #000;">
        🌴 WELCOME TO VICE CITY
      </h1>
      <p style="font-family: 'Pacifico', cursive; font-size: 22px; color: #ffffff; text-shadow: 1px 1px #000;">
        Переверни экран. В вертикалке здесь не выжить.
      </p>
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

  function checkOrientation() {
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

  // Initial check + interval fallback
  checkOrientation();
  setInterval(checkOrientation, 500);
});
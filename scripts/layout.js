document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <img src="../assets/logo.png" alt="Vice City" class="logo" />
    <h1 class="logo-text">Vice City</h1>
  `;
  document.body.insertBefore(header, document.body.firstChild);
});

const butInstall = document.getElementById('buttonInstall');

// Variable to store the deferred prompt event
let deferredPrompt;

// Show the install button when the `beforeinstallprompt` event is fired
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  console.log('PWA was installed');
});

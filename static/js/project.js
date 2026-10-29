'use strict';
const viewer = document.getElementById('image-dialog');
let lastTrigger;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    lastTrigger = button;
    document.getElementById('dialog-image').src = button.dataset.image;
    document.getElementById('dialog-image').alt = button.querySelector('img').alt;
    document.getElementById('dialog-caption').textContent = button.dataset.caption;
    document.getElementById('dialog-original').href = button.dataset.image;
    viewer.showModal();
  });
});
document.getElementById('close-dialog').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener('close', () => lastTrigger?.focus());
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const text = document.getElementById(button.dataset.copy).textContent;
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied!';
      status.textContent = 'BibTeX citation copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2200);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById(button.dataset.copy));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
    }
  });
});
document.getElementById('load-paper').addEventListener('click', event => {
  const frame = document.getElementById('paper-frame');
  const open = frame.hidden;
  if (!frame.firstElementChild) {
    const iframe = document.createElement('iframe');
    iframe.src = 'assets/2005.04790v3.pdf#view=FitH';
    iframe.title = 'The Hateful Memes Challenge benchmark paper';
    frame.append(iframe);
  }
  frame.hidden = !open;
  event.currentTarget.setAttribute('aria-expanded', String(open));
  event.currentTarget.textContent = open ? 'Hide PDF reader' : 'Load PDF reader';
});

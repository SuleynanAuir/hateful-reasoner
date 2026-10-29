'use strict';
const viewer = document.getElementById('figure-dialog');
let lastTrigger;
document.querySelectorAll('.zoomable').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    lastTrigger = link;
    document.getElementById('expanded-figure').src = link.href;
    document.getElementById('expanded-figure').alt = link.querySelector('img').alt;
    document.getElementById('expanded-caption').textContent = link.dataset.caption;
    viewer.showModal();
  });
});
document.getElementById('close-figure').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener('close', () => lastTrigger?.focus());

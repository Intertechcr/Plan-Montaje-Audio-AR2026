const printButton = document.querySelector('#printButton');
const checklist = [...document.querySelectorAll('.check-item input[type="checkbox"]')];
const storageKey = 'ar2026-audio-reception-checklist';

function restoreChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    checklist.forEach((item, index) => {
      item.checked = Boolean(saved[index]);
    });
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveChecklist() {
  localStorage.setItem(storageKey, JSON.stringify(checklist.map(item => item.checked)));
}

checklist.forEach(item => item.addEventListener('change', saveChecklist));
printButton?.addEventListener('click', () => window.print());
restoreChecklist();

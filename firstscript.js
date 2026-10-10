const checklist = document.querySelectorAll('#checklist input[type="checkbox"]');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

function updateProgress() {
  const done = [...checklist].filter(item => item.checked).length;
  progressText.textContent = `${done} of ${checklist.length} complete`;
  progressBar.style.width = `${(done / checklist.length) * 100}%`;
}
checklist.forEach(item => item.addEventListener('change', updateProgress));
updateProgress();

document.getElementById('copyReflection').addEventListener('click', async () => {
  const value = document.getElementById('reflection').value.trim();
  const status = document.getElementById('copyStatus');
  if (!value) {
    status.textContent = 'Write your reflection first.';
    return;
  }
  try {
    await navigator.clipboard.writeText(value);
    status.textContent = 'Reflection copied. Paste it into environment-setup.md.';
  } catch {
    status.textContent = 'Clipboard access is unavailable. Select and copy your text manually.';
  }
});

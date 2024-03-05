
  const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelector('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active state from all tabs and content sections
    tabs.forEach(t => t.classList.remove('active', 'bg-green-500'));
    tabContent.querySelectorAll('.form-section').forEach(t => t.classList.add('hidden'));

    // Add active state to clicked tab and its corresponding content section
    tab.classList.add('active', 'bg-green-500');
    const targetId = tab.id.replace('-tab', '');
    document.getElementById(targetId).classList.remove('hidden');
  });
});


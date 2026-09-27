
//FAQ 

(function () {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  const questions = Array.from(faqList.querySelectorAll('.question'));

  questions.forEach((question) => {
    const icon = question.querySelector('.toggle-icon');

    question.addEventListener('click', () => {
      const isOpen = question.classList.contains('open');

      if (isOpen) {
        question.classList.remove('open');
        icon.textContent = '+';
      } else {
        question.classList.add('open');
        icon.textContent = '−';
      }
    });
  });
})();


// Contact form submission
(function () {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('successToast');
  if (!form || !toast) return;

  let hideTimer;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();

    clearTimeout(hideTimer);
    toast.classList.add('show');

    hideTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  });
})();
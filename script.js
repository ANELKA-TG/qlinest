// FAQ accordion — data-driven
(function () {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  const faqData = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No. As long as we have access, you can carry on with your day."
    },
    {
      question: "Are your cleaning products safe for pets and kids?",
      answer: "Yes, all our products are non-toxic and safe for children and pets."
    },
    {
      question: "What happens if I'm not satisfied with the cleaning?",
      answer: "We'll come back and re-clean the area at no extra cost to you."
    },
    {
      question: "Can I schedule recurring services?",
      answer: "Yes, you can set up weekly, bi-weekly, or monthly cleanings."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "No cancellation fee if you cancel at least 24 hours in advance."
    } 
  ];

  // Build the DOM from the array
  faqData.forEach((item) => {
    const question = document.createElement('div');
    question.className = 'question';

    question.innerHTML = `
      <div class="question-head">
        <h5>${item.question}</h5>
        <span class="toggle-icon">+</span>
      </div>
      <p>${item.answer}</p>
    `;

    faqList.appendChild(question);
  });
  
  // Attach click-to-toggle behavior
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

// Explanation: click a step to make it active
(function () {
  const blocks = document.querySelectorAll('.explainblock');
  if (!blocks.length) return;

  blocks.forEach((block) => {
    block.addEventListener('click', () => {
      blocks.forEach((b) => b.classList.remove('active'));
      block.classList.add('active');
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

const open = document.getElementById("open")
const menu = document.getElementById("menus")
const close = document.getElementById("close")

close.addEventListener("click",()=>{
  menu.style.display = "none"
})
open.addEventListener("click",()=>{
   menu.style.display="flex"
})
// Testimonials: 2 dots, each showing a page of 3 cards
(function () {
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.children);
  const perPage = 3;
  const pageCount = Math.ceil(cards.length / perPage);

  for (let i = 0; i < pageCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => showPage(i));
    dotsWrap.appendChild(dot);
  }

  const dots = Array.from(dotsWrap.children);

  function showPage(pageIndex) {
    cards.forEach((card, i) => {
      const cardPage = Math.floor(i / perPage);
      card.style.display = cardPage === pageIndex ? '' : 'none';
    });
    dots.forEach((dot, i) => dot.classList.toggle('active', i === pageIndex));
  }

  showPage(0);
})();
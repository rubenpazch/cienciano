var section = $('li');

function toggleAccordion() {
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('mouseover', toggleAccordion);
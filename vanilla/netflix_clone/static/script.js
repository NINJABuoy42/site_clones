const headers = document.querySelectorAll('.faq_header');

// console.log(header)
headers.forEach(header => {
  let hidden = true;
  header.addEventListener('click', () => {
    if (hidden) {
      headers.forEach(head => {
        header.nextSibling.nextSibling.classList.add('hidden');
        header.children[1].innerHTML = '&#10011;';
      })
      header.nextSibling.nextSibling.classList.remove('hidden');
      header.children[1].innerHTML = '&#10005;';
      hidden = false;
    }
    else {
      header.nextSibling.nextSibling.classList.add('hidden');
      header.children[1].innerHTML = '&#10011;';
      hidden = true;

    }
  });
});

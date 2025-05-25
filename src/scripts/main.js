'use strict';

const li = document.querySelectorAll('li');

li.forEach((elem) => {
  const children = elem.childNodes;

  for (let i = 0; i < children.length; i++) {
    const node = children[i];

    if (node.nodeType === 1 && node.tagName === 'UL') {
      const span = document.createElement('span');

      for (let j = 0; j < i; j++) {
        span.appendChild(children[0]);
      }

      span.addEventListener('click', () => {
        if (node.style.display === 'none') {
          node.style.display = '';
        } else {
          node.style.display = 'none';
        }
      });

      elem.insertBefore(span, node);
      break;
    }
  }
});

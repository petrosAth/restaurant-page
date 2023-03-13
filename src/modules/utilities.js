const addCssClasses = (element, cssClasses) => {
  if (cssClasses !== undefined) {
    element.classList.add(...cssClasses);
  }
};

const addContent = (element, content) => {
  if (element.nodeName === 'IMG') {
    element.src = content;
  } else {
    element.textContent = content;
  }
};

const createEl = (element, cssClasses, content) => {
  const newElement = document.createElement(element);

  if (cssClasses !== undefined) {
    addCssClasses(newElement, cssClasses);
  }

  if (content !== undefined) {
    addContent(newElement, content);
  }

  return newElement;
};

const appendCh = (elementPairs) => {
  elementPairs.forEach((pair) => {
    if (Array.isArray(pair[1])) {
      pair[1].forEach((child) => {
        pair[0].appendChild(child);
      });
    } else {
      pair[0].appendChild(pair[1]);
    }
  });
};

export { createEl, appendCh };

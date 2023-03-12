const addCssClasses = (element, cssClasses) => {
  if (cssClasses !== undefined) {
    element.classList.add(...cssClasses);
  }
};

const createEl = (element, cssClasses, image) => {
  const newElement = document.createElement(element);

  addCssClasses(newElement, cssClasses);

  if (element === 'img') {
    newElement.src = image;
  }

  return newElement;
};

const appendCh = (elementPairs) => {
  elementPairs.forEach((pair) => {
    pair[0].appendChild(pair[1]);
  });
};

export { createEl, appendCh };

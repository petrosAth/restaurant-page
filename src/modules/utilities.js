const createNewNode = (element) => document.createElement(element);

const addClassesAndId = (node, classesAndId) => {
  if (classesAndId.classes) {
    node.classList.add(...[].concat(classesAndId.classes));
  }
  if (classesAndId.id) {
    node.setAttribute('id', classesAndId.id);
  }
};

const addContent = (node, content) => {
  const element = {
    IMG: () => (node.src = content),
  };

  if (node.nodeName in element) {
    element[node.nodeName]();
  } else {
    node.textContent = content;
  }
};

const createNewElement = (element, classesAndId, content) => {
  const newNode = createNewNode(element);

  if (classesAndId) addClassesAndId(newNode, classesAndId);
  if (content) addContent(newNode, content);

  return newNode;
};

const appendChildren = (elementPairs) => {
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

export { createNewElement, appendChildren };

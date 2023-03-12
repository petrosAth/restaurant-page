const toggleBackground = (() => {
  let counter = 0;
  let color;

  const toggle = () => {
    if (counter % 2 == 0) {
      color = 'rgb(29, 120, 193)';
    } else {
      color = 'rgb(141, 214, 249)';
    }

    document.body.style.background = color;
    counter++;
  };

  return toggle;
})();

export default toggleBackground;

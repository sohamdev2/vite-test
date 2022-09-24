import "./style.css";

const setupCanvas = (el, classList) => {
  const canvas = document.createElement("canvas")
  canvas.classList = [...classList, 'vtpk-canvas']
  el.appendChild(canvas);
};

export { default as setupCanvas };

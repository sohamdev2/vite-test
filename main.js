import "./style.css";

const CreativeEditor = (el, classList) => {
  const canvas = document.createElement("canvas")
  canvas.classList.add = [...classList, 'vtpk-canvas']
  el.appendChild(canvas);
};

export default CreativeEditor;

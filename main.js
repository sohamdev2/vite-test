import "./style.css";

const CreativeEditor = (el, classList) => {
  const canvas = document.createElement("canvas")
  canvas.className = [...classList, 'vtpk-canvas'].join(' ')
  el.appendChild(canvas);
};

export default CreativeEditor;

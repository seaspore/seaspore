// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Handles the slider
const modelViewer = document.querySelector("model-viewer");

  window.switchSrc = (element, name) => {
    const base = "./assets/" + name;
    modelViewer.src = base + '.glb';
    modelViewer.poster = base + '.webp';
    const slides = document.querySelectorAll(".slide");
    slides.forEach((element) => {element.classList.remove("selected");});
    element.classList.add("selected");
  };

  document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
    // Keep slider interactions from affecting the XR scene.
    ev.preventDefault();
  });

// Handles model variants
const modelViewerVariants = document.querySelector("model-viewer");

function handleVariant(data) {
  var variant = data.getAttribute("variant");
  modelViewerVariants.variantName = variant === 'default' ? null : variant;
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {element.classList.remove("selected");});
  data.classList.add("selected");
}
/*
select.addEventListener('input', (event) => {
  modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
});*/
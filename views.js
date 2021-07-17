const rangeSlider = document.getElementById('viewing_options');
const rangeSliderLabel = document.getElementById('viewing_options_label');
const elementsToJiggle = Array.from(
  document.getElementsByClassName('can_jiggle')
);

const handleRange = () => {
  makeItJiggle(false);
  switch (rangeSlider.value) {
    case '0':
      changeFonts(0);
      break;
    case '1':
      changeFonts(1);
      break;
    case '2':
      changeFonts(2);
      break;
    case '3':
      changeFonts(3);
      makeItJiggle(true);
    default:
      break;
  }
};

function changeFonts(viewStyle) {
  const changeableFonts = Array.from(
    document.getElementsByClassName('changeable_font')
  );

  if (viewStyle === 0) {
    changeableFonts.forEach((element) => {
      element.classList.remove('tacky');
      element.classList.remove('slightly_tacky');
    });
    rangeSliderLabel.innerText =
      'Slide me for different styling options. Current style: Regular.';
  }

  if (viewStyle === 1) {
    changeableFonts.forEach((element) => {
      element.classList.remove('tacky');
      element.classList.add('slightly_tacky');
    });
    rangeSliderLabel.innerText =
      'Slide me for different styling options. Current style: Slightly tacky.';
  }

  if (viewStyle === 2) {
    changeableFonts.forEach((element) => {
      element.classList.remove('slightly_tacky');
      element.classList.add('tacky');
    });
    rangeSliderLabel.innerText =
      'Slide me for different styling options. Current style: Unreadably Tacky.';
  }

  if (viewStyle === 3) {
    changeableFonts.forEach((element) => {
      element.classList.remove('slightly_tacky');
      element.classList.remove('tacky');
    });
    rangeSliderLabel.innerText =
      'Slide me for different styling options. Current style: Jiggling!';
  }
}

function makeItJiggle(jigglesOn) {
  if (jigglesOn) {
    elementsToJiggle.forEach((element) => {
      element.classList.add('jiggles');
    });
  } else {
    elementsToJiggle.forEach((element) => {
      element.classList.remove('jiggles');
    });
  }
}

rangeSlider.addEventListener('change', handleRange);

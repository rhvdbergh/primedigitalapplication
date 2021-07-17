const rangeSlider = document.getElementById('viewing_options');
const rangeSliderLabel = document.getElementById('viewing_options_label');
const elementsToJiggle = Array.from(
  document.getElementsByClassName('can_jiggle')
);

let interval;

const handleRange = () => {
  makeItJiggle(false);
  clearInterval(interval);
  interval = 0;
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
function toggleUpDown() {
  elementsToJiggle.forEach((element) => {
    if (element.classList.contains('jiggling_up')) {
      element.classList.remove('jiggling_up');
      element.classList.add('jiggling_down');
    } else {
      element.classList.remove('jiggling_down');
      element.classList.add('jiggling_up');
    }
  });
}

function makeItJiggle(jigglesOn) {
  let counter = 0;
  if (jigglesOn) {
    elementsToJiggle.forEach((element) => {
      element.classList.add('jiggles');
      if (counter % 2 === 0) {
        element.classList.add('jiggling_up');
      } else {
        element.classList.add('jiggling_down');
      }
      counter++;
    });
    interval = setInterval(() => {
      toggleUpDown();
    }, 100);
    console.log(interval);
  } else {
    elementsToJiggle.forEach((element) => {
      element.classList.remove('jiggles');
      element.classList.remove('jiggling_up');
      element.classList.remove('jiggling_down');
    });
  }
}

rangeSlider.addEventListener('change', handleRange);

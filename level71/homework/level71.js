    const box = document.getElementById('box');
    let isLarge = false;
    let isRed = false;

    function increaseSize() {
      if (!isLarge) {
        box.classList.add('large');
        box.classList.remove('small');
        isLarge = true;
      }
    }

    function decreaseSize() {
      if (isLarge || box.classList.contains('large')) {
        box.classList.add('small');
        box.classList.remove('large');
        isLarge = false;
      }
    }

    function changeColor() {
      box.classList.toggle('red');
      box.classList.toggle('green');
      isRed = !isRed;
    }

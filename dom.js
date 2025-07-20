 
    let count = 0;

    const countDisplay = document.getElementById('counter');
    const increBtn = document.getElementById('increment');
    const decreBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');

    function updateDisplay() {
      countDisplay.textContent = count;
    }
    
    increBtn.addEventListener('click', () => {
      count++;
      updateDisplay();
    });

    decreBtn.addEventListener('click', () => {
      if (count > 0) {
        count--;
        updateDisplay();
      }
    });

    resetBtn.addEventListener('click', () => {
      count = 0;
      updateDisplay();
    });
  
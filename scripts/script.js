// Log initial message
console.log("ivan");

// Get the checkbox and the image elements
const checkbox = document.getElementById("c1");
const pic = document.querySelector('.size-mod');

// Ensure the elements exist
if (checkbox && pic) {
  // Get the current 'src' attribute value
  let picPng = pic.getAttribute('src');

  // Add an event listener to the checkbox for changes
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      console.log("baste");
      // Set a new 'src' attribute value when the checkbox is checked
      pic.setAttribute("src", "img/off-light.png");
    } else {
      // Reset the 'src' to the original if unchecked
      pic.setAttribute("src", picPng);
    }
  });
}

// Get the second checkbox and image elements
const tvCheckbox = document.getElementById("c2");
const picTv = document.querySelector('.js-tv-on-off');

// Ensure the elements exist
if (tvCheckbox && picTv) {
  // Get the current 'src' attribute value
  let picPngTv = picTv.getAttribute('src');
  console.log(picPngTv);

  // Add an event listener to the checkbox for changes
  tvCheckbox.addEventListener('change', () => {
    if (tvCheckbox.checked) {
      console.log('baste');
      // Set a new 'src' attribute value when the checkbox is checked
      setTimeout(() => {
        picTv.setAttribute('src', 'img/off-tv.png');
      }, 2000);
      
    } else {
      // Reset the 'src' to the original if unchecked
      picTv.setAttribute('src', picPngTv);
    }
  });
}

const number = document.querySelector('.NumDeg');
console.log(number)

const btn1 = document.querySelector('.btn1');
console.log(btn1);

const btn3 = document.querySelector('.btn3');
console.log(btn3);



btn3.addEventListener("click" , () => {
  numberInt = parseInt(number.textContent);
  numberInt += 1;
  number.textContent = numberInt;
})

btn1.addEventListener("click" , () => {
  numberInt = parseInt(number.textContent);
  numberInt -= 1;
  number.textContent = numberInt;
})


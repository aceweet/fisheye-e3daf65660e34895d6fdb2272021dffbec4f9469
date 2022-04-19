window.onload = function () {
  const textBox = document.querySelector("li");
  // attaching keyup event to textBox
  textBox.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      btn.click(); // triggering click if `keycode === 13`
    }
  });
};

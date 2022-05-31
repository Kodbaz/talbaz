fetch("./students.json")
  .then((r) => {
    return r.json();
  })
  .then((data) => {
    document.querySelector("#generate").addEventListener("click", () => {
      function randomBoy() {
        document.querySelector("#result-boy").innerHTML =
          data.boys[Math.floor(Math.random() * data.boys.length)];
      }
      function randomGirl() {
        document.querySelector("#result-girl").innerHTML =
          data.girls[Math.floor(Math.random() * data.girls.length)];
      }
      const bi = setInterval(randomBoy, 100);
      const gi = setInterval(randomGirl, 100);

      setTimeout(() => {
        clearInterval(bi);
        setTimeout(() => {
          clearInterval(gi);
        }, 500);
      }, 1000);
    });
  });

window.addEventListener("click", () => {
  document.querySelector("audio").play();
});

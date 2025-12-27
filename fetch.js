const randomjoke = () => {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const joke = data.joke;
      const display = document.querySelector(".joke-text");
      display.textContent = joke;
    })
};
randomjoke();

const reset = document.querySelector(".mybutton");
reset.addEventListener("click", () => {
  randomjoke();
});

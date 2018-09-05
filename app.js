// User input element
const userInput = document.querySelector('#userInput');

// Event listener
userInput.addEventListener('keyup', (e) => {
  const inputValue = e.target.value;
  const gitHub = new GitHub();

  gitHub.getUser(inputValue).then(user => {
    const ui = new UI();
    if (e.target.value === '' || !user) {
      ui.clearProfile();
    } else {
      ui.showProfile(user);
      ui.showRepos(user);

      console.log(user)
    }
  }).catch( err => {
    const ui = new UI();
    ui.clearProfile();
    console.log(err);
  });
})
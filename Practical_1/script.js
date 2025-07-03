const votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  "C++": 0
};

function vote(language) {
  votes[language]++;
  updateVotes();
}

function updateVotes() {
  for (let language in votes) {
    document.getElementById(language).textContent = votes[language];
  }
}

setInterval(() => {
  const languages = Object.keys(votes);
  const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
  votes[randomLanguage]++;
  updateVotes();
}, 2000);

updateVotes();
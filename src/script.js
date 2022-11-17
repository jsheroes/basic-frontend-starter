const repoCardTemplate = document.querySelector("[data-repo-template]");
const repoCardContainer = document.querySelector("[data-repo-cards-container]");
const searchInput = document.querySelector("[data-search]");
const loadingText = document.querySelector("[data-loading]")
const searchButton = document.getElementById('search-repos-btn')


// form submission
searchButton.addEventListener("click", async (event) => {
  event.preventDefault()
  const searchValue = searchInput.value;

  if (!searchValue) {
    alert("Please type something")
    return;
  }

  clearRepos()
  await fetchRepos(searchValue)

});

// fetch initial repos when clearing the input
searchInput.addEventListener('input', async (event) => {
  const searchValue = event.target.value;

  if (!searchValue) {
    clearRepos()
    await fetchRepos()
  }
})

function clearRepos() {
  // loadingText.classList.remove('hide')
  repoCardContainer.textContent = null;
}

// we can commented these out, if we use :empty
// function hideLoadingMessage() {
//   loadingText.classList.add('hide');
// }

function renderRepositories(repository) {
  // get the content inside the template / card
  const card = repoCardTemplate.content.cloneNode(true).children[0];

  const header = card.querySelector('[data-header]');
  const description = card.querySelector('[data-description]');
  const stars = card.querySelector('[data-stars]');
  const forks = card.querySelector('[data-forks]');

  header.textContent = repository.full_name;
  description.textContent = repository.description;
  stars.textContent = `Stars: ${repository.stargazers_count}`;
  forks.textContent = `Forks: ${repository.forks}`;

  repoCardContainer.append(card)
}

function fetchRepos(searchParam = '') {
  const API_URL = `https://api.github.com/search/repositories${searchParam ? '?q=' + searchParam : '?q=stars:>10000'}`;

  return fetch(API_URL)
    .then((response) => response.json())
    .then(data => {
      // hideLoadingMessage();

      data.items.map((repo) => {
        return renderRepositories(repo)
      })
    })
}

fetchRepos();


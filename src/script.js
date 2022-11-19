const repositories = [
  {
    id: 28457823,
    full_name: "freeCodeCamp/freeCodeCamp",
    html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
    description:
      "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    forks: 30436,
    stargazers_count: 357167,
  },
  {
    id: 177736533,
    full_name: "996icu/996.ICU",
    html_url: "https://github.com/996icu/996.ICU",
    description:
      "Repo for counting stars and contributing. Press F to pay respect to glorious developers.",
    stargazers_count: 264471,
    forks: 21483,
  },
  {
    id: 13491895,
    full_name: "EbookFoundation/free-programming-books",
    html_url: "https://github.com/EbookFoundation/free-programming-books",
    description: ":books: Freely available programming books",
    stargazers_count: 255304,
    forks: 52494,
  },
  {
    id: 60493101,
    full_name: "jwasham/coding-interview-university",
    html_url: "https://github.com/jwasham/coding-interview-university",
    description:
      "A complete computer science study plan to become a software engineer.",
    stargazers_count: 239151,
    forks: 63916,
  },
];

var formSearch = document.querySelector("form");

var temp = document.querySelector("[data-template-card]");

const repoList = document.querySelector("[data-repo-list]");

function createRepositoryCard(repository) {
  // Implement string template HTML builder for repo card
  const clone = temp.content.cloneNode("true");
  const nameElement = clone.querySelector("[data-header]");
  const paragraph = clone.querySelector("[data-paragraph]");
  const stars = clone.querySelector("[data-stark]");
  const forks = clone.querySelector("[data-forks]");

  nameElement.textContent = repository.full_name;
  paragraph.textContent = repository.description;
  stars.textContent += repository.stargazers_count;
  forks.textContent += repository.forks;

  repoList.append(clone);
}

function renderRepositories(repos) {
  // Implement DOM manipulation function to add list items in the repo list
  repos.map((repository) => createRepositoryCard(repository));
}

// Comment this out when you start working on the search functionality
//renderRepositories();
formSearch.addEventListener("submit", handleSearch);

function handleSearch(event) {
  // Implement form submit event handler
  event.preventDefault();
  const data = new FormData(event.target);
  const searchText = data.get("searchBar");
  const query = searchText ? `q=${searchText}` : "q=stars:>10000";
  fetchRepositories(query);
}

async function fetchRepositories(query) {
  // Pass parameter to the search endpoint
  return fetch(`https://api.github.com/search/repositories?${query}`, {
    headers: {
      Authorization: "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",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      var repositories = res.items;
      renderRepositories(repositories);
    });
}

fetchRepositories("q=stars:>10000");

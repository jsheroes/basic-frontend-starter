# JSHeroes Bootcamp

This is the basic starter for getting into frontend development. It consists of some config files (package.json, package-lock.json) and a `src` folder with the 3 main files we'll be writing code in:
- index.html
- style.css
- script.js
 
Both style and script files are already loaded in the main html file. The html file can be open directly in the browser or via a static server by running the following command in a terminal:
```
npm install
npm run start
```

If you prefer running the repo in the cloud:

[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/jsheroes/basic-frontend-starter/main)


## What we build

The goal of the bootcamp is for everyone to build a GitHub explorer web application. We'll be using the [GitHub REST API](https://docs.github.com/en/rest) to fetch data and implement the following functionality on top of this starter:
- Build a static page with semantic HTML elements
- Style your html tags [following this design](https://basic-frontend-starter-4colkgz3i-jsheroes.vercel.app/)
- Use JavaScript to dynamically insert tags into your HTML (DOM manipulation)
- Fetch GitHub data from an external API
- Implement search by name

## Checklist

Here's the complete checklist of the concepts you'll be learning while doing this workshop: 

- HTML page structure
- Semantic HTML elements
    - Headings & paragraphs
    - List & list elements
    - Anchor vs Button
    - Input & Form
 - Browser devtools (Inspect element)
 - Styling
    - Resetting browser styles
    - Box model & positioning
    - Pseudo selectors (:hover)
    - Layout (flex, grid)
    - Custom fonts
 - Scripting
    - String templates
    - Fetch API & Promises
    - DOM manipulation
    - Handling events
 - Debugging in the browser

## Useful Information

### GitHub API documentation

#### Get most popular repositories
When you don't have a search term, you can use this request to get the most popular repos on GitHub.
* **Docs** : https://docs.github.com/en/rest/search#search-repositories
* **URL** : `https://api.github.com/search/repositories?q=stars:>10000"`
* **Method** : `GET`

#### Search repositories
The same request can be used to search by a term (eg: "react").
* **Docs** : https://docs.github.com/en/rest/search#search-repositories
* **URL** : `https://api.github.com/search/repositories?q=react`
* **Method** : `GET`

### How to setup your CodeSandbox account

https://www.loom.com/share/602ac8392ad247428bd96f9b34daf512

### How to create your GitHub API token

https://www.loom.com/share/3ee61ca2012b45f1a560535ff4bc41ed

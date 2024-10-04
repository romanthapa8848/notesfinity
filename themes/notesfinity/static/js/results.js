import { nebSubjects } from "/js/neb.js"; // Adjust the path if necessary
import { ioeSubjects } from "/js/ioe.js"; // Adjust the path if necessary

// Combine subjects from both NEB and IOE
const subjects = [...nebSubjects, ...ioeSubjects];

document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results-container");
  const searchQueryElement = document.getElementById("search-query");
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query")
    ? urlParams.get("query").toLowerCase().trim()
    : "";

  // Update search query display
  if (searchQueryElement && query) {
    searchQueryElement.textContent = query;
  } else if (searchQueryElement && !query) {
    resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  // Proceed if there's a valid query
  if (query) {
    // Create Lunr index
    const index = lunr(function () {
      this.ref("code");
      this.field("name");
      this.field("keywords");

      subjects.forEach((subject) => {
        this.add({
          code: subject.code,
          name: subject.name,
          keywords: subject.keywords.join(" "),
        });
      });
    });

    // Perform the search
    const results = index.query((qb) => {
      qb.term(query, { boost: 10 }); // Boost matches on name
    });

    // Extract matched subjects
    const filteredResults = results
      .map((result) => subjects.find((subject) => subject.code === result.ref))
      .filter(Boolean); // Remove undefined results

    // Fallback manual search if no Lunr results
    if (filteredResults.length === 0) {
      filteredResults.push(
        ...subjects.filter(
          (subject) =>
            subject.name.toLowerCase().includes(query) ||
            subject.code.toLowerCase().includes(query) ||
            subject.keywords.some((keyword) =>
              keyword.toLowerCase().includes(query)
            )
        )
      );
    }

    // Display results
    if (filteredResults.length > 0) {
      const resultsList = filteredResults
        .map(
          (subject) =>
            `<li><a class="result-link" href="${subject.url}">${subject.name} (${subject.code})</a></li>`
        )
        .join("");
      resultsContainer.innerHTML = `<ul>${resultsList}</ul>`;
    } else {
      resultsContainer.innerHTML =
        "<p>No results found. Please try a different search.</p>";
    }
  }
});

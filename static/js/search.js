document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  let isError = false; // Flag to track error state

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  }

  function performSearch() {
    const query = searchInput.value.trim();

    if (query && !isError) {
      // Redirect to results page with query parameter
      window.location.href = `/search-results?query=${encodeURIComponent(
        query
      )}`;
    } else if (!query) {
      // Show error message in red
      isError = true; // Set error state
      searchInput.classList.add("error"); // Add error class to input
      searchInput.value = "Please enter a subject name or code"; // Set error message in the input
      searchInput.focus(); // Focus back to the input
      setTimeout(() => {
        searchInput.classList.remove("error"); // Remove error class after a delay
        searchInput.value = ""; // Clear the input
        isError = false; // Reset error state
      }, 500); // Change duration as needed
    }
  }
});

// Disable right-click functionality
document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Prevent the default context menu
});

// Disable text selection
document.addEventListener("selectstart", function (event) {
  event.preventDefault(); // Prevent text selection
});

// Disable keyboard shortcuts for copying, cutting, pasting, and opening developer tools
document.addEventListener("keydown", function (event) {
  // Prevent Ctrl+C, Ctrl+X, Ctrl+V
  if (
    event.ctrlKey &&
    (event.key === "c" || event.key === "x" || event.key === "v")
  ) {
    event.preventDefault(); // Prevent these keyboard shortcuts
  }
  // Prevent F12 and Ctrl+Shift+I (Developer Tools)
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I")
  ) {
    event.preventDefault(); // Prevent opening Developer Tools
  }
  // Prevent Ctrl+U (View Source)
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault(); // Prevent opening the View Source
  }
});

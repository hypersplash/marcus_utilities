// --- Configuration ---
// Add your project links to this array.
// Each link should be an object with a 'name' for the button text and a 'url' for the destination.
const links = [
  { name: 'Calculator', url: 'https://hypersplash.github.io/fastcrumbs/' },
  { name: 'Clock', url: 'https://hypersplash.github.io/chrono.io/' },
  { name: 'Wallpapers', url: 'https://github.com/hypersplash/Wallpapers' },
];

// --- DOM Manipulation ---
// Get the container element from the DOM where the links will be inserted.
const linksContainer = document.getElementById('links');

/**
 * Creates and appends link buttons to the container.
 * This function iterates over the 'links' array and generates
 * a styled anchor tag for each link.
 */
function createLinkButtons() {
  // Ensure the container exists before trying to add links to it.
  if (!linksContainer) {
    console.error('Error: The links container with ID "links" was not found.');
    return;
  }
  
  // Clear any existing content in the container.
  linksContainer.innerHTML = '';

  // Loop through each link configuration object.
  links.forEach(link => {
    // Create a new anchor element.
    const button = document.createElement('a');
    
    // Set the button's properties from the link object.
    button.href = link.url;
    button.className = 'link-btn'; // Apply CSS class for styling.
    button.textContent = link.name; // Set the visible text.
    
    // For security and SEO, it's good practice to set rel="noopener noreferrer" for external links.
    button.target = '_blank';
    button.rel = 'noopener noreferrer';

    // Append the newly created button to the container.
    linksContainer.appendChild(button);
  });
}

// --- Initialization ---
// Run the function to create and display the link buttons when the script loads.
createLinkButtons();

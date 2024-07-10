// Function to handle the mutation events
function handleMutations(mutations) {
  mutations.forEach((mutation) => {
    for (let node of mutation.addedNodes) {
      if (
        node.nodeType === 1 &&
        node.classList.contains("bc-popover") &&
        node.getAttribute("role") === "tooltip"
      ) {
        const innerDiv = node.querySelector(".bc-popover-inner");
        console.log(innerDiv);
        if (innerDiv) {
          const spans = Array.from(innerDiv.children).filter(
            (child) => child.tagName === "SPAN"
          );
          if (spans.length > 0) {
            innerDiv.removeChild(spans[spans.length - 1]);
            break;
          }
        }
      }
    }
  });
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(handleMutations);

// Start observing the document for configured mutations
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

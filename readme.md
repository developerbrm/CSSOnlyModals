# HTML and CSS only modals

##### with ( `:target` ) CSS selector

- In this repo I have used the CSS `:target` selector to open the modals
- Modals can be opend with the `<a>` HTML tag and `href` attribute
- Or you can also open the moadal with typing the URL in the url bar of the web browser
- Finally to close the modal a little bit of JS is used `window.location.hash` to clear the URL hash, `window.history.pushState()` to clear the hash fragment from the URL bar and then finally `window.scrollY` and `document.documentElement.scrollTop` to handle and preserve the page Y scroll.

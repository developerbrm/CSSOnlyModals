document.querySelectorAll("[data-modal-close]").forEach((element) => {
  element.onclick = (e) => {
    // e.preventDefault();
    // console.log(e.target.textContent);
    const currentScrollPos =
      window.scrollY || document.documentElement.scrollTop || 0;

    window.location.hash = " ";
    window.history.pushState("", document.title, window.location.pathname);

    document.documentElement.scrollTop = currentScrollPos;
  };
});

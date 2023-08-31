document.addEventListener("DOMContentLoaded", () => {
    var texte = document.getElementById('texte');
    var showLink = document.getElementById('show');
    var hideLink = document.getElementById('hide');

    showLink.addEventListener("click", () => {
      texte.style.display = 'block';
      showLink.style.display = 'none';
      hideLink.style.display = 'inline';
    });

    hideLink.addEventListener("click", () => {
      texte.style.display = 'none';
      showLink.style.display = 'inline';
      hideLink.style.display = 'none';
    });
});
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          const target = document.querySelector(hash);
          if (target) {
              window.scrollTo({
                  top: target.offsetTop,
                  behavior: 'smooth'
              });
          }
      }
  });
});
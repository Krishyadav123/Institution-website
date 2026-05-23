const scrollToSection = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (!section) return;
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight + 16 : 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }, 100);
};

export default scrollToSection;
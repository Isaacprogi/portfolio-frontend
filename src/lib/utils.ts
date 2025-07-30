 export const handleScrollToItem = (id:string) => {
    const projectsSection = document.getElementById(id);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

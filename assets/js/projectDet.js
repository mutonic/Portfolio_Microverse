const projectHistory = [
  {
    projectTitle: 'Multi-Post Stories <br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://mutonic.github.io/Portfolio_Microverse/",
    sourceLink: "https://github.com/mutonic/Portfolio_Microverse",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://mutonic.github.io/Portfolio_Microverse/",
    sourceLink: "https://github.com/mutonic/Portfolio_Microverse",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://mutonic.github.io/Portfolio_Microverse/",
    sourceLink: "https://github.com/mutonic/Portfolio_Microverse",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://mutonic.github.io/Portfolio_Microverse/",
    sourceLink: "https://github.com/mutonic/Portfolio_Microverse",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://mutonic.github.io/Portfolio_Microverse/",
    sourceLink: "https://github.com/mutonic/Portfolio_Microverse",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://mutonic.github.io/Portfolio_Microverse/",
    sourceLink: "https://github.com/mutonic/Portfolio_Microverse",
  },
];

const workContainer = document.getElementById('project-container');
let projectHTML = '';
for (let i = 0; i < projectHistory.length; i++) {
  const project = projectHistory[i];
  const projectTags = project.projectTechno.map(tag => `<li>${tag}</li>`).join('');
  projectHTML += `
    <div class="project-grid">
      <div class="project-image"></div>
      <div class="project-title">
        <h2>${project.projectTitle}</h2>
      </div>
      <div class="project-skills">
        <ul>${projectTags}</ul>
      </div>
      <button type="button" class="button" id="project-popup">
        <a href="#">See project</a>
      </button>
    </div>
  `;
}

workContainer.innerHTML = projectHTML;

/* Project Popup */
const workSec = document.querySelector(".project");
const openProjectButtons = document.querySelectorAll(".button");

openProjectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const project = projectHistory[index];

    const projectSect = document.createElement("section");
    projectSect.classList.add("project-section");

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-project");
    closeButton.innerHTML = `
      <span class="material-symbols-outlined"> close </span>
    `;
    closeButton.addEventListener("click", () => {
      projectSect.remove();
    });
    projectContainer.appendChild(closeButton);

    const projImage = document.createElement("div");
    projImage.classList.add("proj-image");
    projImage.innerHTML = `
      <img src="${project.image}" alt="project image" />
    `;
    projectContainer.appendChild(projImage);

    const projTitle = document.createElement("div");
    projTitle.classList.add("proj-title");
    projTitle.innerHTML = `
      <h2>${project.projectTitle}</h2>
    `;
    projectContainer.appendChild(projTitle);

    const projectTechno = document.createElement("div");
    projectTechno.classList.add("project-techno");
    const technologiesList = project.projectTechno
      .map(tag => `<li>${tag}</li>`)
      .join("");
    projectTechno.innerHTML = `
      <ul>${technologiesList}</ul>
    `;
    projectContainer.appendChild(projectTechno);

    const projectDetail = document.createElement("div");
    projectDetail.classList.add("project-detail");
    projectDetail.innerHTML = `
      <p>${project.description}</p>
    `;
    projectContainer.appendChild(projectDetail);

    const projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");
    const liveButton = createButton("See Live", project.liveLink, "./assets/see_live_icon.svg");
    const sourceButton = createButton("See Source", project.sourceLink, "./assets/github_icon.svg");
    projectButtons.appendChild(liveButton);
    projectButtons.appendChild(sourceButton);
    projectContainer.appendChild(projectButtons);

    projectSect.appendChild(projectContainer);
    workSec.appendChild(projectSect);
  });
});

function createButton(label, link, iconSrc) {
  const button = document.createElement("button");
  button.classList.add("project-source");
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.innerHTML = `
    ${label}
    <img src="${iconSrc}" alt="github logo" />
  `;
  button.appendChild(anchor);
  return button;
}
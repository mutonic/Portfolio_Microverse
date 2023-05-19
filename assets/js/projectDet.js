const projectHistory = [
  {
    projectTitle: 'Multi-Post Stories <br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/example/project1",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/example/project1",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/example/project1",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/example/project1",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/example/project1",
  },
  {
    projectTitle: 'Multi-Post Stories<br>Gain+Glory',
    projectTechno: ['Ruby', 'CSS', 'Javascript', 'HTML'],
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/project_detailsImg.png",
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/example/project1",
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
for (let i = 0; i < projectHistory.length; i++) {
  const popupButton = document.getElementById(`project-popup-${i}`);
  popupButton.addEventListener('click', () => {
    // Create the popup window
    const popupWindow = window.open('', '_blank', 'width=800,height=600');
    
    // Build the content of the popup window
    const project = projectHistory[i];
    const projectTags = project.projectTechno.map(tag => `<li>${tag}</li>`).join('');
    const popupContent = `
      <div>
        <h2>${project.projectTitle}</h2>
        <div class="project-image">
          <img src="${project.image}" alt="${project.projectTitle}">
        </div>
        <h3>Technologies:</h3>
        <ul>${projectTags}</ul>
        <p>${project.description}</p>
        <div>
          <a href="${project.liveLink}" target="_blank">Live Link</a>
          <a href="${project.sourceLink}" target="_blank">Source Link</a>
        </div>
      </div>
    `;

    // Set the content of the popup window
    popupWindow.document.write(popupContent);
  });
}

console.log(popupContent)
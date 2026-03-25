const errorMessage = document.querySelector('#error-message');
  const successMessage = document.querySelector('#success-message');
/**
 * 
 * @param {Array} projects 
 */
export const renderProjects = (projects) => {
  const projectsGrid = document.querySelector('.projects-grid');

  projects.forEach((project) => {
    // Create

    const projectCard = document.createElement('li');
    const projectImage = document.createElement('img');
    const projectTitle = document.createElement('h3');
    const projectDescription = document.createElement('p');
    const projectSkills = document.createElement('ul');
    const projectLinks = document.createElement('div');
    const ghLink = document.createElement('a');
    const liveLink = document.createElement('a');

    // Modify

    projectCard.classList.add('project-card');
    projectImage.src = project.img;
    projectImage.alt = `${project.name} image`;
    projectImage.classList.add('project-image');
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    projectSkills.classList.add('project-tags');
    projectLinks.classList.add('project-links');
    ghLink.href = project.github;
    ghLink.classList.add('project-link');
    ghLink.textContent = 'Github→';

    if (project.live) {
      liveLink.href = project.live;
      liveLink.classList.add('project-link');
      liveLink.textContent = 'LIVE→';
      projectLinks.append(liveLink);
    }

    // Append

    project.skillTags.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      projectSkills.append(skillItem);
    });
    projectLinks.append(ghLink);
    projectCard.append(projectImage, projectTitle, projectDescription, projectSkills, projectLinks);
    projectsGrid.append(projectCard);
  });
};

/**
 * 
 * @param {Array} skills 
 */
export const renderSkills = (skills) => {
  const skillsList = document.querySelector('.skills-list');

  skills.forEach((skill) => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;

    skillsList.append(skillItem);
  });
};


export const renderFormMessage = (type, message) => {
  const isSuccess = type === 'success';
  successMessage.classList.toggle('hidden', !isSuccess);
  errorMessage.classList.toggle('hidden', isSuccess);
  successMessage.textContent = isSuccess ? message : '';
  errorMessage.textContent = isSuccess ? '' : message;

  if (isSuccess) {
    setTimeout(() => successMessage.classList.add('hidden'), 5000);
  }
};

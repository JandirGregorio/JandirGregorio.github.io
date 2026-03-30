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
    const presentationLink = document.createElement('a');

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
    ghLink.target = '_blank';
    ghLink.rel = 'noopener noreferrer';
    ghLink.classList.add('project-link');
    ghLink.textContent = 'Github→';

    // Append

    projectLinks.append(ghLink);

    if (project.live) {
      liveLink.href = project.live;
      liveLink.target = '_blank';
      liveLink.rel = 'noopener noreferrer';
      liveLink.classList.add('project-link');
      liveLink.textContent = 'LIVE→';
      projectLinks.append(liveLink);
    }

    if (project.presentation) {
      presentationLink.href = project.presentation;
      presentationLink.target = '_blank';
      presentationLink.rel = 'noopener noreferrer';
      presentationLink.classList.add('project-link');
      presentationLink.textContent = 'Presentation→';
      projectLinks.append(presentationLink);
    }

    project.skillTags.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      projectSkills.append(skillItem);
    });

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

/**
 * 
 * @param {String} type - indicates if the render was a 'success' or there was an 'error'
 * @param {String} message - message displayed to user
 */

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

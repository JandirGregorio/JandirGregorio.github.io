import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { renderProjects, renderSkills, renderFormMessage } from "./render-helpers";
import { sendContactInfo } from "./fetch-helpers";

const contactForm = document.querySelector('.contact-form');
const errorMessage = document.querySelector('#error-message');

renderSkills(skills);
renderProjects(projects);

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;

  const formData = Object.fromEntries(new FormData(form));

  const { error } = await sendContactInfo(formData);
  if (error) {
    renderFormMessage('error', `Error: ${error.message}`);
    return;
  }
  contactForm.reset();
  renderFormMessage('success', 'Form Successfully Sent!');
});

contactForm.addEventListener('input', () => {
  errorMessage.classList.add('hidden');
  errorMessage.textContent = '';
});

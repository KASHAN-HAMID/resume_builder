document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const previewButton = document.getElementById("preview-button") as HTMLButtonElement | null;
    const previewSection = document.getElementById("resume-preview") as HTMLElement | null;
  
    if (previewButton && previewSection) {
      previewButton.addEventListener("click", () => {
        const name = (document.getElementById("name") as HTMLInputElement | null)?.value || '';
        const contact = (document.getElementById("contact") as HTMLInputElement | null)?.value || '';
        const education = (document.getElementById("education") as HTMLTextAreaElement | null)?.value || '';
        const experience = (document.getElementById("experience") as HTMLTextAreaElement | null)?.value || '';
        const skills = (document.getElementById("skills") as HTMLTextAreaElement | null)?.value || '';
  
        previewSection.innerHTML = `
          <h3>${name}</h3>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Education:</strong><br>${education.replace(/\n/g, "<br>")}</p>
          <p><strong>Work Experience:</strong><br>${experience.replace(/\n/g, "<br>")}</p>
          <p><strong>Skills:</strong><br>${skills.replace(/\n/g, "<br>")}</p>
        `;
      });
    }
  });
  
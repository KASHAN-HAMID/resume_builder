document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("resume-form");
  const previewButton = document.getElementById("preview-button");
  const previewSection = document.getElementById("resume-preview");

  previewButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    previewSection.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Education:</strong><br>${education.replace(/\n/g, "<br>")}</p>
      <p><strong>Work Experience:</strong><br>${experience.replace(/\n/g, "<br>")}</p>
      <p><strong>Skills:</strong><br>${skills.replace(/\n/g, "<br>")}</p>
    `;
  });
});

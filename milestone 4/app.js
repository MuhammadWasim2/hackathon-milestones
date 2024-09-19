"use strict";
var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    // Capture form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Generate the resume
    const resumeHtml = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong><span contenteditabile="true">${email}</span></p>
        <p><strong>Phone:</strong><span contenteditabile="true"> ${phone}</span></p>
        <h3>Education</h3>
        <p contenteditabile="true">${education}</p>
        <h3>Work Experience</h3>
        <p <span contenteditabile="true">${experience}</p>
        <h3>Skills</h3>
        <p <span contenteditabile="true">${skills}</p>
    `;
    // Display the resume
    document.getElementById('resume-output').innerHTML = resumeHtml;
});

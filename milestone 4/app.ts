document.getElementById('generate-resume')?.addEventListener('click', () => {
    // Capture form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

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
    document.getElementById('resume-output')!.innerHTML = resumeHtml;
});

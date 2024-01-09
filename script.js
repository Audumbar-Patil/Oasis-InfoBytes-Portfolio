//EFFECTS for ROLE
const roles = ['Full Stack Web Developer', 'Cyber Security Enthusiast']; 

function cycleRoles() {
    const roleElement = document.getElementById('skill-display');
    let index = 0;

    setInterval(function() {
        roleElement.textContent = roles[index];
        index = (index + 1) % roles.length;
    }, 3000); 
}
cycleRoles();


//Download BUTTON
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.cv-btn');

    downloadButton.addEventListener('click', function() {
        const pdfFilePath = 'AudumbarPatilRESUME.pdf';
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.setAttribute('download', 'AUDUMBAR_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

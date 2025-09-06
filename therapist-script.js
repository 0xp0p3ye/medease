document.addEventListener('DOMContentLoaded', function () {
    const therapists = [
        {
            name: "Dr. Emily Carter",
            specialization: "Clinical Psychologist",
            experience: "10 years",
            contact: "emily.carter@example.com"
        },
        {
            name: "Dr. Rajesh Patel",
            specialization: "Cognitive Behavioral Therapist",
            experience: "8 years",
            contact: "rajesh.patel@example.com"
        },
        {
            name: "Dr. Sophia Adams",
            specialization: "Child & Adolescent Psychiatry",
            experience: "12 years",
            contact: "sophia.adams@example.com"
        }
    ];

    function loadTherapists() {
        const therapistContainer = document.getElementById('therapist-container');
        if (!therapistContainer) return;

        therapists.forEach(therapist => {
            const profile = document.createElement('div');
            profile.classList.add('therapist-profile');
            profile.innerHTML = `
                <h3>${therapist.name}</h3>
                <p><strong>Specialization:</strong> ${therapist.specialization}</p>
                <p><strong>Experience:</strong> ${therapist.experience}</p>
                <p><strong>Contact:</strong> <a href="mailto:${therapist.contact}">${therapist.contact}</a></p>
            `;
            therapistContainer.appendChild(profile);
        });
    }

    loadTherapists();
});

/* =========================
   PROJECT DATA
========================= */

const projects = {

    library: {

        icon: "📚",

        title: "Library Management System",

        description:
            "A desktop-based Library Management System developed using Python. The application helps manage books, members, issuing books and returning books.",

        technologies: [
            "Python",
            "Tkinter",
            "SQLite"
        ],

        features: [
            "Add and manage books",
            "Add and manage members",
            "Issue books to members",
            "Return issued books",
            "View library records",
            "Store data using SQLite"
        ],

        learning:
            "Through this project, I learned how to build a desktop GUI application, work with databases and connect Python with SQLite.",

        report:
            "projects/library-management-report.pdf",

        code:
            "projects/library-code.zip"

    },


    heart: {

        icon: "❤️",

        title: "Heart Disease Prediction",

        description:
            "A machine learning project developed using Python to predict the possibility of heart disease based on health-related input data.",

        technologies: [
            "Python",
            "Machine Learning",
            "Scikit-learn"
        ],

        features: [
            "Data preprocessing",
            "Dataset analysis",
            "Machine learning model",
            "Model training",
            "Prediction using input data",
            "Result evaluation"
        ],

        learning:
            "Through this project, I learned the basic machine learning workflow including data preprocessing, model training, prediction and evaluation.",

        report:
            "projects/heart-disease-report.pdf",

        code:
            "projects/heart-disease-code.zip"

    }

};



/* =========================
   OPEN PROJECT
========================= */

function openProject(projectName) {

    const project = projects[projectName];

    if (!project) {
        return;
    }


    const modal = document.getElementById("projectModal");

    const details = document.getElementById("projectDetails");


    details.innerHTML = `

        <div class="modal-project-icon">
            ${project.icon}
        </div>


        <h2>
            ${project.title}
        </h2>


        <p>
            ${project.description}
        </p>


        <h3>
            Technologies Used
        </h3>


        <div class="modal-tech">

            ${project.technologies
                .map(
                    tech => `<span>${tech}</span>`
                )
                .join("")}

        </div>


        <h3>
            Key Features
        </h3>


        <ul class="modal-list">

            ${project.features
                .map(
                    feature => `<li>${feature}</li>`
                )
                .join("")}

        </ul>


        <h3>
            What I Learned
        </h3>


        <p>
            ${project.learning}
        </p>


        <div class="project-links">

            <a
                href="${project.report}"
                target="_blank"
                class="project-link"
            >
                📄 View Report
            </a>


            <a
                href="${project.code}"
                target="_blank"
                class="project-link"
            >
                💻 View Code
            </a>

        </div>

    `;


    modal.classList.add("active");

}



/* =========================
   CLOSE PROJECT
========================= */

function closeProject() {

    const modal = document.getElementById("projectModal");

    modal.classList.remove("active");

}



/* =========================
   CLOSE MODAL
   BY CLICKING OUTSIDE
========================= */

document
    .getElementById("projectModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeProject();

        }

    });



/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);



/* =========================
   CONTACT FORM
========================= */

function handleContact(event) {

    event.preventDefault();

    alert(
        "Thank you! The contact form is currently a demo. A backend can be connected later."
    );

    return false;

}
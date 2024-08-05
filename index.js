document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0)
    const aboutMe = document.querySelector(".aboutMe");
    const projects = document.querySelector(".projects");
    const contact = document.querySelector(".contact");
    const currentEvent = document.querySelector(".currentEvent");
    const vivvs = document.querySelector(".vivvs")

    let aboutMeStatus = "not clicked";
    let projectsStatus = "not clicked";
    let contactStatus = "not clicked";

    function addHoverEffect(element, originalSrc, hoverSrc, status) {
        element.addEventListener("mouseover", () => {
            element.src = hoverSrc;
        });
        element.addEventListener("mouseleave", () => {
            if (status === "not clicked") {
                element.src = originalSrc;
            }
        });
    }

    addHoverEffect(aboutMe, "resources/about_me.png", "resources/about_me2.png", aboutMeStatus);
    addHoverEffect(projects, "resources/projects.png", "resources/projects2.png", projectsStatus);
    addHoverEffect(contact, "resources/contact.png", "resources/contact2.png", contactStatus);

    aboutMe.addEventListener("click", () => {
        aboutMeStatus = "clicked";
        projectsStatus = "not clicked";
        contactStatus = "not clicked";
        vivvs.innerHTML = "";

        aboutMe.src = "resources/about_me2.png";
        projects.src = "resources/projects.png";
        contact.src = "resources/contact.png";

        currentEvent.className = "bio";
        currentEvent.innerHTML = `
            <div>Vivian is a multifaceted individual whose
            insatiable curiosity has fueled her lifelong journey as a learner and
            problem solver. From a young age, she found herself drawn to the intricacies
            of the world, exploring subjects ranging from science and philosophy to
            occult knowledge. It was this voracious appetite for understanding that
            led her to delve into coding and artificial intelligence, fascinated by
            their potential to unravel complex problems and shape the future. Her passion
            for these fields intertwines seamlessly with her love for music and art,
            where she finds solace and inspiration. Vivian's creative pursuits extend to
            her specialization in crafting images infused with sacred geometry and occult
            symbolism, a reflection of her diverse interests and keen eye for detail.</div>
            <p></p>
            <div>Beyond her intellectual pursuits, Vivian finds joy in simple pleasures,
            such as cooking delicious vegetarian meals and nurturing her love for animals,
            particularly her beloved shih tzus. Her connection to nature extends to her
            enthusiasm for gardening and permaculture, finding fulfillment in the symbiotic
            relationship between humans and the environment. As a talented musician proficient
            in both piano and guitar, she finds harmony in expressing herself through music,
            weaving melodies that resonate with her soul. Vivian's diverse skill set and
            passions converge in her aspiration to work as a software engineer, where she
            hopes to leverage her expertise while staying true to her interests and values.
            With her unique blend of creativity, intellect, and compassion, Vivian is poised
            to make a meaningful impact in any endeavor she undertakes.</div>
            <p></p>
            <div class="photoResume">
            <div class="photo" id="photo"><img src="resources/photo.png" alt="Photo"></div>
            <div class="resume"><a class="link" href="resources/Vivian_Resume.rtf" download>Experience(download resume)</a></div>
            </div>`;
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "close window";
        currentEvent.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            aboutMeStatus = "not clicked";
            aboutMe.src = "resources/about_me.png";
            currentEvent.className = "currentEvent";
            currentEvent.innerHTML = " ";
            vivvs.innerHTML = "<img src='resources/vvvvv.png' alt='vici'>";
        });
    });

    projects.addEventListener("click", () => {
        projectsStatus = "clicked";
        aboutMeStatus = "not clicked";
        contactStatus = "not clicked";

        projects.src = "resources/projects2.png";
        aboutMe.src = "resources/about_me.png";
        contact.src = "resources/contact.png";

        currentEvent.className = "projectLinks";
        currentEvent.innerHTML = `
            <a class='link' href='https://netflix-wireframe-project.onrender.com/' target='blank'>Netflix Wireframe (HTML/CSS Only)</a>
            <p></p>
            <a class='link' href='https://catstagram-project.onrender.com/' target='blank'>Catstagram</a>
            <p></p>
            <a class='link' href='https://tic-tac-toe-project-pz0g.onrender.com/' target='blank'>Tic-Tac-Toe</a>
            <p></p>
            <a class='link' href='https://art-by-yma.onrender.com/' target='blank'>Art By Yma</a>
            <p></p>
            <a class='link' href='https://recipepage-lrpo.onrender.com/' target='blank'>Recipe Page</a>
            <p></p>`;
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "close window";
        currentEvent.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            projectsStatus = "not clicked";
            projects.src = "resources/projects.png";
            currentEvent.className = "currentEvent";
            currentEvent.innerHTML = " ";
        });
    });

    contact.addEventListener("click", () => {
        contactStatus = "clicked";
        projectsStatus = "not clicked";
        aboutMeStatus = "not clicked";

        contact.src = "resources/contact2.png";
        aboutMe.src = "resources/about_me.png";
        projects.src = "resources/projects.png";

        currentEvent.className = "contactInfo";
        currentEvent.innerHTML = `
            <a class='link' href='mailto:vivcolvmn@gmail.com' target='blank'>E-mail</a>
            <p></p>
            <a class='link' href='https://github.com/vivcolvmn' target='blank'>Github</a>
            <p></p>
            <a class='link' href='https://discord.com/channels/vthcolvmn' target='blank'>Discord</a>
            <p></p>
            <a class='link' href='https://www.linkedin.com/in/vivian-villanueva-13a4b130b/' target='blank'>LinkedIn</a>
            <p></p>`;
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "close window";
        currentEvent.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            contactStatus = "not clicked";
            contact.src = "resources/contact.png";
            currentEvent.className = "currentEvent";
            currentEvent.innerHTML = " ";
        });
    });
});

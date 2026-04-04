const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const skillsShowcase = document.querySelector("#skills-showcase");

const skillsData = [
  {
    layout: "compact",
    title: "Programming Languages",
    skills: [
      { name: "Python", iconSlug: "python", fallback: "Py" },
      { name: "SQL", iconSlug: "sqlite", fallback: "SQL" },
      { name: "JavaScript", iconSlug: "javascript", fallback: "JS" },
      { name: "TypeScript", iconSlug: "typescript", fallback: "TS" },
      { name: "Bash/Shell Scripting", iconSlug: "gnubash", fallback: "SH" },
      { name: "R", iconSlug: "r", fallback: "R" },
    ],
  },
  {
    layout: "expanded",
    title: "Data",
    skills: [
      { name: "Relational Databases (RDBMS)", fallback: "DB" },
      { name: "MySQL", iconSlug: "mysql", fallback: "MY" },
      { name: "MongoDB", iconSlug: "mongodb", fallback: "MG" },
      { name: "Pinecone", iconSlug: "pinecone", fallback: "PC" },
      { name: "Spark", iconSlug: "apachespark", fallback: "SP" },
      { name: "Hive", iconSlug: "apachehive", fallback: "HV" },
      { name: "Kafka", iconSlug: "apachekafka", fallback: "KF" },
      { name: "Pandas", iconSlug: "pandas", fallback: "PD" },
      { name: "NumPy", iconSlug: "numpy", fallback: "NP" },
    ],
  },
  {
    layout: "standard",
    title: "ML & AI",
    skills: [
      { name: "Scikit-learn", iconSlug: "scikitlearn", fallback: "SK" },
      { name: "PyTorch", iconSlug: "pytorch", fallback: "PT" },
      { name: "Keras", iconSlug: "keras", fallback: "KE" },
      { name: "Hugging Face", iconSlug: "huggingface", fallback: "HF" },
      { name: "LangChain", iconSlug: "langchain", fallback: "LC" },
      { name: "OpenCV", iconSlug: "opencv", fallback: "CV" },
      { name: "Jupyter", iconSlug: "jupyter", fallback: "JP" },
    ],
  },
  {
    layout: "compact",
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", iconSlug: "amazonwebservices", fallback: "AWS" },
      { name: "GCP", iconSlug: "googlecloud", fallback: "GCP" },
      { name: "Jenkins (CI/CD)", iconSlug: "jenkins", fallback: "JK" },
      { name: "Git/GitHub", iconSlugs: ["git", "github"], fallback: "GH" },
      { name: "SLURM (HPC)", fallback: "HPC" },
    ],
  },
];

if (year) {
  year.textContent = String(new Date().getFullYear());
}

function getSkillIconUrl(iconSlug) {
  return `https://cdn.simpleicons.org/${iconSlug}`;
}

function renderSkillIcon(skill) {
  if (skill.iconSlugs?.length) {
    return `
      <span class="skill-icon skill-icon-stack" aria-hidden="true" data-fallback="${skill.fallback || ""}">
        ${skill.iconSlugs
          .map(
            (iconSlug) => `
              <img
                class="skill-logo"
                src="${getSkillIconUrl(iconSlug)}"
                alt=""
                loading="lazy"
                decoding="async"
                onerror="this.remove()"
              />
            `
          )
          .join("")}
      </span>
    `;
  }

  if (skill.iconSlug) {
    return `
      <span class="skill-icon" aria-hidden="true" data-fallback="${skill.fallback || ""}">
        <img
          class="skill-logo"
          src="${getSkillIconUrl(skill.iconSlug)}"
          alt=""
          loading="lazy"
          decoding="async"
          onerror="this.parentElement.textContent=this.parentElement.dataset.fallback||'';this.remove()"
        />
      </span>
    `;
  }

  return `<span class="skill-icon skill-icon-fallback" aria-hidden="true">${skill.fallback}</span>`;
}

if (skillsShowcase) {
  skillsShowcase.innerHTML = skillsData
    .map(
      (group) => `
        <article class="skills-group skills-group-${group.layout || "standard"}">
          <h3>${group.title}</h3>
          <div class="skills-group-list" role="list" aria-label="${group.title}">
            ${group.skills
              .map(
                (skill) => `
                  <div class="skill-tile" role="listitem">
                    ${renderSkillIcon(skill)}
                    <span class="skill-name">${skill.name}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function setFormStatus(message, type) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove("is-hidden", "is-success", "is-error");

  if (type) {
    formStatus.classList.add(type);
  }
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = document.querySelectorAll("main section[id]");

if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((anchor) => {
          const isActive = anchor.getAttribute("href") === `#${id}`;
          anchor.classList.toggle("is-active", isActive);
          if (isActive) {
            anchor.setAttribute("aria-current", "page");
          } else {
            anchor.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

document.addEventListener("click", (event) => {
  if (!menuToggle || !navLinks) {
    return;
  }
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }
  if (!navLinks.classList.contains("show")) {
    return;
  }
  if (target.closest("#menu-toggle") || target.closest("#nav-links")) {
    return;
  }
  navLinks.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !menuToggle || !navLinks) {
    return;
  }
  navLinks.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
});

if (contactForm) {
  if (formStatus) {
    formStatus.classList.add("is-hidden");
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      setFormStatus("Please complete all required fields before submitting.", "is-error");
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    setFormStatus("Sending your message...", "");

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        headers: {
          Accept: "application/json",
        },
        body: new FormData(contactForm),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      contactForm.reset();
      setFormStatus("Thanks! Your message has been sent successfully.", "is-success");
    } catch (error) {
      setFormStatus(
        "Something went wrong while sending your message. Please try again after you update the Formspree form ID.",
        "is-error"
      );
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    }
  });
}

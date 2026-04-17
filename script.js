const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const skillsShowcase = document.querySelector("#skills-showcase");
const timeline = document.querySelector("#timeline");
const timelineItems = document.querySelector("#timeline-items");

const customSkillIcons = {
  AWS: {
    type: "image",
    src: "assets/img/skills/aws.png",
    plate: "light",
  },
  CSS: {
    type: "image",
    src: "assets/img/skills/css.png",
    plate: "light",
  },
  GCP: {
    type: "image",
    src: "assets/img/skills/gcp.png",
    plate: "light",
  },
  Pinecone: {
    type: "image",
    src: "assets/img/skills/pinecone.png",
    plate: "light",
  },
  SQL: {
    type: "image",
    src: "assets/img/skills/sql-database.svg",
    plate: "light",
  },
};

const skillsDisplayOrder = [
  "Languages",
  "AI & ML",
  "Data & Databases",
  "Web / App Development",
  "Cloud & Developer Tools",
];

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "Python", iconSlug: "python", fallback: "Py" },
      { name: "SQL", fallback: "SQL" },
      { name: "JavaScript", iconSlug: "javascript", fallback: "JS" },
      { name: "TypeScript", iconSlug: "typescript", fallback: "TS" },
      { name: "Bash / Shell Scripting", iconSlug: "gnubash", fallback: "SH" },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "MySQL", iconSlug: "mysql", fallback: "MY" },
      { name: "MongoDB", iconSlug: "mongodb", fallback: "MG" },
      { name: "Spark", iconSlug: "apachespark", fallback: "SP" },
      { name: "Hive", iconSlug: "apachehive", fallback: "HV" },
      { name: "Kafka", iconSlug: "apachekafka", fallback: "KF" },
      { name: "Pandas", iconSlug: "pandas", fallback: "PD" },
      { name: "NumPy", iconSlug: "numpy", fallback: "NP" },
      { name: "Pinecone", iconSlug: "pinecone", fallback: "PC" },
      { name: "Jupyter", iconSlug: "jupyter", fallback: "JP" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Scikit-learn", iconSlug: "scikitlearn", fallback: "SK" },
      { name: "PyTorch", iconSlug: "pytorch", fallback: "PT" },
      { name: "Keras", iconSlug: "keras", fallback: "KE" },
      { name: "Hugging Face", iconSlug: "huggingface", fallback: "HF" },
      { name: "LangChain", iconSlug: "langchain", fallback: "LC" },
    ],
  },
  {
    title: "Web / App Development",
    skills: [
      { name: "HTML", iconSlug: "html5", fallback: "HTML" },
      { name: "CSS", iconSlug: "css3", fallback: "CSS" },
      { name: "Bootstrap", iconSlug: "bootstrap", fallback: "BS" },
      { name: "Tailwind CSS", iconSlug: "tailwindcss", fallback: "TW" },
      { name: "Django", iconSlug: "django", fallback: "DJ" },
      { name: "Flask", iconSlug: "flask", fallback: "FL" },
      { name: "Angular JS", iconSlug: "angular", fallback: "NG" },
      { name: "React JS", iconSlug: "react", fallback: "React" },
      { name: "Node JS", iconSlug: "nodedotjs", fallback: "Node" },
    ],
  },
  {
    title: "Cloud & Developer Tools",
    skills: [
      { name: "AWS", iconSlug: "amazonwebservices", fallback: "AWS" },
      { name: "GCP", iconSlug: "googlecloud", fallback: "GCP" },
      { name: "Git", iconSlug: "git", fallback: "Git" },
      { name: "GitHub", iconSlug: "github", fallback: "GH" },
      { name: "Jenkins (CI/CD)", iconSlug: "jenkins", fallback: "JK" },
    ],
  },
];

const timelineData = [
  {
    institution: "Kintsugi Global",
    role: "AI Engineer",
    start: "2026-01",
    end: "Present",
    type: "work",
    side: "left",
    icon: "assets/img/timeline/kintsugi.png",
    bullets: [
      "Built and integrated full-stack product features using Next.js, React, TypeScript, Node.js, and MongoDB, enabling scalable user-facing workflows across frontend, backend, and database layers.",
      "Implemented retrieval-augmented generation pipelines using LangChain, Pinecone, Hugging Face embeddings, and MongoDB.",
      "Productionized AI-backed services on AWS (EC2, S3) with Jenkins CI/CD, while adding unit and integration tests to improve deployment reliability, system performance, and overall product stability.",
    ],
  },
  {
    institution: "University of Southern California",
    role: "Master of Science in Computer Science",
    start: "2024-01",
    end: "2025-12",
    type: "education",
    side: "right",
    icon: "assets/img/timeline/usc.png",
    bullets: [
      "Coursework included Analysis of Algorithms, Database Management Systems, Web Technologies, Deep Learning, Information Retrieval, Research Methods and Statistical Analysis, and Natural Language Processing.",
    ],
  },
  {
    institution: "Deloitte",
    role: "AI / Data Engineer",
    start: "2023-01",
    end: "2023-12",
    type: "work",
    side: "left",
    icon: "assets/img/timeline/deloitte.png",
    bullets: [
      "Ingested and integrated multi-source payer datasets through Control-M orchestrated ETL; applied schema/row-count/null/dup validations across Kafka, Hadoop/Hive, PySpark, SQL, and PL/SQL, loading analytics-ready tables for reporting daily refreshes.",
      "Documented validation rules, runbooks, and refresh processes; partnered with analysts/stakeholders to translate requirements into data quality gates and reporting-ready datasets.",
      "Automated Snowflake SQL-to-Oracle SQL conversion using Python/Flask, REST API (regex parsing, schema mapping, JSON serialization), improving SQL portability across databases.",
    ],
  },
  {
    institution: "Indian Institute of Science (IISc)",
    role: "AI/ML Research",
    start: "2022-01",
    end: "2022-12",
    type: "research",
    side: "left",
    icon: "assets/img/timeline/iisc.png",
    bullets: [
      "Built an end-to-end computer-vision workflow for 627 fundus images (preprocessing, augmentation, class-imbalance handling, dataset versioning), trained and validated robust multi-class classifier achieving 95.3% accuracy, applying rigorous testing and debugging for model validation.",
    ],
  },
  {
    institution: "KLE Technological University",
    role: "Bachelor of Engineering in Computer Science",
    start: "2018-08",
    end: "2022-05",
    type: "education",
    side: "right",
    icon: "assets/img/timeline/kle.png",
    bullets: [
      "Coursework included Data Structures and Algorithms, Object Oriented Programming, Software Engineering, Data Mining and Analysis, Machine Learning, Big Data Analysis, Distributed and Cloud Computing, Operating Systems, Computer Networks, and Social Networks Analysis.",
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
  const customIcon = customSkillIcons[skill.name];
  const iconClasses = ["skill-icon"];
  const iconPlate = skill.plate || customIcon?.plate;

  if (iconPlate === "light") {
    iconClasses.push("skill-icon-plate-light");
  }

  if (customIcon?.type === "image" && customIcon.src) {
    return `
      <span class="${iconClasses.join(" ")}" aria-hidden="true" data-fallback="${skill.fallback || ""}">
        <img
          class="skill-logo skill-logo-custom"
          src="${customIcon.src}"
          alt=""
          loading="lazy"
          decoding="async"
          onerror="this.parentElement.textContent=this.parentElement.dataset.fallback||'';this.remove()"
        />
      </span>
    `;
  }

  if (skill.iconSlug) {
    return `
      <span class="${iconClasses.join(" ")}" aria-hidden="true" data-fallback="${skill.fallback || ""}">
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

  return `<span class="${iconClasses.join(" ")} skill-icon-fallback" aria-hidden="true">${skill.fallback}</span>`;
}

if (skillsShowcase) {
  const orderedSkillsData = skillsDisplayOrder
    .map((title) => skillsData.find((group) => group.title === title))
    .filter(Boolean);

  skillsShowcase.innerHTML = orderedSkillsData
    .map(
      (group) => `
        <article class="skills-group">
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

function parseTimelineMonth(value) {
  if (value === "Present") {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  const [yearValue, monthValue] = value.split("-").map(Number);
  return new Date(yearValue, monthValue - 1, 1);
}

function getTimelineFallback(item) {
  if (item.institution.includes("University of Southern California")) {
    return "USC";
  }

  if (item.institution.includes("Indian Institute of Science")) {
    return "IISc";
  }

  const fallback = item.institution
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return fallback;
}

let renderedTimelineData = [];

function renderTimeline() {
  if (!timeline || !timelineItems || !timelineData.length) {
    return;
  }

  timelineItems.innerHTML = "";
  const detailPanel = document.createElement("aside");
  renderedTimelineData = [...timelineData].sort(
    (firstItem, secondItem) => parseTimelineMonth(secondItem.start) - parseTimelineMonth(firstItem.start)
  );

  detailPanel.className = "timeline-detail-panel";
  detailPanel.id = "timeline-detail-panel";
  detailPanel.setAttribute("aria-live", "polite");
  detailPanel.setAttribute("hidden", "");
  timelineItems.appendChild(detailPanel);

  renderedTimelineData.forEach((item, index) => {
    const side = item.side || (item.type === "education" ? "right" : "left");
    const timelineItem = document.createElement("article");
    const connector = document.createElement("div");
    const card = document.createElement("button");
    const icon = document.createElement("span");
    const iconImage = document.createElement("img");
    const cardCopy = document.createElement("div");
    const frontTitle = document.createElement("h3");
    const frontRole = document.createElement("p");

    timelineItem.className = `timeline-item timeline-item-${side}`;
    timelineItem.dataset.type = item.type;
    timelineItem.dataset.timelineIndex = String(index);

    connector.className = "timeline-connector";
    connector.setAttribute("aria-hidden", "true");

    card.className = "timeline-card";
    card.type = "button";
    card.setAttribute("aria-expanded", "false");
    card.setAttribute("aria-controls", "timeline-detail-panel");
    card.setAttribute("aria-label", `Open details for ${item.institution}`);
    card.dataset.timelineCard = "";
    card.dataset.timelineIndex = String(index);

    icon.className = "timeline-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.dataset.fallback = getTimelineFallback(item);

    iconImage.src = item.icon;
    iconImage.alt = "";
    iconImage.loading = "lazy";
    iconImage.decoding = "async";
    iconImage.addEventListener("error", () => {
      icon.textContent = icon.dataset.fallback || "";
      iconImage.remove();
    });

    cardCopy.className = "timeline-card-copy";
    frontTitle.textContent = item.institution;
    frontRole.textContent = item.role;

    icon.appendChild(iconImage);
    cardCopy.appendChild(frontTitle);
    cardCopy.appendChild(frontRole);
    card.appendChild(icon);
    card.appendChild(cardCopy);
    timelineItem.appendChild(connector);
    timelineItem.appendChild(card);
    timelineItems.appendChild(timelineItem);
  });
}

renderTimeline();

if (timeline) {
  let activeTimelineIndex = null;
  let timelineCloseTimer = null;

  function getTimelineCards() {
    return Array.from(timeline.querySelectorAll("[data-timeline-card]"));
  }

  function closeTimelineDetail() {
    const detailPanel = timeline.querySelector("#timeline-detail-panel");

    activeTimelineIndex = null;
    getTimelineCards().forEach((card) => {
      card.classList.remove("is-active");
      card.setAttribute("aria-expanded", "false");
    });

    if (!detailPanel) {
      return;
    }

    detailPanel.classList.remove("is-open", "is-left", "is-right");
    window.clearTimeout(timelineCloseTimer);
    timelineCloseTimer = window.setTimeout(() => {
      detailPanel.setAttribute("hidden", "");
      detailPanel.replaceChildren();
    }, 200);
  }

  function openTimelineDetail(card) {
    const detailPanel = timeline.querySelector("#timeline-detail-panel");
    const timelineIndex = Number(card.dataset.timelineIndex);
    const item = renderedTimelineData[timelineIndex];
    const timelineItem = card.closest(".timeline-item");

    if (!detailPanel || !timelineItem || !item) {
      return;
    }

    window.clearTimeout(timelineCloseTimer);

    if (activeTimelineIndex === timelineIndex) {
      closeTimelineDetail();
      return;
    }

    const panelTitleId = `timeline-detail-title-${timelineIndex}`;
    const panelRoleId = `timeline-detail-role-${timelineIndex}`;
    const closeButton = document.createElement("button");
    const title = document.createElement("h3");
    const role = document.createElement("p");
    const bulletList = document.createElement("ul");

    activeTimelineIndex = timelineIndex;
    getTimelineCards().forEach((timelineCard) => {
      const isActive = timelineCard === card;
      timelineCard.classList.toggle("is-active", isActive);
      timelineCard.setAttribute("aria-expanded", String(isActive));
    });

    closeButton.className = "timeline-detail-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close timeline details");
    closeButton.textContent = "\u00d7";

    title.id = panelTitleId;
    title.textContent = item.institution;

    role.id = panelRoleId;
    role.textContent = item.role;

    item.bullets.forEach((bullet) => {
      const bulletItem = document.createElement("li");
      bulletItem.textContent = bullet;
      bulletList.appendChild(bulletItem);
    });

    detailPanel.replaceChildren(closeButton, title, role, bulletList);
    detailPanel.setAttribute("role", "dialog");
    detailPanel.setAttribute("aria-labelledby", panelTitleId);
    detailPanel.setAttribute("aria-describedby", panelRoleId);
    detailPanel.style.top = `${Math.max(0, timelineItem.offsetTop - 8)}px`;
    detailPanel.classList.toggle("is-left", timelineItem.classList.contains("timeline-item-left"));
    detailPanel.classList.toggle("is-right", timelineItem.classList.contains("timeline-item-right"));
    detailPanel.removeAttribute("hidden");

    window.requestAnimationFrame(() => {
      detailPanel.classList.add("is-open");
    });
  }

  timeline.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    if (target.closest(".timeline-detail-close")) {
      closeTimelineDetail();
      return;
    }

    const card = target.closest("[data-timeline-card]");

    if (!card) {
      return;
    }

    openTimelineDetail(card);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    if (target.closest("#timeline")) {
      return;
    }

    closeTimelineDetail();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    closeTimelineDetail();
  });
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

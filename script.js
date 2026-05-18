const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const skillsShowcase = document.querySelector("#skills-showcase");
const timeline = document.querySelector("#timeline");
const timelineItems = document.querySelector("#timeline-items");
const moreAboutMeTabs = document.querySelector("#more-about-me-tabs");
const moreAboutMePanel = document.querySelector("#more-about-me-panel");

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

const moreAboutMeData = {
  toastmasters: {
    tabLabel: "Toastmasters",
    title: "Toastmasters",
    paragraphs: [
      "I’ve been a Toastmaster for the past five years, and through Toastmasters, I’ve had the opportunity to blend leadership, communication, and public relations in meaningful ways.",
    ],
    bullets: [
      "Managed the club’s Instagram, website, and newsletter, growing the Instagram community by nearly 800 followers while leading the club’s digital communications.",
      "Planned and orchestrated Walk of Fame, the event celebrating the 20th anniversary of Daffodils Toastmasters Club, for 300+ attendees, and emceed events with 600+ guests, supporting high-quality audience experiences at scale.",
      "Conducted Speechcraft, a 7-week crash course in communication and leadership for 40 students aged 15–16, with weekly guest speakers, structured assignments, and regular progress assessments.",
    ],
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/daffodilstmc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      { label: "Website", href: "https://www.daffodilstmc.com/" },
      {
        label: "Newsletter",
        href: "https://www.daffodilstmc.com/_files/ugd/53488a_60bf0f98418e479fa5617f575de35d20.pdf",
      },
      {
        label: "Speechcraft",
        href: "https://www.instagram.com/p/Cw1lEGnP2j4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        label: "Walk of Fame",
        href: "https://www.instagram.com/reel/CuUxa1tx8iS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    image: {
      src: "assets/img/extra/tmi.jpeg",
      alt: "Toastmasters",
      fallback: "Toastmasters image",
    },
  },
  cooking: {
    tabLabel: "Cooking & Baking",
    title: "Cooking & Baking",
    paragraphs: [
      "I enjoy cooking and baking, especially experimenting with vegetarian and vegan recipes, and one of my favorite signature bakes is a ras malai cake inspired by Indian dessert flavors.",
    ],
    bullets: [],
    links: [{ label: "Instagram Food Page", href: "https://www.instagram.com/minis.kitchen14/" }],
    image: {
      src: "assets/img/extra/cake1.jpeg",
      alt: "Cooking & Baking",
      fallback: "Cooking & Baking image",
    },
  },
  reading: {
    tabLabel: "Reading",
    title: "Reading",
    paragraphs: [
      "I love reading, it is one of my favorite ways to unwind, and I’m usually drawn to fiction, sci-fi, mythology, rom-coms, and classics.",
    ],
    bullets: [],
    links: [
      {
        label: "Goodreads Profile",
        href: "https://www.goodreads.com/user/show/200729139-yamini-joshi",
      },
    ],
    image: {
      src: "assets/img/extra/read.jpeg",
      alt: "Reading",
      fallback: "Reading image",
    },
  },
};

const moreAboutMeOrder = ["toastmasters", "cooking", "reading"];
const moreAboutMeDefaultTab = "toastmasters";

moreAboutMeData.toastmasters = {
  tabLabel: "Toastmasters",
  title: "Toastmasters",
  paragraphs: [
    "I've been a Toastmaster for the past five years, and through Toastmasters, I've had the opportunity to blend leadership, communication, and public relations in meaningful ways.",
  ],
  bullets: [
    {
      html: "Managed the club's <a class=\"more-about-inline-link\" href=\"https://www.instagram.com/daffodilstmc?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==\" target=\"_blank\" rel=\"noreferrer\" title=\"Redirect to Instagram page\">Instagram</a>, <a class=\"more-about-inline-link\" href=\"https://www.daffodilstmc.com/\" target=\"_blank\" rel=\"noreferrer\" title=\"Redirect to website\">website</a>, and <a class=\"more-about-inline-link\" href=\"https://www.daffodilstmc.com/_files/ugd/53488a_60bf0f98418e479fa5617f575de35d20.pdf\" target=\"_blank\" rel=\"noreferrer\" title=\"Redirect to newsletter\">newsletter</a>, growing the Instagram community by nearly 800 followers while leading the club's digital communications.",
    },
    {
      html: "Planned and orchestrated <a class=\"more-about-inline-link\" href=\"https://www.instagram.com/reel/CuUxa1tx8iS/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==\" target=\"_blank\" rel=\"noreferrer\" title=\"Redirect to Walk of Fame page\">Walk of Fame</a>, the event celebrating the 20th anniversary of Daffodils Toastmasters Club, for 300+ attendees, and emceed events with 600+ guests, supporting high-quality audience experiences at scale.",
    },
    {
      html: "Conducted <a class=\"more-about-inline-link\" href=\"https://www.instagram.com/p/Cw1lEGnP2j4/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==\" target=\"_blank\" rel=\"noreferrer\" title=\"Redirect to Speechcraft page\">Speechcraft</a>, a 7-week crash course in communication and leadership for 40 students aged 15-16, with weekly guest speakers, structured assignments, and regular progress assessments.",
    },
  ],
  links: [
    {
      label: "Visit Daffodils Toastmasters Club",
      href: "https://www.daffodilstmc.com/",
    },
  ],
  image: {
    src: "assets/img/extra/tmi.jpeg",
    alt: "Toastmasters",
    fallback: "Toastmasters image",
  },
};

moreAboutMeData.cooking.image.src = "assets/img/extra/cake1.jpeg";
moreAboutMeData.reading.paragraphs = [
  "I love reading, it is one of my favorite ways to unwind, and I'm usually drawn to fiction, sci-fi, mythology, rom-coms, and classics.",
];
moreAboutMeData.reading.image.src = "assets/img/extra/read.jpeg";

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

if (moreAboutMeTabs && moreAboutMePanel) {
  let activeMoreAboutMeTab = moreAboutMeDefaultTab;

  function getMoreAboutMeTabButtons() {
    return Array.from(moreAboutMeTabs.querySelectorAll('[role="tab"]'));
  }

  function renderMoreAboutMePanel(tabKey) {
    const tabContent = moreAboutMeData[tabKey];

    if (!tabContent) {
      return;
    }

    const panelArticle = document.createElement("article");
    const copyColumn = document.createElement("div");
    const title = document.createElement("h3");
    const actions = document.createElement("div");
    const media = document.createElement("figure");
    const image = document.createElement("img");
    const imageFallback = document.createElement("div");
    const imageFallbackLabel = document.createElement("span");

    panelArticle.className = "more-about-panel-inner";

    copyColumn.className = "more-about-copy";

    title.textContent = tabContent.title;

    copyColumn.appendChild(title);

    tabContent.paragraphs.forEach((paragraphText) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = paragraphText;
      copyColumn.appendChild(paragraph);
    });

    if (tabContent.bullets.length) {
      const bulletList = document.createElement("ul");
      bulletList.className = "more-about-points";

      tabContent.bullets.forEach((bulletText) => {
        const bulletItem = document.createElement("li");

        if (bulletText && typeof bulletText === "object" && "html" in bulletText) {
          bulletItem.innerHTML = bulletText.html;
        } else {
          bulletItem.textContent = bulletText;
        }

        bulletList.appendChild(bulletItem);
      });

      copyColumn.appendChild(bulletList);
    }

    actions.className = "more-about-actions";

    tabContent.links.forEach((linkData, index) => {
      const link = document.createElement("a");
      link.className = index === 0 ? "more-about-link" : "more-about-link more-about-link-secondary";
      link.href = linkData.href;
      link.textContent = linkData.label;
      link.target = "_blank";
      link.rel = "noreferrer";
      actions.appendChild(link);
    });

    copyColumn.appendChild(actions);

    media.className = "more-about-media";

    image.className = "more-about-image";
    image.src = tabContent.image.src;
    image.alt = tabContent.image.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      media.classList.add("is-fallback");
      image.remove();
    });

    imageFallback.className = "more-about-media-fallback";
    imageFallback.setAttribute("aria-hidden", "true");

    imageFallbackLabel.textContent = tabContent.image.fallback;
    imageFallback.appendChild(imageFallbackLabel);

    media.append(image, imageFallback);
    panelArticle.append(copyColumn, media);
    moreAboutMePanel.replaceChildren(panelArticle);
  }

  function setActiveMoreAboutMeTab(tabKey) {
    if (!moreAboutMeData[tabKey]) {
      return;
    }

    activeMoreAboutMeTab = tabKey;
    moreAboutMePanel.setAttribute("role", "tabpanel");
    moreAboutMePanel.setAttribute("tabindex", "0");
    moreAboutMePanel.setAttribute("aria-labelledby", `more-about-tab-${tabKey}`);
    getMoreAboutMeTabButtons().forEach((button) => {
      const isActive = button.dataset.aboutTab === tabKey;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");
    });
    renderMoreAboutMePanel(tabKey);
  }

  function renderMoreAboutMeTabs() {
    moreAboutMeTabs.innerHTML = "";

    moreAboutMeOrder.forEach((tabKey) => {
      const tabContent = moreAboutMeData[tabKey];
      const button = document.createElement("button");

      button.type = "button";
      button.className = "more-about-tab";
      button.id = `more-about-tab-${tabKey}`;
      button.dataset.aboutTab = tabKey;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "more-about-me-panel");
      button.setAttribute("aria-selected", "false");
      button.setAttribute("tabindex", "-1");
      button.textContent = tabContent.tabLabel;
      button.addEventListener("click", () => {
        setActiveMoreAboutMeTab(tabKey);
      });

      moreAboutMeTabs.appendChild(button);
    });

    setActiveMoreAboutMeTab(activeMoreAboutMeTab);
  }

  moreAboutMeTabs.addEventListener("keydown", (event) => {
    const tabButtons = getMoreAboutMeTabButtons();
    const currentIndex = tabButtons.findIndex((button) => button.dataset.aboutTab === activeMoreAboutMeTab);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabButtons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextButton = tabButtons[nextIndex];

    if (!nextButton) {
      return;
    }

    setActiveMoreAboutMeTab(nextButton.dataset.aboutTab);
    nextButton.focus();
  });

  renderMoreAboutMeTabs();
}

if (timeline) {
  let activeTimelineIndex = null;
  let timelineCloseTimer = null;
  let timelineHideTimer = null;
  let hoveredTimelineCard = null;
  let isTimelineDetailHovered = false;
  const timelineHoverCloseDelay = 140;
  const supportsTimelineHover =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function getTimelineCards() {
    return Array.from(timeline.querySelectorAll("[data-timeline-card]"));
  }

  function clearTimelineCloseTimer() {
    window.clearTimeout(timelineCloseTimer);
    timelineCloseTimer = null;
  }

  function clearTimelineHideTimer() {
    window.clearTimeout(timelineHideTimer);
    timelineHideTimer = null;
  }

  function scheduleTimelineClose() {
    if (!supportsTimelineHover || hoveredTimelineCard || isTimelineDetailHovered) {
      return;
    }

    clearTimelineCloseTimer();
    timelineCloseTimer = window.setTimeout(() => {
      closeTimelineDetail();
    }, timelineHoverCloseDelay);
  }

  function closeTimelineDetail() {
    const detailPanel = timeline.querySelector("#timeline-detail-panel");

    clearTimelineCloseTimer();
    clearTimelineHideTimer();
    activeTimelineIndex = null;
    hoveredTimelineCard = null;
    isTimelineDetailHovered = false;
    getTimelineCards().forEach((card) => {
      card.classList.remove("is-active");
      card.setAttribute("aria-expanded", "false");
    });

    if (!detailPanel) {
      return;
    }

    detailPanel.classList.remove("is-open", "is-left", "is-right");
    timelineHideTimer = window.setTimeout(() => {
      detailPanel.setAttribute("hidden", "");
      detailPanel.replaceChildren();
      timelineHideTimer = null;
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

    clearTimelineCloseTimer();
    clearTimelineHideTimer();

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

  if (supportsTimelineHover) {
    getTimelineCards().forEach((card) => {
      card.addEventListener("mouseenter", () => {
        hoveredTimelineCard = card;
        openTimelineDetail(card);
      });

      card.addEventListener("mouseleave", () => {
        if (hoveredTimelineCard === card) {
          hoveredTimelineCard = null;
        }

        scheduleTimelineClose();
      });
    });

    const detailPanel = timeline.querySelector("#timeline-detail-panel");

    if (detailPanel) {
      detailPanel.addEventListener("mouseenter", () => {
        isTimelineDetailHovered = true;
        clearTimelineCloseTimer();
      });

      detailPanel.addEventListener("mouseleave", () => {
        isTimelineDetailHovered = false;
        scheduleTimelineClose();
      });
    }
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

const sections = Array.from(document.querySelectorAll("main section[id]"));

function setActiveNavSection(activeSectionId) {
  navAnchors.forEach((anchor) => {
    const isActive = anchor.getAttribute("href") === `#${activeSectionId}`;
    anchor.classList.toggle("is-active", isActive);

    if (isActive) {
      anchor.setAttribute("aria-current", "page");
    } else {
      anchor.removeAttribute("aria-current");
    }
  });
}

function getMostRelevantSection() {
  const targetY = window.innerHeight * 0.38;
  let bestSection = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

    if (!isVisible) {
      return;
    }

    const distance =
      rect.top <= targetY && rect.bottom >= targetY
        ? 0
        : Math.min(Math.abs(rect.top - targetY), Math.abs(rect.bottom - targetY));

    if (distance < bestDistance) {
      bestDistance = distance;
      bestSection = section;
    }
  });

  return bestSection;
}

if (sections.length && navAnchors.length) {
  let activeNavFrame = null;

  function updateActiveNavFromViewport() {
    const activeSection = getMostRelevantSection();

    if (!activeSection) {
      return;
    }

    setActiveNavSection(activeSection.id);
  }

  function scheduleActiveNavUpdate() {
    if (activeNavFrame !== null) {
      return;
    }

    activeNavFrame = window.requestAnimationFrame(() => {
      activeNavFrame = null;
      updateActiveNavFromViewport();
    });
  }

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(scheduleActiveNavUpdate, {
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0, 0.15, 0.35, 0.6],
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  window.addEventListener("scroll", scheduleActiveNavUpdate, { passive: true });
  window.addEventListener("resize", scheduleActiveNavUpdate);
  scheduleActiveNavUpdate();
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

// ============================================================================
//  SITE CONTENT — this is the only file you need to edit.
//
//  - Text goes between quotes: "like this". Use \" for a quote inside text.
//  - Every item in a list ends with a comma.
//  - To hide something without deleting it, set  show: false
//  - Save, commit, push — the live site updates within about a minute.
// ============================================================================

window.SITE = {

  // ---------------------------------------------------------------- About you
  name: "Tristan Martin",
  tagline: "Information and Computer Engineer at the University of Cambridge — building ML, DL, and AI models for global challenges.",

  // A short paragraph or two. Each string is its own paragraph.
  about: [
    "Now in my fourth year of engineering at the University of Cambridge, I am specializing in machine learning, deep learning, control, and signal processing. Beyond theory, I am passionate about applying these technologies to address challenges in biology, climate change, and water scarcity.",
  ],

  // Links shown under your name. Delete any you don't want; add more the same way.
  links: [
    { label: "GitHub", url: "https://github.com/TJFM4" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tristan-martin-8b5aaa295/"},
    // { label: "CV", url: "cv.pdf" },   // drop a cv.pdf next to this file
  ],

  // ------------------------------------------------------------- Disclaimer
  // Shown in a box at the very top of the page. Leave it as "" to hide it.
  // [words](https://url) links work here too.
  disclaimer: "While the following represents some of my work, other contributions to Insight Eleven, Ethicronics, Okapi Sports Network, and entrepreneurial pursuits remain private in other GitHub accounts.  ",

  // ------------------------------------------------------------- Highlight
  // One featured project, shown at the top of the page with its full
  // explanation always visible. Set show: false to remove the section.
  highlight: {
    label: "Part IIB Research Project",
    title: "Deep Learning for the Screening of Atrial Fibrillation using Single-Lead ECGs",
    desc: "Fourth-year engineering research project.",
    url: "https://github.com/TJFM4/IIB-PROJECT",   // optional link, e.g. repo, paper or poster
    linkText: "View the repository on GitHub",      // shown under the explanation
    show: true,

    // The explanation underneath. Each string is its own paragraph, and
    // they all sit inside the one [ ... ], separated by commas.
    // Links: write [the words](https://the-url) inside the text.
    explanation: [
      "During this year-long research project, I will investigate today's state-of-the-art deep learning techniques used to automatically evaluate ECG data. The two primary models in my investigation are [ECG-Mamba-V2](https://arxiv.org/abs/2510.13046) and [MGCNet](https://arxiv.org/abs/2601.10202). In particular, I am looking to apply these techniques for screening of large at-risk populations using cheap, single-lead ECG devices like [AliveCor's KardiaMobile](https://kardia.com/kardiamobile).",
      "The use case shapes many model decisions. While ECG-Mamba-V2 and MGCNet have both proven effective at classification using 12-lead data, their performance has not been robustly tested on single-lead data which provides much less information. Additionally, both models are noise-sensitive, posing potential problems when inference must be performed on cheaply collected, single-lead data. Despite these challenges, it is my belief that the most important application of DL to ECG classification lies not in diagnostics but in screening. Diagnostics continue to require a doctor's review of 12-lead data. However, we might be able to alleviate healthcare loads and costs related to stroke if we are able to effectively screen patients for AFib and catch the condition at an early stage.",
      "Screening also demands different model performance than diagnosis. While a false negative (FN) in diagnosis can be deadly, the objective of screening is to maximize true positives (TPs) without generating many false positives (FPs) which crowd the healthcare system. As such, the model's performance matrix differs between screening and diagnostic settings.",
      "In addition to the changes required by the single-lead, screening use case, my research will also investigate improvements to the performance of each model by considering factors such as the frequency range used in the MGCNet's bandpass filter pre-processing step or the augmentation of data using artificial noise. I am grateful to Dr.Punskaya for her supervision during my research and to the SAFER study for providing unprocessed data for raw experimentation.",
    ],
  },

  // ------------------------------------------------------------------ Code
  // Repositories grouped by what they do. Move a repo between groups by
  // cutting and pasting its { ... } line. Rename or reorder groups freely.
  //
  //   repo:  the repository name on github.com/TJFM4 (builds the link)
  //   url:   optional — overrides the link entirely (e.g. a live demo)
  //   show:  false hides it
  //   details: optional longer write-up, one string per paragraph.
  //            Shown under a "More" toggle; leave as "" to hide it.
  //
  //   Only list public repos here — private repos give visitors a 404.
  //   Describe private work under additionalProjects instead.
  repoGroups: [
    {
      title: "Cambridge Engineering",
      blurb: "Projects from the Engineering Tripos.",
      repos: [
        {
          repo: "IDP2025",
          name: "Integrated Design Project 2025",
          desc: "During this project, I led a team of six students in the design, prototyping, and construction of a delivery robot. Our software contained the logic for the robot's navigation, movement, pick-up/drop-off procedures, and troubleshooting. ",
          show: true,
          details: [
            "",
          ],
        },
        {
          repo: "IB-Data-Science-Coursework",
          name: "IB Data Science coursework",
          desc: "Part IB engineering coursework in data science.",
          show: true,
          details: [
            "",
          ],
        },
        {
          repo: "FLOOD-WARNING-SYSTEM---TRISTAN-AND-BARTOSZ",
          name: "Flood Warning System",
          desc: "Part IA computing project: monitoring live river level data and flagging flood risk across the UK (with a classmate).",
          show: true,
          details: [
            "",
          ],
        },
      ],
    },
    {
      title: "Machine learning",
      blurb: "Models built during freeCodeCamp's Machine Learning with Python course.",
      repos: [
        { repo: "Dogs-vs.-Cats", name: "Dogs vs. cats", desc: "Image classifier using a convolutional neural network.", show: true },
        { repo: "Text-Message-Sorter", name: "Text message sorter", desc: "SMS spam / ham classifier.", show: true },
        { repo: "Book-Recommendation-Engine", name: "Book recommendation engine", desc: "K-nearest-neighbours recommendations from book ratings.", show: true },
        { repo: "Regression-Health-Costs-Calculator", name: "Health costs calculator", desc: "Regression model predicting healthcare costs.", show: true },
        { repo: "boilerplate-rock-paper-scissors", name: "Rock paper scissors", desc: "A bot that learns opponents' patterns.", show: true },
      ],
    },
    {
      title: "Data analysis & Visualisation",
      blurb: "Mini Pandas, NumPy and Matplotlib projects.",
      repos: [
        { repo: "boilerplate-sea-level-predictor", name: "Sea level predictor", desc: "Linear regression on historical sea-level data.", show: true },
        { repo: "Mini-Project-Medical-Data-Plots", name: "Medical data visualiser", desc: "Categorical plots and heatmaps from medical exam data.", show: true },
        { repo: "Mini-Project-Data-Visualisation", name: "Data visualisation", desc: "Visualisation project from freeCodeCamp's Data Analysis with Python.", show: true },
        { repo: "Mini-Project-Demographic-Data-Analysis", name: "Demographic data analyser", desc: "Census data analysis with pandas.", show: true },
        { repo: "Mini-Project-NumPy-Statistics-for-3x3-Matrix", name: "Mean, variance & std calculator", desc: "Matrix statistics with NumPy.", show: true },
        { repo: "Scientific-Computing-with-Python-freeCodeCamp-", name: "Scientific computing with Python", desc: "freeCodeCamp certification projects.", show: true },
      ],
    },
  ],

  // -------------------------------------------------- Additional projects
  // Private repos and work that isn't code: societies, events, writing,
  // research, jobs… Any field can be left as "" and it won't appear.
  //   url:  optional link (leave "" for private work)
  //   details: optional longer write-up, one string per paragraph.
  //            Shown under a "More" toggle; leave as "" to hide it.
  additionalProjects: [
    {
      title: "Tastee",
      role: "",
      date: "",
      desc: "Turning taste-based discovery into shoppable recommendations across retailers.",
      url: "",
      show: true,
      details: [
        "",
      ],
    },
    {
      title: "Grain",
      role: "",
      date: "",
      desc: "Real-time, container-level carbon attribution for cloud workloads, built for Pitch in Parliament's GreenOps & Carbon Attribution pillar.",
      url: "",
      show: true,
      details: [
        "",
      ],
    },
    {
      title: "Multilingual financial data extractor",
      role: "",
      date: "",
      desc: "Multilingual financial data extraction with click-to-source provenance, for football-club M&A due diligence.",
      url: "",
      show: true,
      details: [
        "",
      ],
    },
    {
      title: "Aqua Solutions Data Processing Pipeline",
      role: "",
      date: "",
      desc: "Along with a classmate, I developed a data intake and processing pipeline for water quality monitoring in Zimbabwe. The goal was to ultimately be able to run an algorithm on this edge device in order to alert locals of water quality. However, we found that there was insufficient publicly available data to develop such a model and so we focused our efforts  data collection in order to put together a dataset similar to the PhysiioNet datasets which crowd source novel ways of addressing societal challenges.",
      url: "",
      show: true,
      details: [
        "",
      ],
    },
  ],

  footer: "© Tristan Martin",
};

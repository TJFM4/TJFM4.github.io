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
  tagline: "Information and Computer Engineer at the University of Cambridge — building ML, DL, and AI models for today's challenges",

  // A short paragraph or two. Each string is its own paragraph.
  about: [
    "Now in my fourth year of engineering at the University of Cambridge, I am specializing in machine learning, deep learning, control, and signal processing. My passion for these subjects goes beyond theory. I am really interested in how these technologies can help us address challenges in biology, climate change, and water scarcity.",
  ],

  // Links shown under your name. Delete any you don't want; add more the same way.
  links: [
    { label: "GitHub", url: "https://github.com/TJFM4" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
    // { label: "CV", url: "cv.pdf" },   // drop a cv.pdf next to this file
  ],

  // ------------------------------------------------------------------ Code
  // Repositories grouped by what they do. Move a repo between groups by
  // cutting and pasting its { ... } line. Rename or reorder groups freely.
  //
  //   repo:  the repository name on github.com/TJFM4 (builds the link)
  //   url:   optional — overrides the link entirely (e.g. a live demo)
  //   show:  false hides it
  //
  //   Only list public repos here — private repos give visitors a 404.
  //   Describe private work under additionalProjects instead.
  repoGroups: [
    {
      title: "Cambridge Engineering",
      blurb: "Projects from the Engineering Tripos.",
      repos: [
        { repo: "IDP2025", name: "Integrated Design Project 2025", desc: "Team codebase for the Part IB Integrated Design Project.", show: true },
        { repo: "IB-Data-Science-Coursework", name: "IB data science coursework", desc: "Part IB engineering coursework in data science.", show: true },
        { repo: "FLOOD-WARNING-SYSTEM---TRISTAN-AND-BARTOSZ", name: "Flood warning system", desc: "Part IA computing: monitoring river levels and flagging flood risk (with Bartosz).", show: true },
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
  additionalProjects: [
    { title: "Tastee", role: "", date: "", desc: "Turning taste-based discovery into shoppable recommendations across retailers.", url: "", show: true },
    { title: "Grain", role: "", date: "", desc: "Real-time, container-level carbon attribution for cloud workloads, built for Pitch in Parliament's GreenOps & Carbon Attribution pillar.", url: "", show: true },
    { title: "Multilingual financial data extractor", role: "", date: "", desc: "Multilingual financial data extraction with click-to-source provenance, for football-club M&A due diligence.", url: "", show: true },
    { title: "Part IIB project", role: "", date: "", desc: "Fourth-year engineering research project.", url: "", show: true },
    { title: "Field app", role: "", date: "", desc: "", url: "", show: true },
  ],

  footer: "© Tristan Martin",
};

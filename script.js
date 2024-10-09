document.addEventListener("DOMContentLoaded", (event) => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    skill.addEventListener("mouseover", () => {
      skill.style.transform = "scale(1.1) rotate(2deg)";
    });
    skill.addEventListener("mouseout", () => {
      skill.style.transform = "scale(1) rotate(0deg)";
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const toggleButton = document.getElementById("toggleLanguage");
  let isFrench = false; 
  
  const translations = {
    jobTitle: {
      en: "Research Engineer in Computer Science (AI, Combinatorial Optimization, DEV C++)",
      fr: "Ingénieur de Recherche en Informatique (IA, Optimisation Combinatoire, DEV C++)",
    },
    aboutContent: {
      en: "Passionate about combinatorial optimization and artificial intelligence, I am a Research Engineer with a PhD in Computer Science and Signal Processing from École Centrale de Nantes. I have developed expertise in combinatorial optimization, particularly in the design of MIP programs. Always eager to push boundaries, I strive to create innovative and high-performance solutions.",
      fr: "Passionné par l'optimisation combinatoire et l'intelligence artificielle, je suis Ingénieur de Recherche avec un doctorat en informatique et traitement du signal obtenu à l'École Centrale de Nantes. J'ai développé une expertise en optimisation combinatoire, notamment dans la conception de programmes MIP. Toujours prêt à repousser les limites, je m'efforce de créer des solutions innovantes et performantes.",
    },
    navExpertise: {
      en: "Areas of Expertise",
      fr: "Domaines d'Expertise",
    },
    navExperience: {
      en: "Professional Experience",
      fr: "Expérience Professionnelle",
    },
    navProjects: {
      en: "Notable Projects",
      fr: "Projets Notables",
    },
    navEducation: {
      en: "Academic Background",
      fr: "Formation Académique",
    },
    navPublications: {
      en: "Publications",
      fr: "Publications",
    },
    expertiseTitle: {
      en: "Areas of Expertise and Skills",
      fr: "Domaines d'Expertise et Compétences",
    },
    aiTitle: {
      en: "Artificial Intelligence",
      fr: "Intelligence Artificielle",
    },
    optimizationTitle: {
      en: "Combinatorial Optimization",
      fr: "Optimisation Combinatoire",
    },
    devTitle: {
      en: "Development",
      fr: "Développement",
    },
    otherTitle: {
      en: "Other Skills",
      fr: "Autres Compétences",
    },
    experienceTitle: {
      en: "Professional Experience",
      fr: "Expérience Professionnelle",
    },
    expJobTitle1: {
      en: "AI Research Engineer",
      fr: "Ingénieur de Recherche en IA",
    },
    expJobDetails1: {
      en: "SystemX Technological Research Institute, Paris (January 2022 - June 2023)",
      fr: "Institut de Recherche Technologique SystemX, Paris (Janvier 2022 - Juin 2023)",
    },
    expJobTask1_1: {
      en: 'Participated in the "confiance.ai" Project for AI model validation with a MIP approach',
      fr: "Participation au Projet confiance.ai pour une validation des modèles en IA avec une approche MIP",
    },
    expJobTask1_2: {
      en: "Validated and tested algorithms on different datasets and produced reports",
      fr: "Validation et tests des algorithmes sur différents Datasets et production de rapports",
    },
    expJobTitle2: {
      en: "AI Research Engineer",
      fr: "Ingénieur de Recherche en IA",
    },
    expJobDetails2: {
      en: "Computer Science, Information Processing and Systems Laboratory (LITIS), Rouen (October 2020 - November 2021)",
      fr: "Laboratoire d'Informatique, du Traitement de l'Information et des Systèmes (LITIS), Rouen (Octobre 2020 - Novembre 2021)",
    },
    expJobTask2_1: {
      en: "Developed new MIP reformulations for training neural networks",
      fr: "Développement de nouvelles reformulations MIPs pour l'entrainement de réseaux de neurones",
    },
    expJobTask2_2: {
      en: "Validated and tested algorithms on different datasets and produced technical reports",
      fr: "Validation et tests des algorithmes sur différents Datasets et production de rapports techniques",
    },
    expJobTitle3: {
      en: "Research Engineer in Optimization",
      fr: "Ingénieur de Recherche en Optimisation",
    },
    expJobDetails3: {
      en: "Digital Sciences Laboratory of Nantes (LS2N), Nantes (April 2020 - September 2020)",
      fr: "Laboratoire des Sciences du Numérique de Nantes (LS2N), Nantes (Avril 2020 - Septembre 2020)",
    },
    expJobTask3_1: {
      en: "Developed a C++ MIP solver for sparse optimization",
      fr: "Développement en C++ d'un solveur MIP pour l'optimisation parcimonieuse",
    },
    expJobTask3_2: {
      en: "Validated and tested algorithms and produced technical reports",
      fr: "Validation et tests des algorithmes et production de rapports techniques",
    },
    expJobTitle4: {
      en: "Teaching Assistant in Computer Science",
      fr: "Chargé de TD/TP en Informatique",
    },
    expJobDetails4: {
      en: "École Centrale de Nantes, Nantes (April 2016 - June 2019)",
      fr: "École Centrale de Nantes, Nantes (Avril 2016 - Juin 2019)",
    },
    expJobTask4_1: {
      en: "Prepared and managed practical sessions mainly in C++ and Information Systems",
      fr: "Préparation et gestion des séances de TD/TP principalement en C++ et Système d'Information",
    },
    expJobTask4_2: {
      en: "Participated in the correction of written and oral exams",
      fr: "Participation à la correction des examens écrits et oraux",
    },
    expJobTask4_3: {
      en: "Supervised and mentored students",
      fr: "Encadrement et suivi des étudiants",
    },
    projectsTitle: {
      en: "Notable Projects",
      fr: "Projets Notables",
    },
    projectTitle1: {
      en: "MIMOSA Project",
      fr: "Projet MIMOSA",
    },
    projectDetails1: {
      en: "Participated in the MIMOSA project, a research initiative funded by Agence Nationale de la Recherche from 2017 to 2021. The project focuses on developing new optimization strategies based on mixed integer programming methods to solve difficult L0-norm-based sparse approximation problems in signal processing applications.",
      fr: "Participation au projet MIMOSA, une initiative de recherche financée par l'Agence Nationale de la Recherche de 2017 à 2021. Le projet se concentre sur le développement de nouvelles stratégies d'optimisation basées sur des méthodes de programmation en nombres entiers mixtes pour résoudre des problèmes difficiles d'approximation parcimonieuse basés sur la norme L0 dans les applications de traitement du signal.",
    },
    projectTask1_1: {
      en: "Developed MIP-based optimization strategies specific to sparse approximation, improving computational efficiency for high-dimensional problems",
      fr: "Développement de stratégies d'optimisation basées sur MIP spécifiques à l'approximation parcimonieuse, améliorant l'efficacité computationnelle pour les problèmes de haute dimension",
    },
    projectTask1_2: {
      en: "Applied methods to real signal processing problems, focusing on sparse deconvolution, sparse unmixing for hyperspectral imaging, and sparse spectral analysis of time series",
      fr: "Application des méthodes à des problèmes réels de traitement du signal, en se concentrant sur la déconvolution parcimonieuse, le démélange parcimonieux pour l'imagerie hyperspectrale et l'analyse spectrale parcimonieuse des séries temporelles",
    },
    projectTask1_3: {
      en: "Contributed to the delivery of efficient optimization codes to the scientific community and integrated solutions into off-the-shelf MIP software",
      fr: "Contribution à la livraison de codes d'optimisation efficaces à la communauté scientifique et intégration de solutions dans des logiciels MIP prêts à l'emploi",
    },
    projectLink1_1: {
      en: "Project Website",
      fr: "Site Web du Projet",
    },
    projectLink1_2: {
      en: "GitHub Repository",
      fr: "Dépôt GitHub",
    },
    projectLink1_3: {
      en: "Documentation",
      fr: "Documentation",
    },
    projectTitle2: {
      en: "Confiance.ai Project",
      fr: "Projet Confiance.ai",
    },
    projectDetails2: {
      en: "Participated in Confiance.ai, the French technological research programme on trustworthy AI. The project aims to help industrials integrate trustworthy AI in their critical systems by developing an environment with methods and tools that can be integrated into any engineering workshop.",
      fr: "Participation à Confiance.ai, le programme français de recherche technologique sur l'IA de confiance. Le projet vise à aider les industriels à intégrer l'IA de confiance dans leurs systèmes critiques en développant un environnement avec des méthodes et des outils pouvant être intégrés dans tout atelier d'ingénierie.",
    },
    projectTask2_1: {
      en: "Contributed to lifting barriers associated with the industrialization of AI, focusing on building AI components with controlled levels of trust",
      fr: "Contribution à la levée des barrières associées à l'industrialisation de l'IA, en se concentrant sur la construction de composants IA avec des niveaux de confiance contrôlés",
    },
    projectTask2_2: {
      en: "Worked on developing trustworthy learning techniques and interactions generating trust between users and AI-based systems",
      fr: "Travail sur le développement de techniques d'apprentissage de confiance et d'interactions générant la confiance entre les utilisateurs et les systèmes basés sur l'IA",
    },
    projectTask2_3: {
      en: "Helped create a modular and interoperable environment of trust, offering methods and tools for partner engineering workshops",
      fr: "Aide à la création d'un environnement de confiance modulaire et interopérable, offrant des méthodes et des outils pour les ateliers d'ingénierie partenaires",
    },
    projectTask2_4: {
      en: "Assisted in developing design guides to lead users through each step of creating systems based on trustworthy AI",
      fr: "Assistance au développement de guides de conception pour guider les utilisateurs à travers chaque étape de la création de systèmes basés sur l'IA de confiance",
    },
    projectLink2_1: {
      en: "Project Website",
      fr: "Site Web du Projet",
    },
    projectTitle3: {
      en: "RAIMO: Robust AI Models",
      fr: "RAIMO : Modèles d'IA Robustes",
    },
    projectDetails3: {
      en: "Developed novel approaches to improve the robustness of neural networks against adversarial attacks and environmental perturbations. This project aims to enhance the reliability and safety of AI systems in critical applications.",
      fr: "Développement de nouvelles approches pour améliorer la robustesse des réseaux de neurones contre les attaques adverses et les perturbations environnementales. Ce projet vise à améliorer la fiabilité et la sécurité des systèmes d'IA dans les applications critiques.",
    },
    projectTask3_1: {
      en: "Implemented adversarial training techniques using PyTorch and developed new MIP reformulations for training robust neural networks",
      fr: "Implémentation de techniques d'entraînement adverses en utilisant PyTorch et développement de nouvelles reformulations MIP pour l'entraînement de réseaux de neurones robustes",
    },
    projectTask3_2: {
      en: "Developed a MIP-based verification method to formally prove network robustness against L-infinity norm bounded perturbations",
      fr: "Développement d'une méthode de vérification basée sur MIP pour prouver formellement la robustesse du réseau contre les perturbations bornées par la norme L-infini",
    },
    projectTask3_3: {
      en: "Conducted extensive testing on various datasets, including MNIST and CIFAR-10, to validate the robustness improvements",
      fr: "Réalisation de tests approfondis sur divers jeux de données, notamment MNIST et CIFAR-10, pour valider les améliorations de robustesse",
    },
    projectTask3_4: {
      en: "Collaborated with academic and industry partners to apply the developed techniques to real-world scenarios",
      fr: "Collaboration avec des partenaires académiques et industriels pour appliquer les techniques développées à des scénarios réels",
    },
    educationTitle: {
      en: "Academic Background",
      fr: "Formation Académique",
    },
    eduDegree1: {
      en: "PhD in Computer Science and Signal Processing",
      fr: "Doctorat en Informatique et Traitement du Signal",
    },
    eduDetails1: {
      en: "École Centrale de Nantes, France (2016 - 2020)",
      fr: "École Centrale de Nantes, France (2016 - 2020)",
    },
    eduDegree2: {
      en: "Master in Computer Science and Automated Reasoning Systems",
      fr: "Master en Informatique et Systèmes de Raisonnement Automatique",
    },
    eduDetails2: {
      en: "Faculty of Sciences of Monastir, Tunisia (2014 - 2016)",
      fr: "Faculté des Sciences de Monastir, Tunisie (2014 - 2016)",
    },
    eduDegree3: {
      en: "Bachelor of Science in Computer Science",
      fr: "Licence Fondamentale en Science de l'Informatique",
    },
    eduDetails3: {
      en: "Higher Institute of Computer Science and Mathematics Monastir, Tunisia (2011 - 2014)",
      fr: "Institut Supérieur d'Informatique et de Mathématiques Monastir, Tunisie (2011 - 2014)",
    },
    linkedinLink: {
      en: "ramzi-benmhenni",
      fr: "ramzi-benmhenni",
    },
    phoneNumber: {
      en: "+216 98 765 432",
      fr: "+216 98 765 432",
    },
    footerText: {
      en: "© 2023 Ramzi BEN MHENNI. All rights reserved.",
      fr: "© 2023 Ramzi BEN MHENNI. Tous droits réservés.",
    },
    publicationsTitle: {
      en: "Publications",
      fr: "Publications",
    },
    thesisTitle: {
      en: "Thesis",
      fr: "Thèse",
    },
    journalArticleTitle: {
      en: "Journal Article (Submitted)",
      fr: "Article de journal (soumis)",
    },
    conferenceTitle: {
      en: "Conference Proceedings with Peer Review",
      fr: "Actes de conférences avec comité de lecture",
    },
    internationalPresentationsTitle: {
      en: "Presentations at International Conferences",
      fr: "Présentations dans des conférences internationales",
    },
    nationalPresentationsTitle: {
      en: "Presentations at National Conferences",
      fr: "Présentations dans des conférences nationales",
    },
  };

  toggleButton.addEventListener("click", () => {
    isFrench = !isFrench;
    const lang = isFrench ? "fr" : "en";
    toggleButton.textContent = isFrench ? "English" : "Français";

    Object.keys(translations).forEach((key) => {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = translations[key][lang];
      }
    });
    
    // Update phone number
    const phoneNumberElement = document.querySelector(".contact-items p:nth-child(2)");
    phoneNumberElement.innerHTML = `<i class="fas fa-phone"></i> ${translations.phoneNumber[lang]}`;

  });

  const printButton = document.getElementById("printCV");
  printButton.addEventListener("click", () => {
    window.print();
  });
});

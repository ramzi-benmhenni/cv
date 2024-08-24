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
      en: "I obtained my PhD in Computer Science and Signal Processing from École Centrale de Nantes, where I gained solid academic experience in mathematical modeling and optimization.  Throughout my professional career, I have developed expertise in combinatorial optimization and artificial intelligence, particularly in the design of MIP solvers for ultrasonic non-destructive testing and spectral classification.  My recent projects have focused on improving the robustness of neural networks using MIPs. I am currently looking for a new professional opportunity that would allow me to use my skills and experience.",
      fr: "J'ai obtenu mon doctorat en Informatique et Traitement du signal à l'École Centrale de Nantes, où j'ai acquis une solide expérience académique en modélisation mathématique et en optimisation.  Au cours de ma carrière professionnelle, j'ai développé une expertise en optimisation combinatoire et en intelligence artificielle, notamment  dans la conception de solveurs MIP pour le contrôle non destructif par ultrasons et la classification spectrale.  Mes derniers projets ont porté sur l'amélioration de la robustesse des réseaux de neurones à l'aide des MIPs. Je suis actuellement à la recherche d'une nouvelle opportunité professionnelle qui me permettrait de mettre à profit mes compétences et mon expérience.",
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
      en: "AI-Powered Predictive Maintenance System",
      fr: "Système de Maintenance Prédictive Basé sur l'IA",
    },
    projectDetails1: {
      en: "Led the development of a machine learning model to predict equipment failures in industrial settings, reducing downtime by 30% and maintenance costs by 25%.",
      fr: "Dirigé le développement d'un modèle d'apprentissage automatique pour prédire les pannes d'équipement dans des environnements industriels, réduisant les temps d'arrêt de 30% et les coûts de maintenance de 25%.",
    },
    projectTask1_1: {
      en: "Implemented advanced neural network architectures using TensorFlow and Keras",
      fr: "Implémentation d'architectures de réseaux de neurones avancées utilisant TensorFlow et Keras",
    },
    projectTask1_2: {
      en: "Integrated the model with IoT sensors for real-time data processing",
      fr: "Intégration du modèle avec des capteurs IoT pour le traitement des données en temps réel",
    },
    projectTask1_3: {
      en: "Developed a user-friendly dashboard for maintenance teams using React and D3.js",
      fr: "Développement d'un tableau de bord convivial pour les équipes de maintenance utilisant React et D3.js",
    },
    projectTitle2: {
      en: "Optimized Supply Chain Management Platform",
      fr: "Plateforme Optimisée de Gestion de la Chaîne d'Approvisionnement",
    },
    projectDetails2: {
      en: "Designed and implemented a combinatorial optimization algorithm to streamline inventory management and distribution logistics, resulting in a 15% reduction in operational costs.",
      fr: "Conception et implémentation d'un algorithme d'optimisation combinatoire pour rationaliser la gestion des stocks et la logistique de distribution, entraînant une réduction de 15% des coûts opérationnels.",
    },
    projectTask2_1: {
      en: "Developed a custom MIP solver using C++ for large-scale optimization problems",
      fr: "Développement d'un solveur MIP personnalisé en C++ pour des problèmes d'optimisation à grande échelle",
    },
    projectTask2_2: {
      en: "Integrated the solver with existing ERP systems using RESTful APIs",
      fr: "Intégration du solveur avec les systèmes ERP existants en utilisant des API RESTful",
    },
    projectTask2_3: {
      en: "Created a simulation environment to test and validate optimization strategies",
      fr: "Création d'un environnement de simulation pour tester et valider les stratégies d'optimisation",
    },
    projectTitle3: {
      en: "Robust Neural Network for Autonomous Vehicles",
      fr: "Réseau de Neurones Robuste pour Véhicules Autonomes",
    },
    projectDetails3: {
      en: "Developed a novel approach to improve the robustness of neural networks used in autonomous driving systems against adversarial attacks and environmental perturbations.",
      fr: "Développement d'une nouvelle approche pour améliorer la robustesse des réseaux de neurones utilisés dans les systèmes de conduite autonome contre les attaques adverses et les perturbations environnementales.",
    },
    projectTask3_1: {
      en: "Implemented adversarial training techniques using PyTorch",
      fr: "Implémentation de techniques d'entraînement adverses en utilisant PyTorch",
    },
    projectTask3_2: {
      en: "Developed a MIP-based verification method to formally prove network robustness",
      fr: "Développement d'une méthode de vérification basée sur MIP pour prouver formellement la robustesse du réseau",
    },
    projectTask3_3: {
      en: "Conducted extensive testing in simulated and real-world environments",
      fr: "Réalisation de tests approfondis dans des environnements simulés et réels",
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

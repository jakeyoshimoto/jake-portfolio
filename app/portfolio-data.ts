export type Project = {
  slug: string;
  title: string;
  summary: string;
  cardSummary: string;
  technicalDetails: string[];
  challenges: string[];
  details: string[];
  technologies: string[];
  focus: string;
  role: string;
  year: string;
  category: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  technologies?: string[];
  highlights: string[];
};

export const siteProfile = {
  name: "Jake Yoshimoto",
  title: "Robotics Engineering Student",
  degree: "Robotics Engineering B.S.",
  school: "University of California, Santa Cruz",
  minor: "Electrical Engineering Minor",
  graduation: "June 2026",
  gpa: "3.7 GPA",
  intro:
    "Hi, I'm Jake Yoshimoto, a Robotics Engineering student at UC Santa Cruz with a minor in Electrical Engineering. I'm interested in embedded systems, controls, robotics, and intelligent engineering systems, and I enjoy building projects that connect hardware, software, and real-world testing.",
  about:
    "I'm a Robotics Engineering student who enjoys building systems that sit at the boundary between hardware and software. My background includes robotics, controls, embedded development, CAD, prototyping, and technical problem-solving across both coursework and team-based engineering environments.",
  interests: [
    "Robotics",
    "Embedded systems",
    "Controls",
    "Mechatronics",
    "Intelligent systems",
  ],
};

export const featuredProjects: Project[] = [
  {
    slug: "on-chip-ecg-classification",
    title: "On-Chip ECG Classification System",
    summary:
      "A senior capstone ECG classification pipeline designed for wearable deployment under strict power, latency, and memory constraints.",
    cardSummary:
      "End-to-end ECG pipeline combining signal processing and PyTorch model development, with emphasis on deployability rather than accuracy alone.",
    technicalDetails: [
      "Signal-processing pipeline included filtering, segmentation, and feature extraction.",
      "Model development in PyTorch with GPU acceleration for training and evaluation.",
      "Compared conventional neural networks with spiking neural network approaches.",
      "Evaluated time-series classification performance with confusion matrices and classification metrics.",
      "Framed around on-device inference rather than cloud processing.",
    ],
    challenges: [
      "Working with noisy biological signals and building a preprocessing pipeline that preserved useful structure.",
      "Balancing model complexity against realistic hardware limits on memory, latency, and power.",
      "Comparing architectures in a way that reflected deployment constraints instead of isolated benchmark accuracy.",
      "Building an evaluation workflow that stayed meaningful across multiple model variants.",
    ],
    details: [
      "Built the full ECG pipeline from raw signal processing through inference, including filtering, segmentation, feature extraction, model training, and evaluation.",
      "Developed and evaluated multiple learning approaches, including conventional neural networks and spiking neural networks, to study which methods were most promising for low-power wearable hardware.",
      "Used PyTorch with GPU acceleration to train and compare models while tracking confusion matrices, classification metrics, and system-level tradeoffs.",
      "Focused the project on what could realistically run on embedded hardware, balancing model quality against power, memory, and latency constraints.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "GPU training",
      "Signal processing",
      "Machine learning",
      "Spiking neural networks",
      "Time-series classification",
    ],
    focus: "Signal processing, machine learning, and deployment-aware engineering for resource-constrained wearables.",
    role: "Built the processing pipeline, developed model variants, explored SNN inference, and evaluated deployability tradeoffs.",
    year: "2025 - 2026",
    category: "Capstone / ML",
  },
  {
    slug: "flexstrong-grip-assistance",
    title: "FlexStrong Closed-Loop Grip Assistance System",
    summary:
      "A wearable assistive system that uses electrical muscle stimulation, sensor feedback, and embedded control logic to augment grip strength in real time.",
    cardSummary:
      "STM32-based wearable control system using flex sensors, FSR feedback, and a digitally controlled TENS unit to adjust grip assistance in real time.",
    technicalDetails: [
      "STM32 microcontroller programmed in embedded C.",
      "Flex sensors used for grip intent detection and FSRs used for force feedback.",
      "TENS output controlled through an X9C103S digital potentiometer.",
      "OLED display used for system state and live feedback.",
      "Closed-loop update rate of roughly 50 Hz.",
    ],
    challenges: [
      "Filtering noisy sensor readings and choosing grip detection thresholds that were reliable in practice.",
      "Designing PI-style control that stayed responsive without overshooting or oscillating.",
      "Handling quantized actuator control through integer potentiometer steps.",
      "Building in safe shutdown and controlled ramp-up behavior for a system that directly affects the user.",
    ],
    details: [
      "Built the main embedded program and state machine around the sequence IDLE, PULSE, CONTROL, COOLDOWN, and STOP so the system could manage stimulation behavior explicitly instead of relying on ad hoc logic.",
      "Implemented flex sensor processing, grip detection logic, and FSR-based force feedback to compare measured force against a target and adjust stimulation intensity in real time.",
      "Integrated the digital potentiometer, display output, and safety-critical behavior including emergency shutoff, controlled ramp-up, and default intensity limits.",
      "Used a PI-style control structure to explore the tradeoff between responsiveness, stability, and user comfort in a closed-loop assistive device.",
    ],
    technologies: [
      "Embedded C",
      "STM32",
      "Flex sensors",
      "FSRs",
      "TENS control",
      "X9C103S",
      "OLED",
      "Feedback control",
      "State machines",
    ],
    focus: "Embedded control, sensing, safety behavior, and hardware/software integration in a human-facing system.",
    role: "Built the embedded software, grip detection logic, PI-style control structure, and sensor / actuator integration.",
    year: "2026",
    category: "Embedded Control",
  },
  {
    slug: "walle-autonomous-sorting-robot",
    title: "WALL-E Autonomous Sorting Robot",
    summary:
      "An autonomous sorting robot that combines sensing, motor control, and hierarchical embedded logic to perform repeatable physical tasks.",
    cardSummary:
      "Embedded robot using IR sensing, color classification, DC motor control, and a hierarchical state machine to detect and sort objects.",
    technicalDetails: [
      "Microcontroller-based control system implemented in C.",
      "IR sensors used for line detection and color sensors used for object classification.",
      "DC motors driven through H-bridge motor drivers.",
      "Behavior coordinated through a hierarchical state machine.",
      "Software structured into sensing, logic, and actuation modules.",
    ],
    challenges: [
      "Designing state transitions that stayed readable while handling more complex behavior.",
      "Integrating multiple sensors into one decision-making flow without making behavior brittle.",
      "Maintaining repeatable motion and sorting performance under changing conditions.",
      "Debugging embedded behavior with limited runtime visibility.",
    ],
    details: [
      "Implemented the hierarchical state machine in C and used it to coordinate navigation, sensing, object handling, and sorting behavior.",
      "Structured the software into modular sensing, logic, and actuation layers so individual subsystems could be developed and debugged more cleanly.",
      "Integrated IR sensors, color sensors, motor control, and closed-loop behavior into a system that could perform repeatable autonomous tasks rather than isolated demos.",
      "Worked heavily on system-level debugging, tuning, and behavior refinement to make the robot more reliable in real use.",
    ],
    technologies: [
      "C",
      "Hierarchical state machines",
      "IR sensors",
      "Color sensors",
      "Motor control",
      "H-bridge drivers",
      "System integration",
    ],
    focus: "Robotics system integration, embedded architecture, and behavior control.",
    role: "Implemented HSM logic, integrated sensors with control logic, and worked on system-level debugging and behavior design.",
    year: "2025",
    category: "Mechatronics",
  },
  {
    slug: "booz-allen-summer-games-project",
    title: "Booz Allen Summer Games Project",
    summary:
      "A simulation and decision-support tool for naval minefield planning that modeled operational scenarios and evaluated cost-versus-effectiveness tradeoffs.",
    cardSummary:
      "Full-stack simulation prototype using React, TypeScript, Leaflet, and Redux to study mine placement strategies through interactive scenario analysis.",
    technicalDetails: [
      "Frontend built with React and TypeScript.",
      "Map-based visualization implemented with Leaflet.",
      "State managed with Redux.",
      "Simulation logic modeled mine placement, ship movement, triggering, and outcomes.",
      "Evaluation layer compared cost, coverage, and effectiveness across scenarios.",
    ],
    challenges: [
      "Translating a real-world defense problem into a simplified but meaningful simulation model.",
      "Managing complex application state and interactions across simulation, UI, and map behavior.",
      "Balancing technical depth with clarity and usability in the decision-support workflow.",
      "Communicating model assumptions and results clearly to a mixed audience.",
    ],
    details: [
      "Worked in a 10-week accelerator-style internship to build a prototype tool for modeling minefield placement strategies and comparing operational tradeoffs.",
      "Contributed to simulation behavior and system logic for ships, mines, interactions, and scenario outcomes under different assumptions and constraints.",
      "Helped implement frontend features, map-based interaction, and evaluation logic so users could inspect cost, coverage, and effectiveness together.",
      "Participated in scenario testing, validation, and the final presentation of system capabilities to Booz Allen leadership.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Leaflet",
      "Redux",
      "Simulation",
      "Scenario analysis",
      "Technical communication",
      "Decision support",
    ],
    focus: "Simulation, systems modeling, tradeoff analysis, and full-stack technical tooling.",
    role: "Worked on simulation logic, frontend behavior, scenario testing, and evaluation of operational tradeoffs.",
    year: "2025",
    category: "Internship Project",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "UC Santa Cruz",
    role: "Mechatronics Tutor",
    location: "Santa Cruz, CA",
    dates: "2026 - Present",
    summary:
      "Support students in a graduate-level mechatronics course as they build embedded robotic systems and debug hardware/software integration issues.",
    technologies: [
      "Embedded C",
      "Microcontrollers",
      "Sensors",
      "Actuators",
      "State machines",
      "Control systems",
    ],
    highlights: [
      "Help students debug embedded systems, state-machine behavior, and sensor / actuator integration during lab work.",
      "Review system architecture decisions, verify milestone behavior, and evaluate technical work for correctness.",
      "Strengthened technical communication by explaining controls, sensing, and integration issues across many different implementations.",
    ],
  },
  {
    company: "Booz Allen Hamilton",
    role: "Summer Games Intern",
    location: "Honolulu, HI",
    dates: "Jun 2025 - Aug 2025",
    summary:
      "Worked on a defense-focused simulation and decision-support prototype for naval minefield planning during a 10-week accelerator-style internship.",
    technologies: ["React", "TypeScript", "Leaflet", "Redux", "Simulation"],
    highlights: [
      "Implemented simulation behavior for ships, mines, and interactions across different operational scenarios and constraints.",
      "Contributed to frontend features, user interaction, and scenario testing in a React and TypeScript application with map-based visualization.",
      "Helped evaluate tradeoffs between cost, coverage, and effectiveness, then presented the final prototype to Booz Allen leadership.",
    ],
  },
  {
    company: "Apple",
    role: "Engineering Technology Student",
    location: "Cupertino, CA",
    dates: "Jul 2021 - Aug 2021",
    summary:
      "Selected as 1 of 25 students to design and build an electromechanical system in a small, interdisciplinary team guided by Apple engineers.",
    technologies: ["Fusion 360", "Mechanical design", "Prototyping", "Integration"],
    highlights: [
      "Led CAD development in Fusion 360 and iterated mechanical components based on testing and feedback.",
      "Supported assembly, subsystem integration, and refinement of the final electromechanical build.",
      "Collaborated with electrical and software teammates and presented the finished system to Apple engineers and executives.",
    ],
  },
  {
    company: "FIRST Tech Challenge",
    role: "CAD / Programming Lead",
    location: "Honolulu, HI",
    dates: "2017 - 2022",
    summary:
      "Led design and programming work for a competitive robotics team, contributing across mechanical design, controls, and full-system integration.",
    technologies: ["CAD", "Embedded robotics", "Sensors", "Actuators", "Controls"],
    highlights: [
      "Helped design, build, and deploy competition robots under strict performance and reliability constraints.",
      "Worked across CAD, fabrication, programming, and control logic while helping shape technical architecture decisions.",
      "Contributed to 3 Hawaii State Championship wins and mentored teammates through design and programming work.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Embedded / Controls",
    items: [
      "Embedded C/C++",
      "Microcontrollers",
      "Sensors and actuators",
      "Feedback control",
      "State machines",
      "System integration",
      "Signal interfacing",
    ],
  },
  {
    title: "Software / Analysis",
    items: [
      "Python",
      "MATLAB",
      "React, TypeScript / JavaScript",
      "Signal processing",
      "Machine learning",
      "Simulation and modeling",
      "Web-based technical tools",
    ],
  },
  {
    title: "CAD / Prototyping",
    items: [
      "SolidWorks",
      "Fusion 360",
      "AutoCAD",
      "Onshape",
      "Mechanical design",
      "Fabrication support",
      "Prototyping and testing",
    ],
  },
];

export const contactPlaceholders = [
  {
    label: "Email",
    value: "jakeyoshimoto@gmail.com",
    href: "mailto:jakeyoshimoto@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jake-yoshimoto-a9a698239",
    href: "https://www.linkedin.com/in/jake-yoshimoto-a9a698239/",
  },
];

export const resumePdfPath = "/Jake_Yoshimoto_CV.pdf";

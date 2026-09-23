import type { Project } from '../types';

export const projects: Project[] = [
  // ==========================================
  // LAYER 1: FLAGSHIP PROJECTS (Deep Case Studies)
  // ==========================================
  {
    id: 'studypilot',
    number: '01',
    title: 'StudyPilot',
    subtitle: 'AI Study Assistant',
    category: 'AI  |  RAG  |  Full-Stack Development',
    tagline: 'Production-ready RAG platform enabling students to upload course literature, chat with contextual page citations, and auto-generate study assets.',
    description:
      'A comprehensive AI-powered study platform that eliminates cognitive overload. Users upload textbooks or course lecture PDFs and interact through semantic Retrieval-Augmented Generation (RAG) with precise page citations, accompanied by auto-generated flashcards, timed quizzes, chapter summaries, and revision planners.',
    layer: 1,
    tags: ['FastAPI', 'React', 'Python', 'RAG', 'SQLite', 'Google Gemini API', 'pypdf', 'Tailwind CSS'],
    filterCategories: ['AI / ML', 'Full Stack'],
    github: 'https://github.com/Frost730/StudyPilot',
    live: null,
    featured: true,
    keyFeatures: [
      'Document Ingestion: Multi-page PDF text extraction and semantic chunking using pure Python pypdf.',
      'Contextual RAG Chat: Document-aware conversational assistant citing exact source page references.',
      'Auto-Generated Flashcards: Algorithmic extraction of high-yield concepts into interactive review decks.',
      'Countdown Practice Quizzes: Auto-compiled multiple-choice tests with scoring and rationale feedback.',
      'Chapter Summaries & Study Guides: Instant synthesis of complex topics into bulleted review notes.',
      'Zero-Prerequisites SQLite Architecture: Local file-based database requiring no external database servers.',
      'Graceful Local Fallback: Automatic offline heuristic mode when no external LLM API key is supplied.'
    ],
    architecture: {
      overview: 'Modular full-stack decoupled architecture designed for zero configuration and local persistence.',
      flow: [
        'PDF / Study Material',
        'Document Processing (pypdf)',
        'Chunking & Semantic Retrieval',
        'RAG Pipeline (Google Gemini / Local Engine)',
        'Synthesized Response & Page Citations',
        'Study Tools (Flashcards, Quizzes, Planner)'
      ]
    },
    details: {
      problem:
        'Students often struggle with hundreds of pages of textbooks and lecture slides, spending excessive time finding key concepts, manually creating flashcards, and testing their comprehension.',
      solution:
        'StudyPilot integrates automated document parsing with Retrieval-Augmented Generation to create an interactive co-pilot. It pairs verified page citations with on-demand learning tools to accelerate retention.',
      implementation: [
        'FastAPI backend with structured Pydantic schemas validating upload and chat streams.',
        'SQLAlchemy ORM orchestrating local SQLite persistence for study history, decks, and quiz attempts.',
        'Dynamic semantic chunking splitting documents into contextual paragraphs while retaining page numbers.',
        'Responsive React frontend with markdown rendering, interactive flashcard carousel, and quiz timer.'
      ],
      technicalHighlights: [
        'Pure Python PDF parsing eliminating heavyweight native C++ runtime dependencies.',
        'Dual-mode inference supporting both Google Gemini API and offline heuristic fallbacks.',
        'Deterministic session storage allowing students to resume their study decks across sessions.'
      ]
    }
  },
  {
    id: 'traffic-sign-detection',
    number: '02',
    title: 'Traffic Sign Detection Using YOLOv8n',
    subtitle: 'Real-Time Computer Vision System',
    category: 'Computer Vision  |  Deep Learning  |  Object Detection',
    tagline: 'High-speed object detection system achieving 0.976 mAP@0.5 at ~118 FPS on 5,011 images across 21 traffic sign categories.',
    description:
      'An end-to-end computer vision pipeline developed using Ultralytics YOLOv8n. Trained on 5,011 images spanning 21 road sign classes with GPU acceleration, delivering state-of-the-art precision, recall, and real-time inference deployed via an interactive Streamlit application.',
    layer: 1,
    tags: ['Python', 'PyTorch', 'Ultralytics YOLOv8', 'OpenCV', 'NumPy', 'Streamlit', 'Kaggle GPU'],
    filterCategories: ['AI / ML', 'Computer Vision'],
    github: 'https://github.com/Frost730/traffic-sign-detection',
    live: null,
    featured: true,
    metrics: [
      { label: 'Precision', value: '0.952', description: 'Fraction of detected road signs that were true positives.' },
      { label: 'Recall', value: '0.951', description: 'Fraction of ground-truth road signs successfully captured.' },
      { label: 'mAP@0.5', value: '0.976', description: 'Mean Average Precision evaluated across 21 sign classes at 0.5 IoU.' },
      { label: 'Inference Speed', value: '~118 FPS', description: 'Real-time prediction throughput on GPU acceleration.' }
    ],
    keyFeatures: [
      '21 Road Sign Classes: Identifies speed limits, warnings, stop signs, pedestrian crossings, and turns.',
      'Rigorous Data Preprocessing: Image resizing, normalization, and bounding-box coordinate validation.',
      'Data Augmentation: Robustness against lighting shifts, rotational variances, and partial occlusions.',
      'Ultralytics YOLOv8n Backbone: Lightweight neural architecture engineered for edge and real-time constraints.',
      'Streamlit Deployment: Interactive web interface supporting real-time image uploads and confidence inspection.',
      'Detailed Class-Wise Analytics: Comprehensive evaluation matrix monitoring precision/recall curves.'
    ],
    architecture: {
      overview: 'Structured computer vision pipeline from raw annotated imagery to real-time interactive inference.',
      flow: [
        'Roboflow RoadSign Dataset (5,011 images, 21 classes)',
        'Data Preprocessing & Bounding Box Normalization',
        'Data Augmentation (Rotations, Brightness, Scaling)',
        'YOLOv8n Training with PyTorch (Kaggle GPU Acceleration)',
        'Model Validation & Metric Computation (mAP, Precision, Recall)',
        'Real-Time Inference Engine (~118 FPS)',
        'Interactive Streamlit Web Deployment'
      ]
    },
    details: {
      problem:
        'Autonomous driving systems and driver-assistance platforms require low-latency, highly accurate road sign detection across varying weather conditions, lighting angles, and road clutter.',
      solution:
        'Built a streamlined YOLOv8n neural network optimized for high frames-per-second inference while retaining 0.976 mAP@0.5, ensuring fast and dependable visual detection.',
      implementation: [
        'Leveraged PyTorch and Ultralytics YOLOv8 for automated anchor-free detection and multi-scale feature aggregation.',
        'Engineered augmentation transforms to counter environmental noise and motion blur.',
        'Generated confidence overlays and bounding box annotations with OpenCV.',
        'Integrated with Streamlit for a web-based testing suite allowing instant image upload and detection inspection.'
      ],
      technicalHighlights: [
        '5,011 dataset split across train, validation, and test subsets for clean validation.',
        '0.952 Precision and 0.951 Recall showing balanced error minimization.',
        '~118 FPS inference throughput well exceeding real-time video thresholds (30-60 FPS).'
      ]
    }
  },
  {
    id: 'multilink',
    number: '03',
    title: 'MultiLink',
    subtitle: 'Multi-Network Download Manager',
    category: 'FastAPI  |  React  |  Systems  |  Networking',
    tagline: 'Windows-first download manager dynamically scheduling parallel HTTP Range requests across physical network adapters (Ethernet, Wi-Fi, USB Tethering) with sparse file assembly.',
    description:
      'An intelligent, high-throughput Windows download manager featuring an interactive React telemetry dashboard and an asynchronous Python/FastAPI engine. MultiLink dynamically fragments large HTTP transfers into ranges, scheduling chunks across multiple physical and virtual network adapters in real time, backed by persistent SQLite state, sparse file streaming, and strict SSRF defenses.',
    layer: 1,
    tags: ['FastAPI', 'React', 'Python', 'TypeScript', 'Tailwind CSS', 'WebSocket', 'SQLite', 'AsyncIO', 'Recharts'],
    filterCategories: ['Full Stack', 'Data / Analytics'],
    github: 'https://github.com/Frost730/Multi_Link',
    live: null,
    featured: true,
    metrics: [
      { label: 'Architecture', value: 'Decoupled', description: 'FastAPI async engine + React live WebSocket dashboard' },
      { label: 'Storage Engine', value: 'Sparse File', description: 'Direct-to-disk chunk assembly preventing RAM exhaustion on 50GB+ downloads' },
      { label: 'Scheduling', value: 'Adaptive', description: 'Bandwidth-weighted work stealing and automatic interface failover' },
      { label: 'Integrity', value: 'SHA-256', description: 'End-to-end streaming cryptographic checksum verification' }
    ],
    keyFeatures: [
      'Windows Adapter Discovery: Discovers Ethernet, Wi-Fi, USB Tethering, and virtual adapters with link speed and operational status.',
      'True Socket Binding & Detection: Binds sockets to adapter IPv4 addresses with automatic fallback detection between bonded and multi-connection modes.',
      'Adaptive Dynamic Scheduler: Continuously weights chunk distribution based on real-time moving-average throughput and work stealing.',
      'Persistent Pause & Resume: SQLite database tracking unfinished byte ranges allowing seamless resume after closing or system reboot.',
      'Sparse File Direct Assembler: Streams ranges directly to disk via sparse file seeking, avoiding memory bloat even for 50 GB+ files.',
      'Real-Time WebSocket Telemetry: Rolling throughput charts, interface telemetry, and live interactive chunk progress visualizer.',
      'SSRF & Path Traversal Guards: Restricts downloads from loopback, private subnets, and sanitizes filenames against Windows reserved device names.'
    ],
    architecture: {
      overview: 'High-performance asynchronous decoupled architecture with an event-driven engine and real-time WebSocket state distribution.',
      flow: [
        'Download Target URL & HTTP Range Probing',
        'Windows Adapter Discovery (psutil & Socket Binding)',
        'Adaptive Scheduler (Bandwidth-Weighted Chunk Allocation)',
        'Parallel Asynchronous Worker Pool (aiohttp / httpx)',
        'Sparse File Assembler (.multilink.part Streaming Writer)',
        'Real-Time WebSocket Telemetry & React Visualizer',
        'Streaming SHA-256 Verification & Atomic Finalization'
      ]
    },
    details: {
      problem:
        'Standard web browsers and generic downloaders utilize a single TCP connection over a single default network route, leaving secondary adapters (such as mobile tethering or secondary Wi-Fi/Ethernet) completely idle during massive file transfers.',
      solution:
        'MultiLink dynamically discovers all active network adapters, probes the target server for HTTP Range capability, and splits the file into chunks dynamically scheduled across available interfaces according to live throughput, with automatic work stealing on interface drop.',
      implementation: [
        'FastAPI async backend orchestrating chunk scheduling, adapter socket binding, and WebSocket telemetry broadcasting.',
        'aiosqlite database engine persisting byte range progress, chunks, and download statuses for instant pause/resume.',
        'Sparse file direct-to-disk streaming writer eliminating RAM bottlenecks when downloading multi-gigabyte files.',
        'React and TypeScript frontend featuring Recharts live throughput graphs and an interactive chunk progress grid.',
        'Comprehensive pytest test suite validating SSRF protection, sparse assembly, scheduler scoring, and live integration.'
      ],
      technicalHighlights: [
        'Engineered safe per-adapter socket binding without requiring kernel drivers or permanent routing table edits.',
        'Sparse file chunk assembly with streaming SHA-256 verification and atomic file renaming upon completion.',
        'Standalone Windows desktop build pipeline utilizing PyInstaller to produce a portable native MultiLink.exe.'
      ]
    }
  },

  // ==========================================
  // LAYER 2: LIVE DEPLOYED APPLICATIONS
  // ==========================================
  {
    id: 'cineanime-vault',
    number: '04',
    title: 'CineAnime Vault',
    subtitle: 'Media & Anime Watchlist Manager',
    category: 'React  |  TypeScript  |  Media Management',
    tagline: 'Privacy-first media tracking dashboard featuring episode counters, watch time analytics, and offline PWA capability.',
    description:
      'A modern, client-side watchlist and media manager for movies, TV series, and anime. Delivers granular episode tracking, rating analytics, genre breakdowns, and instant data portability with zero cloud telemetry.',
    layer: 2,
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA', 'Local Storage', 'HashRouter'],
    filterCategories: ['Frontend'],
    github: 'https://github.com/Frost730/CineAnime_Vault',
    live: 'https://frost730.github.io/CineAnime_Vault/',
    featured: false,
    keyFeatures: [
      'Comprehensive Watchlists: Categorize movies, seasons, and anime with status indicators.',
      'Episode-Level Tracking: Increment counts with auto-calculated completion percentages.',
      'Watch Time Analytics: Dynamic calculation of total estimated viewing hours.',
      'Genre & Rating Visualizations: Breakdown charts illustrating personal viewing patterns.',
      'Data Portability: One-click JSON backup/import and CSV export for complete data ownership.',
      '100% Client-Side Privacy: All state preserved locally in localStorage with offline PWA readiness.'
    ],
    details: {
      problem:
        'Most media tracking services mandate account creation, serve advertisements, and fail to operate reliably without an active internet connection.',
      solution:
        'Built a lightweight, responsive PWA that stores all data locally in the browser, offering desktop-grade analytics and smooth mobile touch interactions without network dependencies.',
      implementation: [
        'React and TypeScript ensure type-safe watchlist schema definitions.',
        'HashRouter handles routing seamlessly on GitHub Pages static hosting.',
        'Tailwind CSS powers a dark-first aesthetic with custom themes (Dark, Light, System).'
      ],
      technicalHighlights: [
        'Installable Progressive Web App with service worker caching.',
        'Robust JSON import validator preventing malformed payload state crashes.'
      ]
    }
  },
  {
    id: 'gamevault',
    number: '05',
    title: 'GameVault',
    subtitle: 'Gaming Library & Backlog Dashboard',
    category: 'React  |  TypeScript  |  Data Visualization',
    tagline: 'Client-side gaming analytics dashboard for backlog management, playtime tracking, and milestone achievements.',
    description:
      'An offline-first gaming dashboard designed to manage video game collections, monitor completion statuses, track play sessions, and visualize gaming habits through interactive Chart.js charts.',
    layer: 2,
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Chart.js', 'Local Storage', 'PWA'],
    filterCategories: ['Frontend', 'Data / Analytics'],
    github: 'https://github.com/Frost730/gamevault',
    live: 'https://frost730.github.io/gamevault/',
    featured: false,
    keyFeatures: [
      'Library Management: Full CRUD operations across collection items with status tags.',
      'Session & Playtime Tracking: Log gameplay hours with milestone progress bars.',
      'Visualized Analytics: Chart.js visualizations showing platform splits and completion ratios.',
      'Gaming Goals: Set customizable quarterly or yearly game completion targets.',
      'Multi-View Layout: Instant toggle between detailed card grids and compact table rows.',
      'Zero Cloud Dependency: 100% client-side persistence with exportable JSON snapshots.'
    ],
    details: {
      problem:
        'Gamers with multi-platform libraries (PC, consoles, handhelds) lack a single, clutter-free private hub to monitor their backlogs and playtime trends.',
      solution:
        'Created an offline-first dashboard providing instant search, filtering, and statistical summaries with no external API rate limits or subscriptions.',
      implementation: [
        'Engineered responsive Chart.js components dynamically rendering collection metrics.',
        'Built fuzzy text filtering and multi-attribute sorting (playtime, rating, release year).',
        'Added schema validation for importing and exporting game catalogs.'
      ],
      technicalHighlights: [
        'Zero-latency interactions powered by local state synchronization.',
        'Fully responsive layout optimized for mobile and desktop screens.'
      ]
    }
  },
  {
    id: 'personal-expense-tracker',
    number: '06',
    title: 'Personal Expense Tracker',
    subtitle: 'Private Financial Dashboard',
    category: 'React  |  TypeScript  |  Financial Analytics',
    tagline: 'Zero-telemetry personal finance manager with net balance monitoring, comparative spending charts, and category health badges.',
    description:
      'A private, production-grade expense tracking dashboard. Provides instant financial clarity through interactive monthly timelines, 6-month income vs. expense comparisons, category donut breakdowns, and budget progress indicators.',
    layer: 2,
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Local Storage', 'PWA'],
    filterCategories: ['Frontend', 'Data / Analytics'],
    github: 'https://github.com/Frost730/Personal_Expense_Tracker',
    live: 'https://frost730.github.io/Personal_Expense_Tracker/',
    featured: false,
    keyFeatures: [
      'Live Net Balance: Real-time calculation of total income, monthly expenditure, and savings rate.',
      'Interactive Spending Timelines: Area and bar charts contrasting month-over-month expenses.',
      'Category Budget Health: Visual progress bars alerting to category budget thresholds.',
      'Multi-Channel Payment Tracking: Categorize transactions by UPI, Credit Card, Debit, or Cash.',
      'Date & Range Selectors: Filter transactions by specific months, years, or custom periods.',
      'Strict Local Privacy: Zero financial information leaves the client browser.'
    ],
    details: {
      problem:
        'Users are hesitant to share sensitive personal financial transaction data with third-party cloud banking apps.',
      solution:
        'Delivered an offline-first, client-only budgeting suite with rich visual analytics, ensuring 100% confidentiality of all financial data in localStorage.',
      implementation: [
        'Built financial calculation utilities with safe zero-division handling for savings rates.',
        'Implemented interactive charts visualizing monthly flow and category allocations.',
        'Created modal transaction editors with auto-formatting and category tagging.'
      ],
      technicalHighlights: [
        'Zero backend requirement allows hosting on any static web server or CDN.',
        'Rapid search indexing across transaction descriptions and payment notes.'
      ]
    }
  },
  {
    id: 'flappy-bird-remastered',
    number: '07',
    title: 'Flappy Bird Remastered',
    subtitle: 'Arcade Canvas Game with Web Audio',
    category: 'React  |  TypeScript  |  Canvas  |  Game Development',
    tagline: 'Modern HTML5 Canvas arcade title featuring custom flight physics, Web Audio synthesizer, and item unlocks.',
    description:
      'A remastered recreation of the classic arcade title built with React and HTML5 Canvas. Features smooth float physics, procedural Web Audio sound synthesis, unlockable skins, an in-game coin economy, and persistent high scores.',
    layer: 2,
    tags: ['React', 'TypeScript', 'HTML5 Canvas', 'Web Audio API', 'Vite', 'Tailwind CSS', 'Local Storage'],
    filterCategories: ['Game Development', 'Frontend'],
    github: 'https://github.com/Frost730/flappy-bird-remastered',
    live: 'https://frost730.github.io/flappy-bird-remastered/',
    featured: false,
    keyFeatures: [
      'HTML5 Canvas Engine: High frame rate rendering with 60 FPS requestAnimationFrame loop.',
      'Custom Physics Modeling: Tuned jump impulses, terminal velocities, and gravity curves.',
      'Procedural Audio Synthesizer: Dynamic sound effects generated via the Web Audio API without audio files.',
      'Skin Economy & Shop: Collect coins during runs to unlock custom character sprites and visual environments.',
      'Leaderboards & Statistics: Records high scores, total flights, and collision stats in local storage.',
      'Responsive Touch Controls: Flawless gameplay on desktop keyboard, mouse click, and mobile touch.'
    ],
    details: {
      problem:
        'Building browser games often introduces heavy audio asset loading times and sluggish canvas repaints on mobile devices.',
      solution:
        'Engineered an asset-free audio synthesis model using Web Audio API oscillators, paired with an optimized 2D canvas pipeline that runs at a solid 60 FPS across all viewports.',
      implementation: [
        'Vector-based collision detection checking bird bounds against pipe coordinates.',
        'State machine managing gameplay stages (Start, Playing, Game Over, Shop).',
        'Custom Web Audio oscillators creating retro sound bites on jump, score, and crash.'
      ],
      technicalHighlights: [
        'Zero external sound asset downloads for instant game initialization.',
        'Frame-rate independent delta timing ensuring consistent gameplay across displays.'
      ]
    }
  },

  // ==========================================
  // LAYER 3: ADDITIONAL POLISHED PROJECTS
  // ==========================================
  {
    id: 'careflow-kiosk',
    number: '08',
    title: 'CareFlow Kiosk',
    subtitle: 'Patient Check-In Kiosk & Admin Portal',
    category: 'FastAPI  |  SQLite  |  React',
    tagline: 'Healthcare self-service check-in kiosk and staff administration portal built with FastAPI, SQLite, and React.',
    description:
      'A medical self-service patient check-in kiosk application engineered for clinical facilities. Features an accessible, touch-friendly patient terminal paired with a secure administrative dashboard for hospital staff, physician queue routing, and PBKDF2 authentication.',
    layer: 3,
    tags: ['FastAPI', 'Python', 'SQLite', 'SQLAlchemy', 'React', 'Vite', 'Pydantic', 'CSS'],
    filterCategories: ['Full Stack'],
    github: 'https://github.com/Frost730/careflow-kiosk',
    live: null,
    featured: false,
    keyFeatures: [
      'Patient Self-Check-In: Clean step-by-step workflow with virtual keypad for phone and ID verification.',
      'Physician Routing: Automatically queues patients according to scheduled departments and doctors.',
      'Secure Staff Dashboard: Token-protected administrative portal with PBKDF2 hashed password authentication.',
      'Thermal Print Optimization: Formatted check-in slips and queue token print layouts.',
      'High-Contrast Accessibility: High-contrast and dark display modes designed for diverse patient needs.',
      'RESTful FastAPI Architecture: Pydantic schemas validating patient payloads with SQLite ORM.'
    ],
    details: {
      problem:
        'Hospital check-in desks suffer from long patient wait lines, manual registration errors, and high administrative overhead.',
      solution:
        'CareFlow provides a reliable, touch-first kiosk interface that guides arriving patients through check-in in under 45 seconds while feeding structured queues into the clinic administration portal.',
      implementation: [
        'FastAPI backend providing auth guards, patient session tokens, and doctor queue management.',
        'SQLAlchemy ORM modeling check-in states and administrative access controls.',
        'Modular React client with custom keypad components for sterile touchscreen environments.'
      ],
      technicalHighlights: [
        'PBKDF2 cryptographic hashing ensuring patient session security.',
        'Decoupled architecture enabling swift local clinic deployment.'
      ]
    }
  }
];

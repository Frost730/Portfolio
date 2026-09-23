import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & Computer Vision',
    description: 'Core ML architectures, real-time object detection models, and evaluation pipelines.',
    iconName: 'Eye',
    skills: [
      { name: 'Computer Vision', highlight: true },
      { name: 'Object Detection', highlight: true },
      { name: 'YOLOv8', highlight: true },
      { name: 'CNN', highlight: true },
      { name: 'Model Training' },
      { name: 'Model Evaluation' },
      { name: 'Data Augmentation' },
      { name: 'Data Preprocessing' },
      { name: 'Performance Metrics (Precision, Recall, mAP)' },
      { name: 'Retrieval-Augmented Generation (RAG)' },
    ]
  },
  {
    title: 'Frameworks & Deep Learning',
    description: 'Production-ready ML toolchains, array processing, and real-time visualization.',
    iconName: 'Cpu',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'Ultralytics YOLOv8', highlight: true },
      { name: 'OpenCV', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'Pandas' },
      { name: 'Streamlit', highlight: true },
      { name: 'Google Gemini API' },
      { name: 'PDF Processing (pypdf)' },
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Foundational programming languages used for ML engineering, algorithms, and applications.',
    iconName: 'Code2',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Java' },
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'SQL', highlight: true },
    ]
  },
  {
    title: 'Web & Systems Engineering',
    description: 'Full-stack application frameworks, backend APIs, client-side caching, and graphics rendering.',
    iconName: 'Layout',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Vite' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'WebSocket', highlight: true },
      { name: 'AsyncIO' },
      { name: 'SQLite', highlight: true },
      { name: 'SQLAlchemy' },
      { name: 'Chart.js' },
      { name: 'HTML5 Canvas', highlight: true },
      { name: 'Web Audio API' },
      { name: 'PWA Technologies' },
      { name: 'Local Storage' },
    ]
  },
  {
    title: 'Engineering Tools & Platforms',
    description: 'Version control, development environments, and cloud acceleration platforms.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'VS Code' },
      { name: 'Kaggle (GPU Acceleration)', highlight: true },
    ]
  }
];

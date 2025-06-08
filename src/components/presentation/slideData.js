import Slide1IntroSlide from './slides/Slide1IntroSlide';
import Slide2TeamSlide from './slides/Slide2TeamSlide';
import Slide3ArchitectureSlide from './slides/Slide3ArchitectureSlide';
import Slide4DataModelsSlide from './slides/Slide4DataModelsSlide';
import Slide5APISlide from './slides/Slide5APISlide';
import Slide6FrontendSlide from './slides/Slide6FrontendSlide';
import Slide7TestingSlide from './slides/Slide7TestingSlide';
import Slide8SecuritySlide from './slides/Slide8SecuritySlide';
import Slide9DevOpsSlide from './slides/Slide9DevOpsSlide';
import Slide10PerformanceSlide from './slides/Slide10PerformanceSlide';
import Slide11GitWorkflowSlide from './slides/Slide11GitWorkflowSlide';
import Slide12ChallengesSlide from './slides/Slide12ChallengesSlide';
import Slide13InnovationsSlide from './slides/Slide13InnovationsSlide';
import Slide14RoadmapSlide from './slides/Slide14RoadmapSlide';
import Slide15ConclusionSlide from './slides/Slide15ConclusionSlide';

export const slides = [
  {
    id: 'intro',
    title: 'InterimApp',
    subtitle: 'Plateforme Moderne de Recrutement Intérimaire',
    component: Slide1IntroSlide
  },
  {
    id: 'team',
    title: 'Équipe de Développement',
    subtitle: 'Trois développeurs passionnés avec expertise complémentaire',
    component: Slide2TeamSlide
  },
  {
    id: 'architecture',
    title: 'Architecture Technique',
    subtitle: 'Stack Moderne Full-Stack - React + Flask + MongoDB',
    component: Slide3ArchitectureSlide
  },
  {
    id: 'data-models',
    title: 'Modèles de Données',
    subtitle: 'Structure MongoDB avec Relations et Contraintes',
    component: Slide4DataModelsSlide
  },
  {
    id: 'api',
    title: 'API REST Complète',
    subtitle: '25+ Endpoints Documentés avec Swagger',
    component: Slide5APISlide
  },
  {
    id: 'frontend',
    title: 'Interface React Moderne',
    subtitle: 'UX/UI Responsive avec TypeScript et Tailwind',
    component: Slide6FrontendSlide
  },
  {
    id: 'testing',
    title: 'Tests et Qualité',
    subtitle: '90% Coverage avec Tests Automatisés',
    component: Slide7TestingSlide
  },
  {
    id: 'security',
    title: 'Sécurité et Authentification',
    subtitle: 'JWT, bcrypt et Validation Multi-Niveaux',
    component: Slide8SecuritySlide
  },
  {
    id: 'devops',
    title: 'DevOps et CI/CD',
    subtitle: 'Docker, GitHub Actions et Déploiement Automatisé',
    component: Slide9DevOpsSlide
  },
  {
    id: 'performance',
    title: 'Performance et Métriques',
    subtitle: 'Optimisations et KPIs de Production',
    component: Slide10PerformanceSlide
  },
  {
    id: 'git-workflow',
    title: 'Workflow Git avec Submodules',
    subtitle: 'Méthodologie Professionnelle et Collaboration',
    component: Slide11GitWorkflowSlide
  },
  {
    id: 'challenges',
    title: 'Défis Techniques Relevés',
    subtitle: 'Solutions Innovantes aux Problèmes Complexes',
    component: Slide12ChallengesSlide
  },
  {
    id: 'innovations',
    title: 'Innovations et Technologies',
    subtitle: 'Fonctionnalités Avancées et Algorithmes',
    component: Slide13InnovationsSlide
  },
  {
    id: 'roadmap',
    title: 'Roadmap et Évolutions',
    subtitle: 'Versions Futures et Technologies Émergentes',
    component: Slide14RoadmapSlide
  },
  {
    id: 'conclusion',
    title: 'Conclusion et Impact',
    subtitle: 'Réussites, Compétences Acquises et Perspectives',
    component: Slide15ConclusionSlide
  }
];
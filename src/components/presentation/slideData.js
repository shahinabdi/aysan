import Slide1IntroSlide from './slides/Slide1IntroSlide';
import Slide2TeamSlide from './slides/Slide2TeamSlide';
import Slide3ArchitectureSlide from './slides/Slide3ArchitectureSlide';
import Slide4ConclusionSlide from './slides/Slide4ConclusionSlide';

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
    subtitle: 'Trois développeurs passionnés',
    component: Slide2TeamSlide
  },
  {
    id: 'architecture',
    title: 'Architecture Technique',
    subtitle: 'Stack Moderne Full-Stack',
    component: Slide3ArchitectureSlide
  },
  {
    id: 'conclusion',
    title: 'Conclusion & Impact',
    subtitle: 'Réussites et Perspectives',
    component: Slide4ConclusionSlide
  }
];
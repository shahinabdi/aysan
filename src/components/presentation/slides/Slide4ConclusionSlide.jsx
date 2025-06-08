import React from 'react';
import { Trophy, Target, Code, Users, Lightbulb, CheckCircle } from 'lucide-react';

const Slide4ConclusionSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
            Réussites Techniques
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Architecture scalable et maintenable
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Code coverage 90% avec tests automatisés
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Performance optimisée sous 200ms
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Sécurité enterprise-grade
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              CI/CD complet avec GitHub Actions
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Documentation exhaustive
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Target className="w-6 h-6 text-blue-400 mr-3" />
            Impact Métier
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              Processus de recrutement simplifié
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              Réduction 60% temps de recrutement
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              Interface moderne et intuitive
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              ROI mesurable pour entreprises
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              Expérience candidat optimisée
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              Analytics pour pilotage RH
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/30">
        <h3 className="font-bold text-2xl mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Compétences Développées par l'Équipe
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-blue-400 mb-2">Excellence Technique</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Full-Stack Development</li>
              <li>• DevOps & Automatisation</li>
              <li>• Testing & Quality Assurance</li>
              <li>• Security Best Practices</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-green-400 mb-2">Collaboration</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Git Flow Professionnel</li>
              <li>• Code Reviews Constructives</li>
              <li>• Méthodologie Agile</li>
              <li>• Documentation Technique</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-purple-400 mb-2">Innovation</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Architecture Moderne</li>
              <li>• UX/UI Design</li>
              <li>• Performance Optimization</li>
              <li>• Future Technologies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
        <h3 className="font-bold text-xl mb-4 text-yellow-400">Message Final</h3>
        <p className="text-gray-300 leading-relaxed">
          <strong>InterimApp</strong> illustre parfaitement comment une équipe passionnée peut créer 
          une solution technique remarquable en appliquant les meilleures pratiques de l'industrie. 
          L'expertise développée, les méthodologies maîtrisées et la qualité du livrable constituent 
          un socle solide pour de futurs projets ambitieux.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
            Excellente Qualité Technique
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
            Collaboration Efficace
          </div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold">
            Vision Produit Claire
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4ConclusionSlide;
import React from 'react';
import { Rocket, Brain, Globe, Smartphone, Zap, Star } from 'lucide-react';

const Slide14RoadmapSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Rocket className="w-6 h-6 text-blue-400 mr-3" />
            🚀 Version 1.1 - UX (Q1 2024)
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">✨ Notifications Temps Réel</div>
              <div className="text-xs text-gray-400">WebSockets pour candidatures et réponses</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">📄 Gestion Documents</div>
              <div className="text-xs text-gray-400">Upload CV/PDF avec preview intégré</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">💬 Messagerie Intégrée</div>
              <div className="text-xs text-gray-400">Chat candidat-entreprise sécurisé</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">⭐ Système de Notation</div>
              <div className="text-xs text-gray-400">Avis mutuels candidats/entreprises</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-red-300 mb-1">🗺️ Recherche Géographique</div>
              <div className="text-xs text-gray-400">Carte interactive avec géolocalisation</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Brain className="w-6 h-6 text-green-400 mr-3" />
            🧠 Version 1.2 - IA (Q2 2024)
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">🤖 Matching Automatique</div>
              <div className="text-xs text-gray-400">ML pour correspondance candidat-offre</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">🎯 Recommandations IA</div>
              <div className="text-xs text-gray-400">Suggestions personnalisées avancées</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">📊 Analytics Prédictifs</div>
              <div className="text-xs text-gray-400">Prévisions recrutement pour RH</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">🔄 Auto-complétion</div>
              <div className="text-xs text-gray-400">Profils intelligents pré-remplis</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-red-300 mb-1">🌍 SEO + SSR</div>
              <div className="text-xs text-gray-400">Next.js pour référencement optimal</div>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Globe className="w-6 h-6 text-purple-400 mr-3" />
            🏢 Version 2.0 - Marketplace (Q3-Q4)
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">💳 Paiements Intégrés</div>
              <div className="text-xs text-gray-400">Stripe pour abonnements premium</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">🌐 API Publique</div>
              <div className="text-xs text-gray-400">Intégrations partenaires RH</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">📱 App Mobile Native</div>
              <div className="text-xs text-gray-400">React Native iOS/Android</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">🌍 Multi-langues</div>
              <div className="text-xs text-gray-400">Support FR, EN, ES</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-red-300 mb-1">🔗 Intégrations</div>
              <div className="text-xs text-gray-400">LinkedIn, Indeed, Pole Emploi</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Zap className="w-6 h-6 text-yellow-400 mr-3" />
          🛠️ Améliorations Techniques Continues
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">Backend Evolution</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Migration vers FastAPI pour performance</span>
              </div>
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Microservices avec Docker Swarm</span>
              </div>
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Cache Redis pour sessions/recherches</span>
              </div>
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Elasticsearch pour recherche avancée</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-3">Frontend Evolution</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Migration Next.js 13 avec App Router</span>
              </div>
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-300">State management avec Zustand</span>
              </div>
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Tests E2E avec Playwright</span>
              </div>
              <div className="bg-gray-900 p-2 rounded flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Design system avec Storybook</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Smartphone className="w-6 h-6 text-blue-400 mr-3" />
            📱 Technologies Futures Identifiées
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Machine Learning</div>
              <div className="text-xs text-gray-400">TensorFlow.js pour recommandations client-side</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">Blockchain</div>
              <div className="text-xs text-gray-400">Vérification sécurisée des certifications</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">AR/VR</div>
              <div className="text-xs text-gray-400">Entretiens virtuels immersifs</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">Voice AI</div>
              <div className="text-xs text-gray-400">Interface conversationnelle candidatures</div>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Star className="w-6 h-6 text-purple-400 mr-3" />
            🎯 Objectifs Business à Long Terme
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">Croissance Utilisateurs</div>
              <div className="text-xs text-gray-400">100k+ utilisateurs actifs d'ici 2025</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Expansion Géographique</div>
              <div className="text-xs text-gray-400">Lancement en Europe (DE, IT, ES)</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">Revenus Récurrents</div>
              <div className="text-xs text-gray-400">2M€ ARR avec modèle SaaS premium</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">Écosystème RH</div>
              <div className="text-xs text-gray-400">Hub central formation + services RH</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30">
        <h3 className="font-bold text-xl mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🚀 Vision 2026: Leader du Recrutement Digital
        </h3>
        <div className="text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong>InterimApp</strong> évoluera vers une <strong className="text-blue-400">plateforme écosystémique complète</strong> 
            intégrant intelligence artificielle, services RH avancés et marketplace internationale.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1M+</div>
              <div className="text-sm text-gray-400">Utilisateurs Actifs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">50k+</div>
              <div className="text-sm text-gray-400">Entreprises Partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">15</div>
              <div className="text-sm text-gray-400">Pays d'Expansion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">10M€</div>
              <div className="text-sm text-gray-400">Valorisation Cible</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide14RoadmapSlide;
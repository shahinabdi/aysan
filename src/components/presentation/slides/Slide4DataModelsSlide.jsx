import React from 'react';
import { Database, Link, Shield, CheckCircle } from 'lucide-react';

const Slide4DataModelsSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Database className="w-6 h-6 text-blue-400 mr-3" />
            Collections MongoDB
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-sm text-blue-300 mb-1">users (Candidats)</h4>
              <p className="text-xs text-gray-400">email, password, nom, prenom, competences, cv_url</p>
              <div className="text-xs text-blue-200 mt-1">📊 Index: email (unique)</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-sm text-green-300 mb-1">companies (Entreprises)</h4>
              <p className="text-xs text-gray-400">email, nom, secteur, adresse, description, site_web</p>
              <div className="text-xs text-green-200 mt-1">📊 Index: email (unique)</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-sm text-purple-300 mb-1">jobs (Offres Emploi)</h4>
              <p className="text-xs text-gray-400">titre, description, salaire, competences_requises, localisation</p>
              <div className="text-xs text-purple-200 mt-1">📊 Index: company_id, titre, actif</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-sm text-yellow-300 mb-1">applications (Candidatures)</h4>
              <p className="text-xs text-gray-400">user_id, job_id, statut, lettre_motivation, dates</p>
              <div className="text-xs text-yellow-200 mt-1">📊 Index: user_id + job_id (composite unique)</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Link className="w-6 h-6 text-green-400 mr-3" />
            Relations & Contraintes
          </h3>
          <div className="space-y-4">
            <div className="text-sm text-gray-300">
              <p className="font-semibold mb-2 text-green-400">🔗 Relations Principales :</p>
              <div className="bg-gray-800 p-3 rounded font-mono text-xs">
                <div className="text-blue-300">Users (1) ←→ (N) Applications</div>
                <div className="text-green-300">Jobs (1) ←→ (N) Applications</div>
                <div className="text-purple-300">Companies (1) ←→ (N) Jobs</div>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-semibold mb-2 flex items-center">
                <Shield className="w-4 h-4 text-yellow-400 mr-2" />
                Contraintes d'Intégrité :
              </p>
              <ul className="space-y-1 text-xs">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  Emails uniques (users + companies)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  Applications user+job uniques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  Index performance sur recherches
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  Validation multi-niveaux stricte
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 text-purple-400">📄 Exemple Structure JSON - Offre d'Emploi</h3>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="font-mono text-sm text-green-400">
{`{
  "_id": ObjectId("65a1b2c3d4e5f6789abcdef0"),
  "company_id": ObjectId("65a1b2c3d4e5f6789abcdef1"),
  "titre": "Développeur Full-Stack React/Flask",
  "description": "Rejoignez notre équipe dynamique pour développer des solutions web modernes...",
  "salaire": "45k-55k €/an",
  "type_contrat": "CDI",
  "localisation": "Paris, Île-de-France",
  "competences_requises": ["React", "Flask", "MongoDB", "TypeScript", "Python"],
  "experience_requise": "2-5 ans",
  "date_creation": ISODate("2024-01-15T10:00:00Z"),
  "date_modification": ISODate("2024-01-15T10:00:00Z"),
  "actif": true,
  "candidatures_count": 12
}`}
          </pre>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="bg-blue-900/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-blue-400">4</div>
            <div className="text-xs text-gray-400">Collections Principales</div>
          </div>
          <div className="bg-green-900/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-green-400">12</div>
            <div className="text-xs text-gray-400">Index Optimisés</div>
          </div>
          <div className="bg-purple-900/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-purple-400">8</div>
            <div className="text-xs text-gray-400">Contraintes Métier</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4DataModelsSlide;
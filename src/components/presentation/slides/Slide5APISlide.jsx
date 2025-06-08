import React from 'react';
import { Globe, Lock, Users, Briefcase, FileText, BarChart3 } from 'lucide-react';

const Slide5APISlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Lock className="w-6 h-6 text-blue-400 mr-3" />
            🔐 Authentification (/api/auth)
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-green-400 font-mono font-bold">POST</span>
              <span className="text-gray-300">/register/user</span>
              <span className="text-xs text-blue-400">Public</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-green-400 font-mono font-bold">POST</span>
              <span className="text-gray-300">/register/company</span>
              <span className="text-xs text-blue-400">Public</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-green-400 font-mono font-bold">POST</span>
              <span className="text-gray-300">/login</span>
              <span className="text-xs text-green-400">Universal</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-yellow-400 font-mono font-bold">GET</span>
              <span className="text-gray-300">/verify</span>
              <span className="text-xs text-red-400">JWT Required</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-blue-400 font-mono font-bold">PUT</span>
              <span className="text-gray-300">/change-password</span>
              <span className="text-xs text-red-400">JWT Required</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Briefcase className="w-6 h-6 text-green-400 mr-3" />
            💼 Gestion Emplois (/api/jobs)
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-yellow-400 font-mono font-bold">GET</span>
              <span className="text-gray-300">/ (liste + filtres)</span>
              <span className="text-xs text-blue-400">Public</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-green-400 font-mono font-bold">POST</span>
              <span className="text-gray-300">/ (création)</span>
              <span className="text-xs text-purple-400">Company</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-blue-400 font-mono font-bold">PUT</span>
              {/* FIX: Wrapped string in curly braces and quotes to avoid JSX parsing {id} as a variable */}
              <span className="text-gray-300">{"/{id} (modification)"}</span>
              <span className="text-xs text-red-400">Owner</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-red-400 font-mono font-bold">DELETE</span>
              {/* FIX: Wrapped string in curly braces and quotes */}
              <span className="text-gray-300">{"/{id} (suppression)"}</span>
              <span className="text-xs text-red-400">Owner</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span className="text-yellow-400 font-mono font-bold">GET</span>
              {/* FIX: Wrapped string in curly braces and quotes */}
              <span className="text-gray-300">{"/{id}/applications"}</span>
              <span className="text-xs text-red-400">Owner</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <FileText className="w-6 h-6 text-purple-400 mr-3" />
            📝 Candidatures (/api/applications)
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-yellow-400 font-mono text-xs">GET</span>
              <span className="text-gray-300 text-xs">/ (liste filtrée)</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-green-400 font-mono text-xs">POST</span>
              <span className="text-gray-300 text-xs">/ (nouvelle candidature)</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-blue-400 font-mono text-xs">PUT</span>
              {/* FIX: Wrapped string in curly braces and quotes */}
              <span className="text-gray-300 text-xs">{"/{id}/status"}</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-yellow-400 font-mono text-xs">GET</span>
              <span className="text-gray-300 text-xs">/statistics</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Users className="w-6 h-6 text-yellow-400 mr-3" />
            👥 Users & Companies
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-yellow-400 font-mono text-xs">GET</span>
              <span className="text-gray-300 text-xs">/users (paginée)</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-yellow-400 font-mono text-xs">GET</span>
              <span className="text-gray-300 text-xs">/companies</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-blue-400 font-mono text-xs">PUT</span>
              {/* FIX: Wrapped string in curly braces and quotes */}
              <span className="text-gray-300 text-xs">{"/{id}/profile"}</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded">
              <span className="text-yellow-400 font-mono text-xs">GET</span>
              {/* FIX: Wrapped string in curly braces and quotes */}
              <span className="text-gray-300 text-xs">{"/{id}/profile"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Globe className="w-6 h-6 text-blue-400 mr-3" />
          25+ Endpoints API Complètement Documentés
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center bg-blue-900/20 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
            <div className="text-sm text-gray-300 font-semibold">Auth Endpoints</div>
            <div className="text-xs text-gray-500">JWT + Registration</div>
          </div>
          <div className="text-center bg-green-900/20 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">7</div>
            <div className="text-sm text-gray-300 font-semibold">Jobs Management</div>
            <div className="text-xs text-gray-500">CRUD + Search</div>
          </div>
          <div className="text-center bg-purple-900/20 p-4 rounded-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">9</div>
            <div className="text-sm text-gray-300 font-semibold">Applications</div>
            <div className="text-xs text-gray-500">Status + Analytics</div>
          </div>
          <div className="text-center bg-yellow-900/20 p-4 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400 mb-2">6</div>
            <div className="text-sm text-gray-300 font-semibold">Users & Companies</div>
            <div className="text-xs text-gray-500">Profiles + Stats</div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <div className="flex items-center mb-2">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            <span className="font-semibold text-blue-400">Swagger Documentation Interactive</span>
          </div>
          <p className="text-sm text-gray-300">
            API complètement documentée avec exemples de requêtes/réponses, codes d'erreur HTTP détaillés, 
            schémas de validation JSON, et interface de test interactive pour tous les endpoints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide5APISlide; 
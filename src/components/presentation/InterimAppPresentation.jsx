import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { slides } from './slideData';

const InterimAppPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Memoized navigation functions to prevent unnecessary re-renders
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key >= '1' && event.key <= '9') {
        const slideIndex = parseInt(event.key) - 1;
        if (slideIndex < slides.length) {
          goToSlide(slideIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 10000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, nextSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">InterimApp</h1>
              <p className="text-sm text-gray-400">Présentation Technique</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                isAutoPlay 
                  ? 'bg-green-600 hover:bg-green-500 text-white' 
                  : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
              }`}
              aria-label={isAutoPlay ? 'Pause auto-play' : 'Start auto-play'}
            >
              {isAutoPlay ? 'Auto ⏸️' : 'Auto ▶️'}
            </button>
            <div className="text-sm text-gray-400">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Slide Navigation Dots */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2" role="tablist" aria-label="Slide navigation">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? 'bg-blue-500'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  role="tab"
                  aria-selected={index === currentSlide}
                />
              ))}
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 min-h-[600px]">
            <div className="p-8">
              {/* Slide Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-400">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Slide Content */}
              <div className="min-h-[400px]" role="tabpanel" aria-labelledby={`slide-${currentSlide}`}>
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Précédent</span>
            </button>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Utilisez les flèches du clavier, les points de navigation ou les boutons pour naviguer
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors"
              aria-label="Next slide"
            >
              <span>Suivant</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-4">
        <div className="text-center text-gray-400 text-sm">
          <p>
            Développé par <strong className="text-blue-400">Aysan DEHGHAN</strong>, 
            <strong className="text-green-400"> Aurélien</strong> et 
            <strong className="text-purple-400"> Vincent</strong>
          </p>
          <p className="mt-1">
            Projet de démonstration - Stack moderne React + Flask + MongoDB
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InterimAppPresentation;
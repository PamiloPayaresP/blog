import React from 'react';
import { Mail, Phone, MapPin, Calendar, Heart, Github, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-300 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base break-all">maria.guerrero@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-300 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-300 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Fechas Importantes</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="text-emerald-300 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Blog creado</p>
                  <p className="text-teal-200 text-sm">Enero 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-emerald-300 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Última actualización</p>
                  <p className="text-teal-200 text-sm">Enero 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Sígueme</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-teal-100 hover:text-white transition-colors"
              >
                <Github className="text-emerald-300 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-teal-100 hover:text-white transition-colors"
              >
                <Linkedin className="text-emerald-300 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
              <a 
                href="https://portfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-teal-100 hover:text-white transition-colors"
              >
                <Globe className="text-emerald-300 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Portfolio</span>
              </a>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Sobre el Blog</h3>
            <p className="text-teal-100 leading-relaxed text-sm sm:text-base">
              Un espacio personal donde comparto mis pensamientos, experiencias y 
              momentos especiales. Cada entrada es una ventana a mi mundo y mis reflexiones.
            </p>
            <div className="flex items-center gap-2 text-emerald-300">
              <Heart size={16} />
              <span className="text-sm">Hecho con amor</span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-teal-500 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-teal-200 mb-2 text-sm sm:text-base">
            © 2025 Mi Blog Personal. Todos los derechos reservados.
          </p>
          <p className="text-base sm:text-lg font-semibold text-white">
            Este blog fue realizado por{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-bold">
              María Camila Guerrero Roqueme
            </span>
          </p>
          <div className="mt-4 flex justify-center items-center gap-2 text-sm text-teal-200">
            <Globe size={14} />
            <span>Conectado de forma segura via HTTPS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
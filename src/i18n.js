import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: {
                "label.hits": "Hits:",
                "label.errors": "Errors:",
                "label.loading": "Loading...",
                "label.enter-text": "Please enter your",
                "label.name": "name",
                "label.continue": "Continue",
                "label.repeat": "Play again",
                "label.congratulations": "Congratulations",
                "label.finished": "You finished sucefully the game"
            }
        },

        es: {
            translation: {
                "label.hits": "Aciertos:",
                "label.errors": "Errores:",
                "label.loading": "Cargando...",
                "label.enter-text": "Por favor ingresa tu",
                "label.name": "nombre",
                "label.continue": "Continuar",
                "label.repeat": "Jugar de nuevo",
                "label.congratulations": "Felicidades",
                "label.finished": "Terminaste exitosamente el juego"
            }
        }
    }, 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
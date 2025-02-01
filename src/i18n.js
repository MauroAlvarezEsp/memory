import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
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
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
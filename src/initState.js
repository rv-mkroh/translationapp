const initState = {
  words: [
    { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato", "correct": false },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro", "correct": false },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre", "correct": false },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer", "correct": false },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico", "correct": false },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña", "correct": false },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa", "correct": false },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche", "correct": false },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión", "correct": false },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa", "correct": false }
  ],
  languages: {
    "en": "English",
    "de": "German",
    "fr": "French",
    "sp": "Spanish"
  },
  fromLanguage: '',
  toLanguage: '',
  translation: '',
  wordCount: 0,
  currentWordIndex: 0,
  numberCorrect: 0,
  learnedAll: false,
  showAnswer: false,
  isCorrect: true
};

export default initState;
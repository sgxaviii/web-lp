// Interruptors per amagar de manera temporal contingut que encara no és real.
// No s'esborra res: posa un valor a `false` i la part corresponent torna a la normalitat.
export const bloqueig = {
  // Substitueix totes les imatges de contingut per un missatge (el logo i el fons de marca es mantenen)
  imatges: true,
  // Pàgines d'esdeveniments atenuades, amb un avís que desapareix tot sol
  esdeveniments: true,
  // Pàgina d'equipaments atenuada, amb un avís que desapareix tot sol
  equipaments: true,
};

export const missatgeImatges = "Imatges no disponibles actualment";

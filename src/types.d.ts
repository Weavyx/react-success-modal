/**
 * Interface pour les données d'un employé
 */
export interface EmployeeData {
  /** Prénom de l'employé */
  firstName: string;
  /** Nom de famille de l'employé */
  lastName: string;
  /** Date de naissance (format: YYYY-MM-DD) */
  dateOfBirth?: string;
  /** Date de début de travail (format: YYYY-MM-DD) */
  startDate?: string;
  /** Département de l'employé */
  department?: string;
  /** Adresse - rue */
  street?: string;
  /** Ville */
  city?: string;
  /** État/Région */
  state?: string;
  /** Code postal */
  zipCode?: string;
}

/**
 * Props du composant SuccessModal
 */
export interface SuccessModalProps {
  /** Indique si la modal est ouverte */
  isOpen: boolean;
  /** Fonction callback pour fermer la modal */
  onClose: () => void;
  /** Données de l'employé à afficher */
  employeeData: EmployeeData;
  /** Callback optionnel pour naviguer vers la liste des employés */
  onViewEmployees?: () => void;
  /** Callback optionnel pour créer un autre employé */
  onCreateAnother?: () => void;
}
import { useEffect } from 'react';
import './SuccessModal.css';

/**
 * Composant modal de succès pour confirmer la création d'un employé.
 * Affiche les détails de l'employé créé avec des options pour naviguer ou créer un autre employé.
 *
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {boolean} props.isOpen - Indique si la modal est ouverte
 * @param {Function} props.onClose - Fonction callback pour fermer la modal
 * @param {Object} [props.employeeData] - Les données de l'employé créé
 * @param {string} props.employeeData.firstName - Prénom de l'employé
 * @param {string} props.employeeData.lastName - Nom de famille de l'employé
 * @param {string} props.employeeData.dateOfBirth - Date de naissance
 * @param {string} props.employeeData.startDate - Date de début
 * @param {string} props.employeeData.department - Département
 * @param {string} props.employeeData.street - Adresse (rue)
 * @param {string} props.employeeData.city - Ville
 * @param {string} props.employeeData.state - État/Région
 * @param {string} props.employeeData.zipCode - Code postal
 * @param {Function} [props.onViewEmployees] - Callback pour naviguer vers la liste des employés
 * @param {Function} [props.onCreateAnother] - Callback pour créer un autre employé
 * @returns {React.ReactElement|null} Le composant modal ou null si fermé
 *
 * @example
 * <SuccessModal
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   employeeData={newEmployee}
 *   onViewEmployees={() => navigate('/employees')}
 *   onCreateAnother={() => resetForm()}
 * />
 */
function SuccessModal({
  isOpen,
  onClose,
  employeeData,
  onViewEmployees,
  onCreateAnother,
}) {
  /**
   * Gère la fermeture de la modal avec la touche Échap.
   * Ajoute et nettoie l'écouteur d'événement clavier.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  /**
   * Gère le défilement du body lors de l'ouverture/fermeture de la modal.
   * Désactive le scroll pour éviter le défilement en arrière-plan.
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  /** Ne rendre que si la modale est ouverte et qu'il y a des données employé */
  if (!isOpen || !employeeData) return null;

  // Fonctions utilitaires optimisées
  const formatDate = (dateString) => dateString || 'Not provided';
  const formatDepartment = (dept) => dept || 'Not provided';
  const formatAddress = (street, city, state, zipCode) =>
    [street, city, state, zipCode].filter(Boolean).join(', ') || 'Not provided';

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="success-modal-overlay" onClick={handleOverlayClick}>
      <div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-modal-title">
        <div className="success-modal__header">
          <h2 id="success-modal-title" className="success-modal__title">
            Employee created successfully!
          </h2>
          <button
            type="button"
            className="success-modal__close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span className="success-modal__close-icon">×</span>
          </button>
        </div>

        <div className="success-modal__content">
          <div className="success-message">
            <div className="success-message__icon">
              ✓
            </div>

            <h3 className="success-message__title">
              Congratulations!
            </h3>

            <p className="success-message__description">
              The new employee has been successfully added to your database.
              You can now view the employee list or create another employee.
            </p>

            <div className="success-message__employee-info">
          <div className="success-message__info-row">
            <span className="success-message__info-label">Full name:</span>
            <span className="success-message__info-value">
              {employeeData.firstName} {employeeData.lastName}
            </span>
          </div>

          <div className="success-message__info-row">
            <span className="success-message__info-label">Department:</span>
            <span className="success-message__info-value">
              {formatDepartment(employeeData.department)}
            </span>
          </div>

          {employeeData.dateOfBirth && (
            <div className="success-message__info-row">
              <span className="success-message__info-label">Date of birth:</span>
              <span className="success-message__info-value">
                {formatDate(employeeData.dateOfBirth)}
              </span>
            </div>
          )}

          {employeeData.startDate && (
            <div className="success-message__info-row">
              <span className="success-message__info-label">Start date:</span>
              <span className="success-message__info-value">
                {formatDate(employeeData.startDate)}
              </span>
            </div>
          )}

          <div className="success-message__info-row">
            <span className="success-message__info-label">Address:</span>
            <span className="success-message__info-value">
              {formatAddress(
                employeeData.street,
                employeeData.city,
                employeeData.state,
                employeeData.zipCode,
              )}
            </span>
          </div>
        </div>

        <div className="success-message__actions">
          <button
            type="button"
            className="success-modal-link success-modal-link--primary"
            onClick={() => {
              if (onViewEmployees) onViewEmployees();
              onClose();
            }}
          >
            View employees
          </button>

          <button
            type="button"
            className="success-modal-btn success-modal-btn--secondary"
            onClick={() => {
              if (onCreateAnother) onCreateAnother();
              onClose();
            }}
          >
            Create another employee
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../../ui/Modal/Modal';
import { defaultErrors } from '../schemas/formSchema';
import { handleFormChange, handleFormSubmit } from '../helpers/formHelpers';

export default function FirstContactPageForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998'
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState(defaultErrors);

  const onSubmit = (e) => {
    handleFormSubmit(e, formData, setErrors, setShowModal, setFormData);
  };

  return (
    <>
      <form 
        onSubmit={onSubmit}
        className="max-w-md mx-auto space-y-6"
      >
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('contact.FirstContactPage.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormChange(e, setFormData)}
            placeholder={t('contact.FirstContactPage.form.name.placeholder')}
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {t(`contact.FirstContactPage.form.name.errors.${errors.name}`)}
            </p>
          )}
        </div>

        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('contact.FirstContactPage.form.phone.label')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleFormChange(e, setFormData)}
            placeholder={t('contact.FirstContactPage.form.phone.placeholder')}
            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200`}
            pattern="[+][0-9]*"
            inputMode="numeric"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {t(`contact.FirstContactPage.form.phone.errors.${errors.phone}`)}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-6 rounded-lg hover:from-red-500 hover:to-red-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          {t('contact.FirstContactPage.form.submit')}
        </button>
      </form>

      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t('contact.FirstContactPage.form.modal.title')}
        text={t('contact.FirstContactPage.form.modal.text', { name: formData.name })}
        name={formData.name}
      />
    </>
  );
}

import { contactTypeOptions } from '../../constants/contactOptions';

function useSendFormContact() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulación de envío de formulario
      console.log('Enviando datos:', values);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert('¡Formulario enviado exitosamente!');
      resetForm();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert(
        'Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return { contactTypeOptions, handleSubmit };
}

export default useSendFormContact;

const emailjs = require('emailjs-com');

const sendEmailReset = async (email, id) => {
  const userId = 'user_KVOCK7O80uujwKoKvck4o'
  const serviceId = 'service_7uvcbh3'
  const templateId = 'template_o2m9xvd'
  const parameters = {
    email: email,
    link: `http://localhost:3000/reset/${id}`
  }
  console.log('parameters', parameters);
  try {
    emailjs.init(userId);
    const enviarEmail = await emailjs.send(serviceId, templateId, parameters).then((response) => {
      console.log('response: ', response);
      alert('Um link para criação de nova senha foi enviado para este email.');
    });
  } catch (error) {
    alert('Erro ao enviar email', error);
  }
}

export { sendEmailReset };
const emailjs = require('emailjs-com');

const sendEmailReset = async (email, id) => {
  const userId = 'user_KVOCK7O80uujwKoKvck4o'
  const serviceId = 'service_7uvcbh3'
  const templateId = 'template_o2m9xvd'
  const accessToken = '1665094401b9b0bea25d4ff12ac8344b';
  const parameters = {
    email: email,
    link: `http://localhost:3000/reset/${id}`
  }
  console.log('parameters', parameters);
  try {
    emailjs.init(userId);
    const enviarEmail = await emailjs.send(serviceId, templateId, parameters).then((response) => {
      console.log('response: ', response)
      alert('mensagem enviada com sucesso!')
    }, (error) => {
      alert('erro ao enviar email', error);
      console.log('enviarEmail', enviarEmail)
    })
  } catch (error) {
    alert('erro ao enviar email - 1', error);
  }
}

export { sendEmailReset };
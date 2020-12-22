const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {

    let data = JSON.parse(event.body)
    const configObject = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }

    let transporter = nodemailer.createTransport(configObject);
    console.log(configObject)

    transporter.sendMail({
        from: 'administracion@vidrieraautlan.com',
        to: 'oscaralonso11@gmail.com',
        subject: `Sitio Web-Mensaje Cliente`,
        html: `
            <h3>Nombre completo: ${data.name} <h3>
            <h3>Correo Electronico: ${data.email}</h3>
            <h3>Asunto: ${data.topic}<h3>
            <p>${data.message}<p>
            `
    }, function (error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });
}
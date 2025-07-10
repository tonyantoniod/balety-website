// Utilidad para probar la configuración de correo electrónico
// Ejecutar con: npx ts-node -r dotenv/config utils/email-test.ts
import nodemailer from "nodemailer"

async function testEmailConfig() {
  console.log("Iniciando prueba de configuración de correo electrónico...")

  // Verificar variables de entorno
  const requiredVars = ["EMAIL_HOST", "EMAIL_USER", "EMAIL_PASSWORD"]
  const missingVars = requiredVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    console.error(`Error: Faltan las siguientes variables de entorno: ${missingVars.join(", ")}`)
    process.exit(1)
  }

  console.log("Variables de entorno verificadas correctamente")
  console.log(`Host: ${process.env.EMAIL_HOST}`)
  console.log(`Usuario: ${process.env.EMAIL_USER}`)

  // Configurar transporte
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
      minVersion: "TLSv1.2",
    },
    debug: true,
    logger: true,
  })

  try {
    // Verificar conexión
    console.log("Verificando conexión con el servidor SMTP...")
    await transporter.verify()
    console.log("✅ Conexión exitosa con el servidor SMTP")

    // Enviar correo de prueba
    console.log("Enviando correo de prueba...")
    const info = await transporter.sendMail({
      from: `"Test Balety" <${process.env.EMAIL_USER}>`,
      to: "ventas@balety.com",
      subject: "Correo de prueba",
      text: "Este es un correo de prueba para verificar la configuración SMTP.",
      html: "<b>Este es un correo de prueba para verificar la configuración SMTP.</b>",
    })

    console.log("✅ Correo enviado correctamente")
    console.log("ID del mensaje:", info.messageId)
    console.log("Respuesta del servidor:", info.response)

    if (info.accepted) console.log("Aceptado por:", info.accepted)
    if (info.rejected) console.log("Rechazado por:", info.rejected)
    if (info.pending) console.log("Pendiente para:", info.pending)

    process.exit(0)
  } catch (error) {
    console.error("❌ Error en la prueba de correo:", error)

    if (error.code === "EAUTH") {
      console.error("Este es un error de autenticación. Verifica tu usuario y contraseña.")
    } else if (error.code === "ESOCKET") {
      console.error(
        "Este es un error de conexión. Verifica el host y puerto, y asegúrate de que no haya un firewall bloqueando la conexión.",
      )
    } else if (error.code === "EENVELOPE") {
      console.error("Este es un error en las direcciones de correo. Verifica el remitente y destinatario.")
    }

    process.exit(1)
  }
}

testEmailConfig()

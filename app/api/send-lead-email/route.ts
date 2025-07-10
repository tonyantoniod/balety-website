import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ success: false, message: "Email service not configured" }, { status: 500 })
    }

    const data = await request.json()
    const { name, company, email, phone, industry, message } = data

    // Validate required fields
    if (!name || !company || !email || !phone || !industry || !message) {
      return NextResponse.json({ success: false, message: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Map industry values to readable names
    const industryMap: Record<string, string> = {
      "home-decor": "Hogar & Decoración",
      construction: "Materiales & Construcción",
      furniture: "Mobiliario de oficina & hogar",
      hygiene: "Higiene personal",
    }

    const industryName = industryMap[industry] || industry

    // Create email content for admin notification
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D1B2A; border-bottom: 3px solid #FFC107; padding-bottom: 10px;">
          🎯 Nuevo Lead de Balety Website
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0D1B2A; margin-top: 0;">Información del Lead</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Nombre:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Empresa:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0D1B2A;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Teléfono:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0D1B2A;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Industria:</td>
              <td style="padding: 8px 0;">${industryName}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #FFC107;">
          <h4 style="color: #856404; margin-top: 0;">Mensaje del Cliente:</h4>
          <p style="color: #856404; margin-bottom: 0;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
          <p>📅 Recibido: ${new Date().toLocaleString("es-MX")}</p>
          <p>🌐 Fuente: Formulario de contacto del sitio web</p>
          <p>💼 Este lead requiere seguimiento prioritario</p>
        </div>
      </div>
    `

    // Create confirmation email content for the lead
    const confirmationEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px 0; border-bottom: 3px solid #FFC107;">
          <h1 style="color: #0D1B2A; margin: 0;">Balety | Distribución y Comercio</h1>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: #0D1B2A;">¡Gracias por contactarnos, ${name}!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Hemos recibido tu solicitud de contacto de <strong>${company}</strong> y queremos agradecerte por tu interés en nuestros productos de <strong>${industryName}</strong>.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0D1B2A; margin-top: 0;">¿Qué sigue?</h3>
            <ul style="color: #333; line-height: 1.8;">
              <li>📞 Uno de nuestros especialistas se pondrá en contacto contigo en las próximas 24 horas</li>
              <li>📋 Analizaremos tus necesidades específicas de producto</li>
              <li>💰 Te proporcionaremos una cotización personalizada</li>
              <li>🤝 Programaremos una reunión para discutir los detalles</li>
            </ul>
          </div>

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #FFC107;">
            <p style="color: #856404; margin: 0;">
              <strong>Recordatorio:</strong> Solo manejamos ventas al por mayor con pedidos mínimos de $500,000 MXN.
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 30px;">
            Si tienes alguna pregunta urgente, no dudes en contactarnos directamente:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${process.env.ADMIN_EMAIL || "tony@balety.com"}" style="color: #0D1B2A;">${process.env.ADMIN_EMAIL || "tony@balety.com"}</a></p>
            <p style="margin: 5px 0;"><strong>📱 Teléfono:</strong> <a href="tel:${process.env.CONTACT_PHONE || "+525512345678"}" style="color: #0D1B2A;">${process.env.CONTACT_PHONE || "+52 55 1234 5678"}</a></p>
          </div>
        </div>

        <div style="background-color: #0D1B2A; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            Balety | Distribución y Comercio<br>
            <em>Comercialización experta. Resultados que escalan.</em>
          </p>
        </div>
      </div>
    `

    console.log("Sending emails via Resend...")

    // Send admin notification email
    const adminEmailResult = await resend.emails.send({
      from: "Balety Website <onboarding@resend.dev>", // Using Resend's test domain
      to: [process.env.ADMIN_EMAIL || "tony@balety.com"],
      subject: `🎯 Nuevo Lead: ${name} de ${company}`,
      html: adminEmailContent,
    })

    if (adminEmailResult.error) {
      console.error("Error sending admin email:", adminEmailResult.error)
      throw new Error(`Failed to send admin notification: ${adminEmailResult.error.message}`)
    }

    console.log("Admin email sent successfully:", adminEmailResult.data?.id)

    // Send confirmation email to the lead
    const confirmationEmailResult = await resend.emails.send({
      from: "Balety <onboarding@resend.dev>", // Using Resend's test domain
      to: [email],
      subject: "Gracias por contactar a Balety - Confirmación recibida",
      html: confirmationEmailContent,
    })

    if (confirmationEmailResult.error) {
      console.error("Error sending confirmation email:", confirmationEmailResult.error)
      // Don't throw error here, admin notification is more important
      console.log("Admin email sent but confirmation email failed")
    } else {
      console.log("Confirmation email sent successfully:", confirmationEmailResult.data?.id)
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      adminEmailId: adminEmailResult.data?.id,
      confirmationEmailId: confirmationEmailResult.data?.id,
    })
  } catch (error: any) {
    console.error("Error in send-lead-email API:", error)

    return NextResponse.json(
      {
        success: false,
        message: `Error al enviar el correo: ${error.message}`,
      },
      { status: 500 },
    )
  }
}

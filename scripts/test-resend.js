import { Resend } from "resend"

async function testResendConfiguration() {
  console.log("🧪 Testing Resend configuration for Balety...")

  // Check required environment variables
  const requiredVars = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  }

  const missingVars = Object.entries(requiredVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key)

  if (missingVars.length > 0) {
    console.error(`❌ Missing required environment variables: ${missingVars.join(", ")}`)
    console.log("\n💡 Required variables:")
    console.log("   - RESEND_API_KEY: Your Resend API key")
    console.log("   - ADMIN_EMAIL: Email where you want to receive leads (tony@balety.com)")
    process.exit(1)
  }

  console.log("✅ Required environment variables are configured")

  // Initialize Resend client
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    console.log("📧 Sending test email to verify Resend integration...")

    const { data, error } = await resend.emails.send({
      from: "Balety Test <onboarding@resend.dev>", // Using Resend's test domain
      to: [process.env.ADMIN_EMAIL],
      subject: "✅ Resend Integration Test - Balety Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 3px solid #FFC107;">
            <h1 style="color: #0D1B2A; margin: 0;">🎉 Resend Integration Success!</h1>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #0D1B2A;">Your Balety website email system is working!</h2>
            
            <div style="background-color: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; margin: 20px 0;">
              <h3 style="color: #155724; margin-top: 0;">✅ Test Results:</h3>
              <ul style="color: #155724; margin: 0;">
                <li>Resend API key is valid</li>
                <li>Email sending is functional</li>
                <li>Admin email (${process.env.ADMIN_EMAIL}) is receiving emails</li>
                <li>Ready for lead capture!</li>
              </ul>
            </div>

            <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #FFC107; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">🚀 Next Steps:</h3>
              <ol style="color: #856404; margin: 0;">
                <li>Test the contact form on your website</li>
                <li>Fill out the form with test data</li>
                <li>Check that you receive both admin notification and customer confirmation emails</li>
              </ol>
            </div>

            <p style="color: #333; margin-top: 30px;">
              <strong>Test Details:</strong><br>
              📅 Timestamp: ${new Date().toISOString()}<br>
              🌐 Environment: ${process.env.NODE_ENV || "development"}<br>
              📧 Admin Email: ${process.env.ADMIN_EMAIL}
            </p>
          </div>

          <div style="background-color: #0D1B2A; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">
              Balety | Distribución y Comercio<br>
              <em>Email system powered by Resend</em>
            </p>
          </div>
        </div>
      `,
      text: `
        Resend Integration Test - Balety Website
        
        Your email system is working correctly!
        
        ✅ Test Results:
        - Resend API key is valid
        - Email sending is functional
        - Admin email (${process.env.ADMIN_EMAIL}) is receiving emails
        - Ready for lead capture!
        
        🚀 Next Steps:
        1. Test the contact form on your website
        2. Fill out the form with test data
        3. Check that you receive both emails
        
        Test Details:
        📅 Timestamp: ${new Date().toISOString()}
        🌐 Environment: ${process.env.NODE_ENV || "development"}
        📧 Admin Email: ${process.env.ADMIN_EMAIL}
      `,
    })

    if (error) {
      console.error("❌ Error sending test email:", error)

      if (error.message?.includes("API key")) {
        console.error("💡 Please check that your RESEND_API_KEY is correct")
      } else if (error.message?.includes("domain")) {
        console.error("💡 Domain issue - using Resend's test domain should work")
      }

      process.exit(1)
    }

    console.log("✅ Test email sent successfully!")
    console.log("📧 Email ID:", data?.id)
    console.log(`📬 Check your inbox at: ${process.env.ADMIN_EMAIL}`)

    console.log("\n🎉 Resend integration test completed successfully!")
    console.log("🚀 Your contact form is ready to capture leads!")
    console.log("\n💡 To test the full system:")
    console.log("   1. Go to your website's contact form")
    console.log("   2. Fill it out with test information")
    console.log("   3. Submit and check for two emails:")
    console.log("      - Admin notification (to you)")
    console.log("      - Customer confirmation (to the email you entered)")
  } catch (error) {
    console.error("❌ Resend test failed:", error)

    if (error.message?.includes("API key")) {
      console.error("💡 Please check that your RESEND_API_KEY is correct")
    } else if (error.message?.includes("rate limit")) {
      console.error("💡 Rate limit reached. Please wait a moment and try again")
    } else {
      console.error("💡 Please check your Resend configuration and try again")
    }

    process.exit(1)
  }
}

// Run the test
testResendConfiguration()

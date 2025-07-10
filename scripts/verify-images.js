import { promises as fs } from "fs"
import path from "path"

const requiredImages = [
  { file: "logo.svg", required: true, description: "Main Balety logo (SVG)" },
  { file: "logo-icon.svg", required: true, description: "Balety icon logo (SVG)" },
  { file: "favicon.ico", required: true, description: "Main favicon for browsers" },
  { file: "favicon-16x16.png", required: true, description: "Small PNG favicon" },
  { file: "favicon-32x32.png", required: true, description: "Medium PNG favicon" },
  { file: "apple-touch-icon.png", required: true, description: "iOS home screen icon" },
  { file: "android-chrome-192x192.png", required: true, description: "Android icon (small)" },
  { file: "android-chrome-512x512.png", required: true, description: "Android icon (large)" },
  { file: "safari-pinned-tab.svg", required: true, description: "Safari pinned tab icon" },
  { file: "og-image.png", required: true, description: "Social media sharing image" },
  { file: "hero-image.png", required: true, description: "Hero section image" },
  { file: "experience-image.png", required: true, description: "Experience section image" },
  { file: "testimonial-image.png", required: true, description: "Testimonials section image" },
  { file: "cta-image.png", required: true, description: "Call-to-action section image" },
  { file: "site.webmanifest", required: true, description: "Web app manifest" },
  { file: "browserconfig.xml", required: false, description: "Windows tile configuration (optional)" },
]

async function verifyImages() {
  console.log("🖼️  Verifying all images for Balety website...\n")

  const publicDir = path.join(process.cwd(), "public")
  let requiredFilesExist = true
  let totalFiles = 0
  let existingFiles = 0

  console.log("📋 Image Inventory:")
  console.log("==================")

  for (const { file, required, description } of requiredImages) {
    const filePath = path.join(publicDir, file)
    totalFiles++

    try {
      const stats = await fs.stat(filePath)
      const sizeKB = Math.round((stats.size / 1024) * 100) / 100
      console.log(`✅ ${file.padEnd(30)} - ${sizeKB.toString().padStart(8)} KB - ${description}`)
      existingFiles++
    } catch (error) {
      if (required) {
        console.log(`❌ ${file.padEnd(30)} - MISSING (REQUIRED) - ${description}`)
        requiredFilesExist = false
      } else {
        console.log(`⚠️  ${file.padEnd(30)} - Missing (optional)   - ${description}`)
        existingFiles++
      }
    }
  }

  console.log(`\n📊 Summary: ${existingFiles}/${totalFiles} image files found`)

  if (requiredFilesExist) {
    console.log("\n🎉 All required images are present and ready!")
    console.log("\n✅ Your website will display properly with:")
    console.log("   🏢 Professional Balety branding")
    console.log("   🌐 Cross-browser favicon support")
    console.log("   📱 Mobile app icons")
    console.log("   📤 Social media sharing images")
    console.log("   🖼️  High-quality content images")
  } else {
    console.log("\n⚠️  Some required images are missing")
    console.log("💡 Make sure to deploy all required image files")
  }

  console.log("\n🧪 Test your images:")
  console.log("   1. Check browser tab icon (favicon)")
  console.log("   2. Bookmark the page and verify bookmark icon")
  console.log("   3. Share on social media and check preview image")
  console.log("   4. Add to home screen on mobile devices")
  console.log("   5. Verify all content images load properly")

  console.log("\n🌐 Online testing tools:")
  console.log("   - https://realfavicongenerator.net/favicon_checker")
  console.log("   - https://www.favicon-generator.org/favicon-checker/")
  console.log("   - https://cards-dev.twitter.com/validator")
}

verifyImages().catch((error) => {
  console.error("Error verifying images:", error.message)
  process.exit(1)
})

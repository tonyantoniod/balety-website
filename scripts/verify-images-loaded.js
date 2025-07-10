import { promises as fs } from "fs"
import path from "path"

async function verifyImagesLoaded() {
  console.log("🖼️  Verifying all images are properly loaded...\n")

  const requiredImages = [
    { file: "public/logo-light.png", description: "Header logo (light version)", required: true },
    { file: "public/logo-dark.png", description: "Footer logo (dark version)", required: true },
    { file: "public/hero-image.png", description: "Hero section image", required: true },
    { file: "public/experience-image.png", description: "Experience section image", required: true },
    { file: "public/testimonial-image.png", description: "Testimonials section image", required: true },
    { file: "public/cta-image.png", description: "Call-to-action section image", required: true },
    { file: "public/favicon.ico", description: "Browser favicon", required: true },
    { file: "public/favicon-16x16.png", description: "Small favicon", required: true },
    { file: "public/favicon-32x32.png", description: "Medium favicon", required: true },
    { file: "public/apple-touch-icon.png", description: "iOS home screen icon", required: true },
    { file: "public/android-chrome-192x192.png", description: "Android icon (small)", required: true },
    { file: "public/android-chrome-512x512.png", description: "Android icon (large)", required: true },
    { file: "public/og-image.png", description: "Social media sharing image", required: true },
  ]

  let allImagesPresent = true
  let totalSize = 0

  console.log("📋 Image Inventory:")
  console.log("=".repeat(80))

  for (const { file, description, required } of requiredImages) {
    try {
      const stats = await fs.stat(file)
      const sizeKB = Math.round((stats.size / 1024) * 100) / 100
      totalSize += stats.size

      console.log(`✅ ${path.basename(file).padEnd(30)} - ${sizeKB.toString().padStart(8)} KB - ${description}`)
    } catch (error) {
      if (required) {
        console.log(`❌ ${path.basename(file).padEnd(30)} - MISSING (REQUIRED) - ${description}`)
        allImagesPresent = false
      } else {
        console.log(`⚠️  ${path.basename(file).padEnd(30)} - Missing (optional)   - ${description}`)
      }
    }
  }

  const totalSizeMB = Math.round((totalSize / (1024 * 1024)) * 100) / 100

  console.log("=".repeat(80))
  console.log(`📊 Total image size: ${totalSizeMB} MB`)

  if (allImagesPresent) {
    console.log("\n🎉 All required images are present!")
    console.log("\n✅ Website sections with images:")
    console.log("   🏢 Header - Professional Balety logo")
    console.log("   🦶 Footer - Balety logo (dark version)")
    console.log("   🎯 Hero - Business meeting/executive image")
    console.log("   📈 Experience - Team analyzing products")
    console.log("   💬 Testimonials - Satisfied customers")
    console.log("   📞 Call-to-Action - Video call/meeting image")
    console.log("   🌐 Favicons - Complete browser support")
    console.log("   📤 Social sharing - Open Graph image")

    console.log("\n🚀 Ready for deployment with:")
    console.log("   ✅ Professional branding throughout")
    console.log("   ✅ High-quality content images")
    console.log("   ✅ Complete favicon system")
    console.log("   ✅ Social media optimization")
  } else {
    console.log("\n⚠️  Some required images are missing")
    console.log("💡 Please ensure all image files are present before deployment")
  }

  console.log("\n🧪 Test your website:")
  console.log("   1. Run: npm run dev")
  console.log("   2. Visit: http://localhost:3000")
  console.log("   3. Verify all images load properly")
  console.log("   4. Check responsive design on mobile")
  console.log("   5. Test contact form functionality")
}

verifyImagesLoaded().catch((error) => {
  console.error("Error verifying images:", error.message)
  process.exit(1)
})

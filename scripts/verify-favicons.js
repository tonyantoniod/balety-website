import { promises as fs } from "fs"
import path from "path"

const requiredFavicons = [
  { file: "favicon.ico", required: true, description: "Main favicon for browsers" },
  { file: "favicon-16x16.png", required: true, description: "Small PNG favicon" },
  { file: "favicon-32x32.png", required: true, description: "Medium PNG favicon" },
  { file: "apple-touch-icon.png", required: true, description: "iOS home screen icon" },
  { file: "android-chrome-192x192.png", required: true, description: "Android icon (small)" },
  { file: "android-chrome-512x512.png", required: true, description: "Android icon (large)" },
  { file: "safari-pinned-tab.svg", required: false, description: "Safari pinned tab icon (optional)" },
  { file: "og-image.png", required: true, description: "Social media sharing image" },
  { file: "site.webmanifest", required: true, description: "Web app manifest" },
  { file: "browserconfig.xml", required: false, description: "Windows tile configuration (optional)" },
]

async function verifyFavicons() {
  console.log("🔍 Verifying favicon files for Balety website...\n")

  const publicDir = path.join(process.cwd(), "public")
  let requiredFilesExist = true
  let totalFiles = 0
  let existingFiles = 0

  for (const { file, required, description } of requiredFavicons) {
    const filePath = path.join(publicDir, file)
    totalFiles++

    try {
      const stats = await fs.stat(filePath)
      const sizeKB = Math.round((stats.size / 1024) * 100) / 100
      console.log(`✅ ${file} - ${sizeKB} KB - ${description}`)
      existingFiles++
    } catch (error) {
      if (required) {
        console.log(`❌ ${file} - Missing (REQUIRED) - ${description}`)
        requiredFilesExist = false
      } else {
        console.log(`⚠️  ${file} - Missing (optional) - ${description}`)
        existingFiles++
      }
    }
  }

  console.log(`\n📊 Summary: ${existingFiles}/${totalFiles} favicon files found`)

  if (requiredFilesExist) {
    console.log("\n🎉 All required favicon files are present!")
    console.log("✅ Your website logo will display properly in:")
    console.log("   - Browser tabs and bookmarks")
    console.log("   - iOS home screen shortcuts")
    console.log("   - Android home screen shortcuts")
    console.log("   - Social media sharing previews")
    console.log("   - Progressive Web App installations")
  } else {
    console.log("\n⚠️  Some required favicon files are missing")
    console.log("💡 Make sure to deploy all required favicon files")
  }

  console.log("\n🧪 Test your favicons:")
  console.log("   1. Check browser tab icon")
  console.log("   2. Bookmark the page and check bookmark icon")
  console.log("   3. Share on social media and check preview image")
  console.log("   4. Add to home screen on mobile devices")

  console.log("\n🌐 Online favicon checkers:")
  console.log("   - https://realfavicongenerator.net/favicon_checker")
  console.log("   - https://www.favicon-generator.org/favicon-checker/")
}

verifyFavicons().catch((error) => {
  console.error("Error verifying favicons:", error.message)
  process.exit(1)
})

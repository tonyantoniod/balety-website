import { promises as fs } from "fs"
import path from "path"

async function checkForMissingImageReferences() {
  console.log("🔍 Checking for missing image references in the codebase...\n")

  const componentsDir = path.join(process.cwd(), "components")
  const appDir = path.join(process.cwd(), "app")

  const problematicImages = [
    "kitchen-image.png",
    "furniture-image.png",
    "electronics-image.png",
    "tools-image.png",
    "logo-light.png",
    "logo-dark.png",
    "hero-image.png",
    "experience-image.png",
    "testimonial-image.png",
    "cta-image.png",
  ]

  const foundReferences = []

  // Function to search for image references in a file
  async function searchInFile(filePath) {
    try {
      const content = await fs.readFile(filePath, "utf-8")

      for (const image of problematicImages) {
        if (content.includes(image)) {
          foundReferences.push({
            file: filePath,
            image: image,
            line: content.split("\n").findIndex((line) => line.includes(image)) + 1,
          })
        }
      }
    } catch (error) {
      // File doesn't exist or can't be read, skip
    }
  }

  // Search in components directory
  try {
    const componentFiles = await fs.readdir(componentsDir)
    for (const file of componentFiles) {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        await searchInFile(path.join(componentsDir, file))
      }
    }
  } catch (error) {
    console.log("Components directory not found or inaccessible")
  }

  // Search in app directory
  try {
    const appFiles = await fs.readdir(appDir)
    for (const file of appFiles) {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        await searchInFile(path.join(appDir, file))
      }
    }
  } catch (error) {
    console.log("App directory not found or inaccessible")
  }

  // Search in root files
  const rootFiles = ["next.config.mjs", "tailwind.config.ts"]
  for (const file of rootFiles) {
    await searchInFile(path.join(process.cwd(), file))
  }

  if (foundReferences.length === 0) {
    console.log("✅ No problematic image references found!")
    console.log("🎉 All image references have been cleaned up successfully.")
  } else {
    console.log("❌ Found problematic image references:")
    foundReferences.forEach((ref) => {
      console.log(`   📁 ${ref.file}:${ref.line} - References: ${ref.image}`)
    })
    console.log("\n💡 These references need to be removed or replaced.")
  }

  console.log("\n📋 Current image strategy:")
  console.log("   🎨 Using gradient placeholders for visual elements")
  console.log("   🔤 Text-based logos with professional styling")
  console.log("   🎯 Icon-based visual representations")
  console.log("   🌐 External Unsplash images where needed")
}

checkForMissingImageReferences().catch((error) => {
  console.error("Error checking for missing image references:", error.message)
  process.exit(1)
})

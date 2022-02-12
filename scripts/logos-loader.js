const fs = require('fs')
const path = require('path')
const glob = require('glob')


const folder = path.resolve('public/images/logos')
const pattern = path.resolve(folder, '**/*.svg')
const outputPath = path.resolve('src/logos.ts')

const generate = () => {
  const filePaths = glob.sync(pattern)
  const fileNames = filePaths.map((filePath) => filePath.replace(/.+images\/logos\//, '').replace('.svg', ''))
  const content = `export default [ '${fileNames.join("', '")}' ]`

  fs.writeFileSync(outputPath, content)
}

generate()

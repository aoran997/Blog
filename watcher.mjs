import chokidar from 'chokidar'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const watcher = chokidar.watch('./content', {
  ignored: './content/list',
})
let t = 0
watcher.on('all', () => {
  let str = ''
  clearInterval(t)
  t = setTimeout(() => {
    fs.readdirSync('./content/doc').forEach((fileContent) => {
      const { data } = matter(
        fs.readFileSync(path.join('./content/doc', fileContent))
      )
      str += `${data.date} doc/${fileContent.replace('.md', '')} ${
        data.title
      }\n`
    })
    fs.writeFileSync('./content/list', str)
  }, 1000)
})

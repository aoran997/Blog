import chokidar from 'chokidar'
import fs from 'fs'
import matter from 'gray-matter'

const watcher = chokidar.watch('./content', {
  ignored: 'list',
  persistent: true,
})
watcher.on('all', (event, path) => {
  let str = ''
  console.log(path)
  fs.readdirSync('./content/docs').forEach((fileContent) => {
    const { data } = matter(fileContent)
    str += `${data.date} ${path.replace('content/', '/')} ${data.title}\n`
  })
  fs.writeFileSync('./content/list', str)
})

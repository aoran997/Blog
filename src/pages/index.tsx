import Image from 'next/image'
import icon from '@/assets/icon.jpeg'
import githubIcon from '@/assets/github-mark.svg'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { GetServerSideProps } from 'next'

export default function Home({
  titles,
}: {
  titles: { title: string; date: string; name: string }[]
}) {
  'use cache'

  return (
    <main className="bg-white">
      <div className="px-4">
        <section className="text-center">
          <div className="p-4 mt-2 shadow-md border-1 border-gray-200 rounded-md inline-block">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4 flex items-center justify-center gap-2">
              <Image src={icon} alt="icon" className="w-16 h-16 rounded-md" />
              <div>
                Aoran&apos;s Blog
                <div className="group text-sm text-gray-500 hover:text-gray-700 mt-1">
                  <Link
                    className="flex items-center justify-start gap-1"
                    href="https://github.com/aoran997"
                  >
                    <div
                      className="w-4 h-4 bg-gray-500 group-hover:bg-gray-700 transition-colors"
                      style={{
                        WebkitMaskImage: `url(${githubIcon.src})`,
                        WebkitMaskSize: 'cover',
                        maskImage: `url(${githubIcon.src})`,
                        maskSize: 'cover',
                      }}
                    />
                    Github
                  </Link>
                </div>
              </div>
            </h1>
            <p className="text-md text-gray-600 text-center max-w-2xl">
              在这里，我记录一些工作日志以及学习见解
            </p>
          </div>
        </section>
        <section className="flex flex-row justify-center items-center gap-4 mt-4">
          {titles.map((v, index) => {
            return (
              <Link
                href={'/doc/' + v.name}
                key={index}
                popoverTarget="popover"
                className="w-1/2 text-start rounded-md border-1 border-gray-200 p-1 hover:shadow-md"
              >
                <span>{v.date}</span>
                <span className="ml-2">{v.title}</span>
              </Link>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dirPath = path.join(process.cwd(), 'content', 'docs')
  const filenames = fs.readdirSync(dirPath)
  const titles = filenames.map((filename) => {
    const fileContent = fs.readFileSync(path.join(dirPath, filename), 'utf-8')
    const { data } = matter(fileContent)
    return { ...data, name: filename.replace('.md', '') }
  })
  return {
    props: {
      titles,
    },
  }
}

import path from 'path'
import fs from 'fs'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Page({
  processedContent,
  title,
  date,
}: {
  processedContent: string
  title: string
  date: string
}) {
  return (
    <article className="max-w-[80%] p-x-[10%] mx-auto py-10">
      <h1 className="text-primary-500 font-bold text-2xl">{title}</h1>
      <p className="text-gray-500">
        <Link href={'/'}>ZouAoran</Link> {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />
    </article>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context.query.slug
  const filePath = path.join(process.cwd(), 'content', 'docs', `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const processedContent = await remark().use(html).process(content)
  return {
    props: {
      processedContent: processedContent.toString(),
      title: data.title,
      date: data.date,
    },
  }
}

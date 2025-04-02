import path from 'path'
import fs from 'fs'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Page(data: {
  processedContent: string
  title: string
  date: string
  next: string
  prev: string
  nextTitle: string
  prevTitle: string
}) {
  return (
    <article className="max-w-[80%] md:w-xl lg:w-2xl xl:w-3xl p-x-[10%] mx-auto py-10">
      <h1 className="text-primary-500 font-bold text-2xl">{data.title}</h1>
      <p className="text-gray-500">
        <Link href={'/'}>ZouAoran</Link> {data.date}
      </p>
      <div className="h-[1px] bg-primary-200 w-full my-5 scale-x-110"></div>
      <div
        dangerouslySetInnerHTML={{ __html: data.processedContent.toString() }}
      />
      {(data.next || data.prev) && (
        <div className="flex w-full justify-around mt-4 mb-2">
          {data.prev && (
            <Link
              href={data.prev}
              className="resolve group hover:text-primary-500"
            >
              上一篇: {data.prevTitle}
              <div className="h-[1px] w-full scale-x-0 bg-primary-300 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></div>
            </Link>
          )}
          {data.next && (
            <Link
              href={data.next}
              className="resolve group hover:text-primary-500"
            >
              下一篇: {data.nextTitle}
              <div className="h-[1px] w-full scale-x-0 bg-primary-300 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></div>
            </Link>
          )}
        </div>
      )}
    </article>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context.query.slug
  const filePath = path.join(process.cwd(), 'content', 'doc', `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const processedContent = await remark().use(html).process(content)
  return {
    props: {
      processedContent: processedContent.toString(),
      title: data.title,
      date: data.date,
      next: data.next || '',
      prev: data.prev || '',
      nextTitle: data.nextTitle || '',
      prevTitle: data.prevTitle || '',
    },
  }
}

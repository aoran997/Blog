export default function Page() {
  return <div>hello</div>
}

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const slug = context.query.slug
//   const filePath = path.join(process.cwd(), 'content', 'docs', `${slug}.md`)
//   const fileContent = fs.readFileSync(filePath, 'utf-8')
//   const { data, content } = matter(fileContent)
//   const processedContent = await remark().use(html).process(content)
//   return {
//     props: {
//       processedContent: processedContent.toString(),
//       title: data.title,
//       date: data.date,
//     },
//   }
// }

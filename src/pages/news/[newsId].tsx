import { useRouter } from 'next/router'

//our-domain.com/news/anything

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query.newsId)

  return (
    <h1>The Detail Page</h1>
  )
}

export default DetailPage
import { CardItemComics } from '@/components/comics/CardItemComics'

const findOneComics = (id: string) => {
  return fetch(`http://localhost:3044/${id}`, {
    next: {
      revalidate: 30
    }
  }).then((resp) => resp.json())
}

async function ComicsId ({ params }:any) {
  const { id } = params
  const data = await findOneComics(id)
  return (
    <CardItemComics {...data} />
  )
}

export default ComicsId

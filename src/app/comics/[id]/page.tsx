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
  console.log('TCL: data', data)
  return (
    <CardItemComics description={data.description} image={data.image} title={data.title} likeCount='Like' relatedImages={data.images} />
  )
}

export default ComicsId

'user client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface props {
    images: string
    title: string,
    id: number,
    price: any[]
}

export const Card: FC<props> = ({ id, images, title, price }) => {
  //   const router = Router
  return (
    <div className='w-full sm:w-1/2 xl:w-1/4 px-3 mb-14 xl:mb-0'>
      <div className='xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl relative'>
        <Link className='block mx-auto max-w-max' href={`/comics/${id}`}>
          <Image
            className='object-cover object-center absolute top-0 left-0 w-full h-full'
            src={images}
            width={0}
            height={0}
            sizes='100vw'
            alt=''
          />
        </Link>
      </div>
      <Link href={`/comics/${id}`}>
        <p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>
          {title}
        </p>
      </Link>
      <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
        <span className='text-base pr-2'>$</span>
        <span>{price[0].price}</span>
      </p>
    </div>

  )
}

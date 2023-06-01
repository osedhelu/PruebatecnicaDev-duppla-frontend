import React, { FC } from 'react'
import { ImagesCardComics } from './ImagesCardComics'

interface props {
  image: string
  relatedImages: string[]
  title: string
  description: string
  likeCount: string
}
export const CardItemComics: FC<props> = ({
  image,
  relatedImages,
  title,
  description,
  likeCount
}) => {
  return (
    <section>
      <div className='relative mx-auto max-w-screen-xl px-4 py-8'>
        <div>
          <h1 className='text-2xl font-bold lg:text-3xl'>{title}</h1>

          <p className='mt-1 text-sm text-gray-500'>SKU: #012345</p>
        </div>

        <div className='grid gap-8 lg:grid-cols-4 lg:items-start'>
          <div className='lg:col-span-3'>
            <ImagesCardComics image={image} relatedImages={relatedImages} />

          </div>

          <div className='lg:sticky lg:top-0'>
            <form className='space-y-4 lg:pt-8'>
              <div className='rounded border bg-white p-4'>
                <p className='text-sm text-black'>
                  <span className='block'>
                    {description}
                  </span>

                </p>
              </div>

              <div>
                <p className='text-xl font-bold'>$19.99</p>
              </div>

              <button
                type='submit'
                className='w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white'
              >
                Me gusta
              </button>

              <button
                type='button'
                className='w-full rounded border border-gray-300 bg-blue-800 px-6 py-3 text-sm font-bold uppercase tracking-wide'
              >
                compartir
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import React, { FC } from 'react'

interface props {
    image: string, relatedImages: string[], title: string, description: string, likeCount: string
}
export const CardItemComics: FC<props> = ({ image, relatedImages, title, description, likeCount }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full sm:w-1/2 xl:w-1/4 px-3 mb-14 xl:mb-0'>
        <div className='absolute top-0 left-0 w-full h-full object-cover rounded-3xl'>
          <Image
            className='object-cover object-center absolute top-0 left-0 w-full h-full'
            src={image}
            width={0}
            height={0}
            sizes='100vw'
            alt=''
          />
        </div>
        <div className='absolute top-0 left-0 w-full h-full flex items-center'>
          {relatedImages.map((relatedImage, index) => (
            <Image
              key={index}
              src={relatedImage}
              width={400}
              height={900}
              sizes='100vw'
              alt={`Related ${index + 1}`}
              className='w-full h-full '
            />
          ))}
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex items-center'>
        <div className='w-full'>
          <div className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>
            {title}
          </div>
          <div className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>
            <span className='text-base pr-2'>{description}</span>
          </div>
        </div>
        <div className='w-full flex items-center justify-between'>
          <span className='text-blue-500 font-medium'>{likeCount}</span>
          <button className='bg-blue-500 text-white font-medium px-3 py-1 rounded-sm'>
            Me gusta
          </button>
        </div>
      </div>
    </div>
  )
}

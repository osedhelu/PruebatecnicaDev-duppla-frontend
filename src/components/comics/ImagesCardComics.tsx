'use client'
import Image from 'next/image'
import { FC, useState } from 'react'

interface props {image: string, relatedImages: string[] }

export const ImagesCardComics:FC<props> = ({ image, relatedImages }) => {
  const [imageSrc, setImageSrc] = useState(image)

  const convertImage = (url: string) => {
    setImageSrc(url)
  }
  return (
    <>
      <div className='relative mt-4'>
        <Image
          width={249}
          height={386}
          alt='Tee'
          src={imageSrc}
          className='h-72 w-full rounded-xl object-cover lg:h-[940px]'
        />

        <div className='absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white'>
          <svg
            className='h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
            />
          </svg>

          <span className='ms-1.5 text-xs'> Hover to zoom </span>
        </div>
      </div>

      <ul className='mt-1 flex gap-1'>
        {relatedImages.map((img, index) => (
          <li key={index} onClick={() => { convertImage(img) }} className='cursor-pointer'>
            <Image
              width={400}
              height={600}
              alt='Tee'
              src={img}
              className='h-16 w-16 rounded-md object-cover'
            />
          </li>
        ))}
      </ul>
    </>
  )
}

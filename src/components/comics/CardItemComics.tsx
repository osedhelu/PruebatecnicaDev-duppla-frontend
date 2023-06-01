import React, { FC } from 'react'
import { ImagesCardComics } from './ImagesCardComics'
import { ComicsDto } from './dto/comics.dto'

export const CardItemComics: FC<ComicsDto> = ({ creators, title, description, image, images, series, year, id }) => {
  return (
    <section>
      <div className='relative mx-auto max-w-screen-xl px-4 py-8'>
        <div>
          <h1 className='text-2xl font-bold lg:text-3xl'>{title}</h1>

          <p className='mt-1 text-sm text-gray-500'>SKU: # {id}</p>
        </div>

        <div className='grid gap-8 lg:grid-cols-4 lg:items-start'>
          <div className='lg:col-span-3'>
            <ImagesCardComics image={image} relatedImages={images} />
          </div>

          <div className='lg:sticky lg:top-0'>

            <form className='mt-8'>
              <fieldset>
                <legend className='mb-1 text-sm font-medium'>Creadores</legend>

                <div className='flex flex-wrap gap-1'>
                  {
                    creators.map((e, index) => (
                      <label key={index} htmlFor='color_tt' className='cursor-pointer'>
                        <input
                          type='radio'
                          name='color'
                          id='color_tt'
                          className='peer sr-only'
                        />

                        <span
                          className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'
                        >
                          {e.name} | {e.role}
                        </span>
                      </label>
                    ))
                  }
                </div>
              </fieldset>
              <fieldset className='mt-4'>
                <legend className='mb-1 text-sm font-medium'>Series</legend>
                <div className='flex flex-wrap gap-1 '>
                  <label htmlFor='color_tt' className='cursor-pointer'>
                    <input
                      type='radio'
                      name='color'
                      id='color_tt'
                      className='peer sr-only'
                    />

                    <span
                      className='group inline-block px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'
                    >
                      {series}
                    </span>
                  </label>
                </div>
              </fieldset>

              <fieldset className='mt-4'>
                <legend className='mb-1 text-sm font-medium'>Año de Creación.</legend>

                <div className='flex flex-wrap gap-1'>
                  <label htmlFor='size_xs' className='cursor-pointer'>
                    <input
                      type='radio'
                      name='size'
                      id='size_xs'
                      className='peer sr-only'
                    />

                    <span
                      className='group   items-center justify-center text-xs font-medium peer-checked:bg-black peer-checked:text-white'
                    >
                      {year}
                    </span>
                  </label>

                </div>
              </fieldset>

              <div className='mt-8 flex gap-4'>
                <div>
                  <label htmlFor='quantity' className='sr-only'>Qty</label>

                  <input
                    type='number'
                    id='quantity'
                    min='1'
                    value='1'
                    className='w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                  />
                </div>

                <button
                  type='submit'
                  className='block bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500'
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

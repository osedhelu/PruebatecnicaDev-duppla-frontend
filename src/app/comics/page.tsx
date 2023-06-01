import { Card } from '@/components/comics/Card'
import React from 'react'

const getComics = () => {
  return fetch('http://localhost:3044', { cache: 'no-store' }).then(resp => resp.json())
}
async function Comics () {
  const data = await getComics()
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='bg-blueGray-100'>
        <div className='container px-4 mx-auto'>
          <h2 className='mb-14 xl:mb-24 text-9xl xl:text-10xl font-heading font-medium text-center'>
            Comics Marvel
          </h2>
          <div className='flex items-center'>
            <a
              className='hidden md:block pr-6 hover:text-darkBlueGray-400'
              href='#'
            >
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.21015 10.4594C7.59661 10.8128 7.59661 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.0966174 6.28579 -0.0966173 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880364 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z'
                  fill='currentColor'
                />
              </svg>
            </a>
            <React.Suspense fallback={<div> ... loading</div>}>
              <div className='flex flex-wrap -mx-0'>
                {data.map((resp: any, index: any) => (
                  <Card key={index} {...resp} />
                ))}
              </div>
            </React.Suspense>
            <a
              className='hidden md:block pl-6 hover:text-darkBlueGray-400'
              href='#'
            >
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
          <div className='md:hidden flex justify-center mt-20'>
            <a className='mx-14 hover:text-darkBlueGray-400' href='#'>
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.21015 10.4594C7.59661 10.8128 7.59661 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.0966174 6.28579 -0.0966173 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880364 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z'
                  fill='currentColor'
                />
              </svg>
            </a>
            <a className='mx-14 hover:text-darkBlueGray-400' href='#'>
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comics

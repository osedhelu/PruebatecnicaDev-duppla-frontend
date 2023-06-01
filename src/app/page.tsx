import Link from 'next/link'

export default function Home () {
  return (
    <section className=''>
      <div
        className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'
      >
        <div className='mx-auto max-w-xl text-center'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Oscar Herrera
            <strong className='font-extrabold text-red-700 sm:block'>
              Full Stack developer
            </strong>
          </h1>

          <p className='mt-4 sm:text-xl/relaxed'>
            en el presente realize una prueba `Desarrolle una aplicación web responsive que consulte los de comics del UMC y los liste
            alfabéticamente indicando por item titulo, imagen, creadores, series y año de creación.
            Los registros consultados deben ser guardados en una base de datos (la que prefiera) con
            un timespan.`
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link
              className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
              href='/comics'
            >
              prueba MARVEL
            </Link>

            <a
              className='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
              href='https://www.linkedin.com/in/osedhelu/'
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

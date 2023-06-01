 interface Creator {
    name: string
    role: string
  }

export interface ComicsDto {
    id: string,
    title: string
    description: string
    creators: Creator[]
    series: string
    year: string
    image: string
    images: string[]
  }

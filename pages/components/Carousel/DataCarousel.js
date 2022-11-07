import Image from "next/image";
import Image4 from '../../../assets/png/carousel1.png'
import Image2 from '../../../assets/png/carousel2.png'
import Image3 from '../../../assets/png/carousel3.png'
import Image1 from '../../../assets/png/carousel4.png'

export const DataCarousel= [
  {
    id: 1,
    name: 'Nulla porttitor',
    title: 'Orci varius natoque penatibus',
    img: <Image src={Image1} alt={'image carousel'} />
  },
  {
    id: 2,
    name: 'Donec scelerisque',
    title: 'Vestibulum nec tempor elit porta quam mauris ',
    img: <Image src={Image2} alt={'image carousel'} />
  },
  {
    id: 3,
    name: 'Duis eget tempus',
    title: 'Duis quis dapibus leo, non iaculis felis',
    img: <Image src={Image3} alt={'image carousel'} />
  },
  {
    id: 4,
    name: 'Donec scelerisque',
    title: 'Maecenas non ligula quis turpis',
    img: <Image src={Image4} alt={'image carousel'} />
  },
]
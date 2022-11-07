import Image from "next/image";
import Image1 from '../../../assets/png/image1.png'
import Image2 from '../../../assets/png/image2.png'

export const dataPost = [
  {
    id: 1,
    tag: 'Lorem morbi',
    category: 2,
    title: 'Vestibulum nec tempor elit. Duis porta quam mauris, id dapibus urna laoreet eu. Duis quis dapibus leo, non iaculis felis.',
    date: 'May 27, 2021',
    img: null,
  },
  {
    id: 2,
    tag: 'Lorems',
    category: 1,
    title: 'Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.',
    date: 'May 21, 2021',
    img: <Image src={Image2} alt={'image post'} />
  },
  {
    id: 3,
    tag: 'Lorems',
    category: 1,
    title: 'Nulla porttitor eros nisi, ut semper nunc sagittis vel. Nulla nec tellus sagittis, pulvinar tortor id.',
    date: 'May 24, 2021',
    img: <Image src={Image1} alt={'image post'} />
  },

  {
    id: 4,
    tag: 'Lorem morbi',
    category: 2,
    title: 'Praesent tristique augue et urna aliquam, non pellentesque neque tincidunt aliquam finibus urna et consectetur',
    date: 'May 16, 2021',
    img: null,
  },
]
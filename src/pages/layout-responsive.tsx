import Image from 'next/image'
import mountains from '../public/og.png'

const Responsive = () => (
  <div>
    <h1>Image Component With Layout Responsive</h1>
    <Image
      alt="Mountains"
      src={mountains}
      layout="responsive"
      width={700}
      height={475}
    />
  </div>
)

export default Responsive

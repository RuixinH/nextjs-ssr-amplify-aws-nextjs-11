import Image from 'next/image'
import mountains from '/public/og.png'

const Fill = () => (
  <div>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image alt="Mountains" src={mountains} layout="fill" objectFit="cover" />
    </div>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="Mountains"
        src={mountains}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="Mountains"
        src={mountains}
        layout="fill"
        objectFit="none"
        quality={100}
      />
    </div>
  </div>
)

export default Fill

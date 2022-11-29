import Image from 'next/image'
import sample from '/public/og.png'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={sample}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
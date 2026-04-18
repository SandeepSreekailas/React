import { useState } from 'react'
import '../App.css'
import Admin from '../components/Admin'
import Button from '../components/Button'
import LoginPage from '../components/LoginPage'


const data = {
  name: 'L Messi',
  imgurl: 'https://www.vedantu.com/seo/content-images/a2de1c30-d35c-40f2-8bbf-1c8905273394_compressed_2.jpg',
  imgsize: 90
}

const status = true


function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      {/* Writing markup with JSX */}
      <h1>This is a Button</h1>
      <Button />
      <br /><br />
      {/* Conditional rendering  */}
      <div>
        {status ? (<Admin />) :
          <LoginPage />}
      </div>


      {/* Displaying data */}
      <h1>{data.name}</h1>
      <img
        className='avatar'
        src={data.imgurl}
        alt={`photo of ${data.name}`}
        style={{
          width: data.imgsize,
          height: data.imgsize
        }}
      />

      


    </>
  )
}

export default Home

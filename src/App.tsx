import { useState } from 'react'
import reactLogo from './assets/react.svg'
import house from './assets/house.jpg'
import acorn from './assets/acorn.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={house} className="House" alt="House" />
      </div>
      <h1>Casais Maduros</h1>
      <p>
      Welcome to Casais Maduros, your exquisite retreat nestled in the picturesque landscapes of Portugal. This enchanting rental villa offers a perfect blend of tranquility, luxury, and breathtaking natural beauty. Situated in a serene setting, Casais Maduros provides an idyllic escape for those seeking a rejuvenating vacation.

        As you step into this stunning villa, you'll be greeted by an ambiance of elegance and comfort. The interior spaces are thoughtfully designed, boasting a harmonious fusion of contemporary style and authentic Portuguese charm. The tastefully decorated living areas offer ample space for relaxation, featuring plush furnishings and large windows that invite abundant natural light and provide captivating views of the surrounding countryside.
        <br />
        <br />
        Casais Maduros boasts multiple bedrooms, each designed to ensure a peaceful night's sleep and a restful stay. The master suite exudes opulence, complete with a luxurious en-suite bathroom, allowing you to indulge in ultimate comfort and privacy. The additional bedrooms are equally inviting, offering cozy and intimate spaces for your guests.
        <br />
        <br />

        The villa's fully equipped kitchen provides a delightful space for culinary adventures. Whether you're a seasoned chef or an aspiring cook, you'll find everything you need to prepare delicious meals using fresh, locally sourced ingredients. The dining area adjacent to the kitchen provides an elegant setting for enjoying your culinary creations with loved ones.
        <br />
        <br />

        Stepping outside, you'll discover the villa's magnificent outdoor spaces. A spacious terrace welcomes you to bask in the warm Portuguese sun, while a private swimming pool invites you to take refreshing dips and unwind in blissful solitude. The meticulously landscaped gardens surrounding the property offer a serene environment, perfect for leisurely strolls or finding a quiet spot to read a book.
        <br />
        <br />

        Casais Maduros is ideally located, offering convenient access to nearby attractions and activities. Whether you wish to explore the charming local villages, embark on adventurous hiking trails, or simply savor the renowned Portuguese cuisine at nearby restaurants, you'll find a myriad of options to suit your preferences.
        <br />
        <br />
        At Casais Maduros, every detail has been carefully considered to ensure a memorable stay. From the tranquil surroundings to the luxurious amenities, this rental villa in Portugal is an oasis of serenity and sophistication. Come and experience the allure of Casais Maduros, and create cherished memories that will last a lifetime.
      </p>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App

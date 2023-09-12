// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './componants/Blogs/Blogs'
import Bookmarks from './componants/Header/Bookmarks/Bookmarks'
import Header from './componants/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <Header></Header>

    <div className='md:flex'>

    <Blogs></Blogs>
    <Bookmarks></Bookmarks>

    </div>
      
    </>
  )
}

export default App

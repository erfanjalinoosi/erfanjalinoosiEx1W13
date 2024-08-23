// import { useState } from 'react'
// import './App.css'
import Header from './components/Header' 
import styles from './App.module.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.container}>
        <Header/>
      </div>
    </>
  )
}

export default App

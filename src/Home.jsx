import homeImg from './assets/murray_state_campus.webp'
import './Home.css'
import NavBar from './NavBar'

function Home() {  

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <header>Cool Website About MSU!</header>
        <img src={homeImg} alt="Murray State Campus" />
        <footer>This has been, a cool website about MSU!</footer>
      </div>
    </div>
  )
}

export default Home

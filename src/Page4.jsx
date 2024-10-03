import page4Img from './assets/page4.webp'
import NavBar from './NavBar'

function Page4() {  

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <header>Page 4 of a Cool Website About MSU!</header>
        <img src={page4Img} alt="Murray State Campus" />
        <footer>This has been, Page 4 of a  a cool website about MSU!</footer>
      </div>
    </div>
  )
}

export default Page4
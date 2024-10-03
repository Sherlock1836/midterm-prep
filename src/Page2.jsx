import page2Img from './assets/page2.webp'
import NavBar from './NavBar'

function Page2() {  

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <header>Page 2 of a Cool Website About MSU!</header>
        <img src={page2Img} alt="Murray State Campus" />
        <footer>This has been, Page 2 of a a cool website about MSU!</footer>
      </div>
    </div>
  )
}

export default Page2
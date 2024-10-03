import page1Img from './assets/page1.webp'
import NavBar from './NavBar'

function Page1() {  

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <header>Page 1 of a Cool Website About MSU!</header>
        <img src={page1Img} alt="Murray State Campus" />
        <footer>This has been, Page 1 of a cool website about MSU!</footer>
      </div>
    </div>
  )
}

export default Page1
import page3Img from './assets/page3.webp'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Page3() {  
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate();

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <header>Page 3 of a Cool Website About MSU!</header>
        <div style={{marginBottom: '1%'}} >
          <input 
            type="text" 
            placeholder="What city is MSU in?" 
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={() => {if(inputValue == 'Murray') {navigate('/page4')}}} style={{}}>Submit</button>
        </div>
        <img src={page3Img} alt="Murray State Campus" />
        <footer>This has been, Page 3 of a cool website about MSU!</footer>
      </div>
    </div>
  )
}

export default Page3
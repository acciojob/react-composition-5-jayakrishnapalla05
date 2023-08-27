
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [tab,setTab]=useState("Tab 1");
const [tab2,setTab2]=useState("Tab A");

function handleClick(){
  setTab(e.target.innerText);
}
function handleClick2(){
  setTab2(e.target.innerText);
}



  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li onClick={handleClick}>Tab 1</li>
           <li onClick={handleClick}>Tab 2</li>
            <li onClick={handleClick}>Tab 3</li>

        </ul>
        <p>Content for {tab}</p>
        <ul>
          <li onClick={handleClick2}>Tab A</li>
          <li onClick={handleClick2}>Tab B</li>
          <li onClick={handleClick2}>Tab C</li>
        </ul>
        <p>Content for {tab2}</p>
    </div>
  )
}

export default App

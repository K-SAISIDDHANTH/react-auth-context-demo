// import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useContext, createContext, useState, useRef } from "react";
import './App.css';

const NameContext = createContext();

function NameProvider({ children }) {
  const [namee, setName] = useState("");

  return <NameContext.Provider value={{ namee: namee, setName: setName }}>
    {children}
  </NameContext.Provider>
}
function App() {


  return (
    <>
      <NameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/Dashboard" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </NameProvider>
    </>
  )
}

//HomeComponenet
function Home() {
  const { namee } = useContext(NameContext)
  const navigate = useNavigate();
  function home() {
    navigate("/")
  }

  return (
    <>
      <div style={{ marginTop: "0px", padding: 0, color: "purple", backgroundColor: "#c0e6c0", height: "100vh" }}>
        {/* //Nav Bar */}
        <div style={{ margin: "0px", width: "100vw", height: "50px", backgroundColor: "#81c784", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          <h2>Auth System Demo</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h3 style={{ marginLeft: "15px" }}>This is a Home DashBoard page ,Welcome back {namee}</h3>
            <button onClick={home} style={{ color: "#81c784", backgroundColor: "white", borderRadius: "10px", border: "2px white solid", marginLeft: "17px", marginRight: "10px", padding: "6px" }}>Go Back</button>
          </div>






        </div>


        <div style={{ width: "100vw", height: "30px", bakgroundColor: "grey", color: "black" }}>
          <h4>Using Context api</h4>
          <button type="radiobutton"></button>
        </div>



      </div>


    </>
  )
}
// function Styling(){
//   return(
//     <>

//     <div style={{}}></div>


//     </>
//   )
// }
function Login() {
  const ref = useRef();
  const newref = useRef();
  const { namee, setName } = useContext(NameContext);
  const navigate = useNavigate();
  const styling = {
    margin: 10,
    marginTop: "10px",
    padding: "10px"
  }
  function homee() {

    navigate("/Dashboard");
    setName(ref.current.value);
    console.log("hello " + JSON.stringify(namee));
    // console.log(namee)


  }
  function Eventhandler(event) {
    setName(event.target.value);
    console.log("hello " + namee);
  }

  return (
    <>
    <div style={{backgroundColor:"#9f9fd7",height:"100vh"}}>
      <div style={{ display: "flex",  width: "100%" ,color:"white"}}>
        <div style={{justifyContent:"center",alignItems:"center"}}>
        <h2>Hello this is a Login page</h2>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }}>

        <div style={{ height: "300px", width: "200px", backgroundColor: "pink", borderRadius: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>


            <div style={{ marginTop: "10px", marginLeft: "10px", padding: "10px" }}>
              <input type="text" ref={newref} placeholder="Enter the Email Id" />
            </div>
            <div style={styling}>
              <input type="text" ref={newref} placeholder="Enter the Password" />
            </div>
            <div style={styling}>
              <input type="text" value={namee} ref={ref} onChange={Eventhandler} placeholder="Enter the usename" />
            </div>

            <button onClick={homee} style={{ margin: "10px" }}>Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App

import Button from "./Button"
function App() {
  return (
    <>
     <div className="container">
      <Button id="red" color="RED" function="rgb(255 49 49)"/>
      <Button id="white" color="WHITE" function="rgb(226, 226, 226)"/>
      <Button id="black" color="BLACK" function="rgb(27 27 27)"/>
      <Button id="blue" color="BLUE" function="rgb(0 176 255)"/>
      <Button id="green" color="GREEN" function="rgb(0 213 53)"/>
      <Button id="yellow" color="YELLOW" function="rgb(255 232 0)"/>
     </div>
     {/* <div className="colorContainer" style={{backgroundColor:color}}></div> */}
    </>
  )
}

export default App

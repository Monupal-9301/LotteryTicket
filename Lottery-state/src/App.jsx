
import "./App.css"
import { sumarr } from "./help"
import Lottery from "./Lottery"
import Ticket from "./Ticket"
function App() {
  let winLottery=(Ticket)=>{
    return sumarr(Ticket)===15;
  }
  return(
    <Lottery n={3} winning={winLottery}/>
    
  )
  
  
}

export default App

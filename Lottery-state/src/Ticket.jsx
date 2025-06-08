import LotteryNum from "./LotteryNum"
import "./Ticket.css"
function Ticket({arrNum}){
    return(
        <div className="Ticket1">
            <h2>Ticket</h2>
            {arrNum.map((num,key)=>
            (<LotteryNum num={num} key={key}/>))}
        </div>
    )
}
export default Ticket;
import { useState } from "react";
import Ticket from "./Ticket";

import "./Lottery.css"
import { ticketgen } from "./help";
import Button from "./Button";

function Lottery({n,winning}){
    
    let [Ticketnum,setTicketnum]=useState(ticketgen(n));
    let winnings=winning(Ticketnum);
    
    let buyticket=()=>{
        setTicketnum(ticketgen(n))
    }
    
    
    
    return(
        <div className="maindiv">
            <h1 className="ticket1">Lottery Ticket</h1>
         <Ticket arrNum={Ticketnum}/>
        <br />
        <Button buyticket={buyticket}/>
        <h2>{ winnings && " congrasulation ! you are winner of this game" }</h2>
        </div>

        
        
    )
}
export default Lottery
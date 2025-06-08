function ticketgen(n){
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);

    }
    return arr;

}
function sumarr(Ticket){
    let sum=Ticket.reduce((x,y)=>{
        return x+y;

    })
    return sum
    
}
export {ticketgen,sumarr};
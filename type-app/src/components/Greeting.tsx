
export interface Props{
    name: string,
    gritLevel: number,
}

function Greeting({name, gritLevel=1}: Props){
    if(gritLevel <= 0){
        throw new Error('be more enthusiastic')
    }

    return(
        <div>
            <p>Hello {name + numbOfExclamations(gritLevel)}</p>
        </div>
    )
}

{/*a helper function to get ! marks*/}
function numbOfExclamations(numChars: number){
    return Array(numChars + 1).join('!')
}
export default Greeting;
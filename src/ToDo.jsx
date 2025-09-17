// export default function ToDo({task, isDone}) {


//     return (
//         <li>Task: {task} </li>
//     )
// }


/* export default function ToDo({task, isDone}) {
    if(isDone === true) {
        return <li>Done: {task}</li>

    }
    else{
        return <li>Pending: {task}</li>
    }
} */


/* export default function ToDo({task, isDone, time=0}) {
    if(isDone === true) {
        return <li>Done: {task} - Duration: {time} </li>

    }
   
        return <li>To Be Done: {task}</li>
    
} */



/* export default function Food ({food, restaurant, isHungry}){
    if (isHungry === true){
        return <li>I am going to Eat: {food} - At : {restaurant}</li>
    }

    return <li>I am Going to sleep</li>
} */



//Conditional Rendering: Using Ternary : 3

// condition ? true : false 

/* export default function ToDO ({task, isDone, time = 0}){
    return isDone ? 
    <li>DOne: {task} Time: {time} </li> 
    : <li>Not Done : {task} </li>
} */

//  Conditional Rendering : 4  && 

/* 
export default function ToDO ({task, isDone, time = 0}){
    return isDone && <li>Done Task:{task} time:{time} </li>
}
 */


//  Conditional Rendering :  5  ||


/* export default function ToDO ({task, isDone, time = 0}){
    return isDone || <li> Not Done Task:{task} time:{time} </li>
} */



// conditional rendering: 6 : use variables 

export default function ToDo({ task, isDone, time }) {

    const displayTime = time ? time : 100;
    let listItem;

    if (isDone === true) {
        listItem = <li>Done: {task} time:{time? 'I am done.' : 'Not done'} {time} </li>

    }
    else {
        listItem = <li>Pending: {task}</li>
    }

    return listItem;
}



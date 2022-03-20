import {useNavigate} from "react-router-dom";
import NewMeetForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage(){
    const  navigate =useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            "https://react-getting-started-eddf0-default-rtdb.europe-west1.firebasedatabase.app/.json",
        {
            method: "POST", 
            body: JSON.stringify(meetupData),
            headers:{
                "Content-Type": "application/json"
             }
        }
    ).then(() => {
        navigate('/', { replace: true });
    })
    }
    return(
         <section>  
             <h1>Add New Meet Up</h1>
         <NewMeetForm onAddMeetup={addMeetupHandler}/>
         </section>
    );
}

export default NewMeetupPage;
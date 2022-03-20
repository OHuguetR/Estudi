import { useState,useEffect } from "react";
import MeetUpList from "../components/meetups/MeetupList";

function Home() {
  const [isLoading,setIsLoading]= useState(true);
  const [loadedMeetups,setLoadedMeetups] = useState([])
 
  useEffect(()=>{
    setIsLoading(true);
    fetch ( "https://react-getting-started-eddf0-default-rtdb.europe-west1.firebasedatabase.app/.json",).then(response => {
      return response.json();
    }).then (data=> {
      const meetups=[];
      for (const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);
  
  if (isLoading){
    return (<section>
      <p>Loading...</p>
    </section>
    );
  }
    return(
     <section>
         <h1>  Pàgina Principal </h1>
         <MeetUpList meetups={loadedMeetups}/>
     </section>
    );
    }


export default Home;
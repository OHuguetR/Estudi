import { useState, useEffect } from "react";
import MeetUpList from "../components/meetups/MeetupList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // TODO: Què passa si s'elimina aquesta línia?
    setIsLoading(true);
    fetch(
      "https://react-getting-started-eddf0-default-rtdb.europe-west1.firebasedatabase.app/.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        debugger;
        // Creem una array buida, on guardarem les dades formatejades.
        const meetups = [];

        // Exemple de data
        // {"propietat1": {}, "propietat2": {"meta": fuasdf}}
        for (const key in data) {
          const meetup = {
            id: key,
            // ... = spread, "copiar i enganxar" totes les propietats de l'objecte. 
            ...data[key],
          };
          // Al final de l'array, col·loca aquest nou meetup
          meetups.push(meetup);
          // [{}, {}, {}]
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // isLoading i isLoading === true és el mateix
  // !isLoading i isLoading === false || isLoading === undefined és el mateix
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Pàgina Principal</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}

export default Home;

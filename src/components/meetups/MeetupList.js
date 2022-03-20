import MeetupItem from "./MeetupItem";
import classes from "./MeetUpList.module.css";

function MeetUpList(props) {
    // ul significa que és un element d'una llista
    return <ul className={classes.list}>
        { /* TODO: Buscar diferència entre map i forEach */}
        {props.meetups.map(meetup => <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description} />)}
    </ul>
}

export default MeetUpList;
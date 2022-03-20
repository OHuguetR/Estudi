import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetupList";

function FavouritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p> You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetUpList meetups={favoritesCtx.favorites}></MeetUpList>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavouritesPage;

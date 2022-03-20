import classes from "./Layout.module.css"
import MainNavigations from "../layout/MainNavigations";

function Layout(props) {
    return (
        <div>
            <MainNavigations></MainNavigations>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;
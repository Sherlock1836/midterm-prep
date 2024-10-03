import NavBarButton from "./NavBarButton";

function NavBar() {

    return ( 
        <div>
            <nav>
                <NavBarButton text="Home" target='/' />
                <NavBarButton text="Page1" target='/page1'/>
                <NavBarButton text="Page2" target='/page2'/>
                <NavBarButton text="Page3" target='/page3'/>
                <NavBarButton text="Page4" target='/page4'/>
            </nav>
        </div>
    );
}

export default NavBar;
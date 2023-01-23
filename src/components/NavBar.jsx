const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 d-flex justify-content-between">
            <h1 className="display-4">Active Transfer Market Pool</h1>
            <div>
                <a href="/mypool" className="btn btn-primary stretched-link">My Pool</a>
            </div>
        </nav>
     );
}
 
export default NavBar;
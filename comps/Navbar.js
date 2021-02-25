
const Navbar = () => {
    return (
        <>
            <nav className = 'flex justify-between'>
                <div className = 'text-gray-700'>
                    <h3>Health Explore</h3>
                </div>
                <div className = ''>
                    <h4>Profile</h4>
                    <h4>Jobs</h4>
                    <h4>Professional Network</h4>
                    <h4>Lounge</h4>
                    <h4>Stay</h4>
                </div>
                <div className = 'nav-user'>
                    <h4>Create Job</h4>
                    <h4>user logo</h4>
                    <h4>logout</h4>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
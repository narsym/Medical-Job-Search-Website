
const Navbar = () => {
    return (
        <>
            <nav className = 'md:w-full flex flex-row justify-center items-center bg-white h-20'>
                <div className = 'w-full md:w-2/5 text-blue-500 font-bold text-2xl'>
                    Health Explore
                </div>
                <div className = 'invisible w-2/5 flex flex-row justify-around font-bold md:visible '>
                    <a>Profile</a>
                    <a>Jobs</a>
                    <a>Professional Network</a>
                    <a>Lounge</a>
                    <a>Stay</a>
                </div>
                <div className = 'invisible w-1/5 flex flex-row justify-between md:visible'>
                    <a className = 'border-2 rounded-lg border-blue-400 px-4 py-2 text-blue-400'>Create Job</a>
                    <a className = 'border-2 rounded-full border-blue-400 px-2 py-1 bg-blue-400 text-white'>UL</a>
                    <a className = 'font-bold'>logout</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
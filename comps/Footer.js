const Footer = () => {
    return (
        <>
        <div className = 'flex flex-col md:flex-row md:justify-between h-12 bg-white'>
            <div className = 'w-2/4 justify-center'>
                <p className = 'font-bold text-2xl m-4'>About us</p>
                <div className = 'm-4'>
                    <p>We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                    <p>All copyrights reserved ©️ 2021 - Health Explore</p> 
                </div>
            </div>
            <div className = 'w-1/4'>
                <p className = 'font-bold text-2xl m-4'>Sitemap</p>
                <div className = 'm-4'>
                    <p>Nurses</p>
                    <p>Employers</p>
                    <p>Social Networking</p>
                    <p>Jobs</p>  
                </div>
            </div>
            <div className = 'w-1/4'>
                <p className = 'font-bold text-2xl m-4'>Privacy</p>
                <div className = 'm-4'>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookie policy</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;
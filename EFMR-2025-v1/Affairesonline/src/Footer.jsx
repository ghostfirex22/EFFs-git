function Footer(){
    return (
        <>
            <footer className="flex flex-col items-center bg-gray-800 text-white p-8">
            <h1 className="font-bold text-3xl mb-4">Footer</h1>
            <ul className="flex flex-row gap-10">
                <li className="hover:text-gray-400 cursor-pointer">About Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Services</li>
                <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
            </ul>
            </footer>
        </>
    )
}

export default Footer
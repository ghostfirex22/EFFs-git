function Header(){
    return (
        <>
             <header className="flex flex-col items-center bg-gray-700 p-6">
            <ul className="flex flex-row gap-10">
                <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
                <li className="text-white hover:text-gray-300 cursor-pointer">About</li>
                <li className="text-white hover:text-gray-300 cursor-pointer">Services</li>
                <li className="text-white hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
        </header>
        </>
    )
}

export default Header;
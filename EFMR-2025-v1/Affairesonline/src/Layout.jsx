import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Menu from "./Menu"

function Layout(){
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <Header/>
                <div className="flex flex-row flex-grow">
                    <Menu/>
                    <Content className="flex-grow p-4" />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
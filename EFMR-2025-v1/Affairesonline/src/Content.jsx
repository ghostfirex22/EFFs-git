import Login from "./Login"

function Content(){
    return (
        <>  
            <div className="flex flex-col w-full items-center p-4">
                <Login/>
                <h1 className="text-center font-bold text-4xl mt-6">Content</h1>
            </div>
        </>
    )
}

export default Content
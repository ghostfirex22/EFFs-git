function Menu(){
    return (
        <>
            <div className="bg-gray-300 p-6 rounded-lg shadow-md w-80">
            <div className="flex flex-col gap-4 mb-8">
                <h1 className="font-bold text-xl">Espace membre</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui?</p>
                <ul className="list-disc list-inside">
                    <li>Connexion</li>
                    <li>Inscription</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">Nos Annonces</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, molestias sunt?</p>
                <ul className="list-disc list-inside">
                    <li>Consulter nos annonces</li>
                    <li>Diffuser une annonce</li>
                    <li>Administrer les annonces</li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Menu
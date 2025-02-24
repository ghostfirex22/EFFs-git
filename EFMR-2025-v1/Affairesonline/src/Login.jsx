function Login(){
    return (
        <>
            <div className="bg-gray-900 text-white flex flex-col gap-6 p-8 rounded-lg shadow-md w-80 mx-auto">
            <h3 className="text-xl font-bold text-center">Vous êtes deja membre:</h3>
            <p className="text-center">Saisissez vos parametres d'acces</p>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Nom d'utilisateur</label>
                <input type="text" name="nom" className="p-2 border text-black border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Mot de passe</label>
                <input type="password" name="motDePasse" className="p-2 border text-black border-gray-300 rounded-md" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 rounded-md p-2">Se connecter</button>
            </div>


        </>
    )
}

export default Login
import { useEffect, useState } from "react"

function InfoProd(){

  const [valider,setValider] = useState(false)

  const [categories,setCategories] = useState([
    {id : 1 ,libelle:"Gamer"},
    {id : 2 ,libelle:"Mechanical"},
    {id : 3 ,libelle:"Projection"},
    {id : 4 ,libelle:"Virtual"}
  ])

  const [produit,setProduit] = useState({
    reference : "",
    nom : "" ,
    categorie : {},
    descrition : "" ,
    prix : "" ,
    image : ""
  })

  const [produitForShow,setProduitForShow] = useState({
    reference : "",
    nom : "" ,
    categorie : {},
    descrition : "" ,
    prix : "" ,
    image : ""
  })

  function inputsChanges(e){
    let key = e.target.name
    let val = e.target.value
    let _produit = {...produit}
    _produit[key] = val
    setProduit(_produit)
  }

  function selectChanges(e){
    const categoSelected = categories.find((item)=>{
      return e.target.value == item.id
    })
    setProduit({...produit,categorie: categoSelected})
  }

  useEffect(()=>{
    if(valider == true){
        setProduitForShow({...produit})
    }
  },[valider])

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">INFO PRODUIT</h1>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="">Reference:</label>
        <input type="text" name="reference" onChange={inputsChanges} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="">Nom Produit:</label>
        <input type="text" name="nom" onChange={inputsChanges} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="">Categorie Produit:</label>
        <select name="" onChange={selectChanges} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {categories.map((item, index) => (
            <option key={index} value={item.id}>{item.libelle}</option>
          ))}
        </select>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="">Description:</label>
        <textarea name="descrition" onChange={inputsChanges} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="">Prix:</label>
        <input type="text" name="prix"onChange={inputsChanges} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <label className="block text-gray-700 font-medium mb-2" htmlFor=""> Image de Produit:</label>
        <input type="file" name="image" onChange={inputsChanges} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button onClick={() => setValider(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Valider </button>

        <div className="mt-6">
          <ul className="space-y-2">
            <li className="text-gray-700">
              <span className="font-medium">Reference:</span> {produitForShow.reference}
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Nom:</span> {produitForShow.nom}
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Categorie Produit:</span>{" "}
              {produitForShow.categorie?.libelle}
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Prix:</span> {produitForShow.prix}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default InfoProd
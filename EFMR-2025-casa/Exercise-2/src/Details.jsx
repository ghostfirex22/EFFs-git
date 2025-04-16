import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import image from './lighter-books-bg.png'

function Details({detailCour}){

    console.log(detailCour)

    return (
        <>  
            <div>
                {detailCour ? (
                    <div>
                        <h1>{detailCour.nom}</h1>
                        <p>{detailCour.details}</p>
                        <span>{detailCour.formateur}</span>
                        <span>{detailCour.duree}</span>
                        <img src={image} alt="" />
                    </div>
                ) : (
                    <span>nothing selected</span>
                )}

            </div>
        </>
    )
}

export default Details
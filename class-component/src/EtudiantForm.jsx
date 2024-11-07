import React from "react";

class EtudiantForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            etudiant : {
                id:"",
                nom:"",
                prenom:"",
                group:""
            },
            etudiants : []
        }
    }

    ajouter = ()=>{
        this.setState({etudiants:[...this.state.etudiants,this.state.etudiant]})
        console.log(this.state.etudiants)
    }

    render(){

        return (
            <>
                <input type="text" onChange={(e)=>this.setState({ etudiant:{...this.state.etudiant,id:e.target.value}})} placeholder="Nom"/>                    
                <input type="text" onChange={(e)=>this.setState({ etudiant:{...this.state.etudiant,nom:e.target.value}})} placeholder="Nom"/>    
                <input type="text" onChange={(e)=>this.setState({ etudiant:{...this.state.etudiant,prenom:e.target.value}})} placeholder="Prenom"/>
                <input type="text" onChange={(e)=>this.setState({ etudiant:{...this.state.etudiant,group:e.target.value}})} placeholder="Group"/>
                <button onClick={this.ajouter}>Ajouter</button>

               <table>
                    <thead>
                        <th>id</th>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>group</th>
                    </thead>
                    <tbody>
                        {this.state.etudiants.map(function(item,index){
                            return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nom}</td>
                                        <td>{item.prenom}</td>
                                        <td>{item.group}</td>
                                    </tr>
                        })}


                    </tbody>
                
                </table> 
            </>
        )
    }
}

export default EtudiantForm;
import React from "react";
class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            students : [],
            student : {
                id:"",
                nom:"",
                prenom:"",
                note:0
            },
            // total : 0
        };
    }

    emptying = ()=>{
        this.setState({
        student:{
            id:"",
            nom:"",
            prenom:"",
            note:0
        }});
    }

    save = ()=>{
        this.setState({students:[...this.state.students,this.state.student]})
    }

    update = ()=>{
        const updateRow = this.state.students.map((item)=>{
            if (item.id == this.state.student.id ){
                item = {...this.state.student}
            }
            return item
        })
        this.setState({students:updateRow})
        this.emptying();
    }

    delete = ()=>{
        const deleteRow = this.state.students.filter((item)=>{
            return item.id !== this.state.student.id
        })

        this.setState({students:deleteRow})
        this.emptying()
    }

    // totalAll = (item)=>{
    //     this.setState({total : (this.state.total + Number(item.note))})
    // }


    render(){
        return (
            <>
                <div>
                    <h1>FORM</h1>

                    <label htmlFor="">ID :</label>
                    <input type="text" placeholder="ID" value={this.state.student.id}  onChange={(event)=> {this.setState({student: {...this.state.student,id:event.target.value}})}}/>

                    <label htmlFor="">Nom :</label>
                    <input type="text" placeholder="Nom" value={this.state.student.nom} onChange={(event)=>{this.setState({student: {...this.state.student,nom:event.target.value}})}} />

                    <label htmlFor="">Prenom :</label>
                    <input type="text" placeholder="prenom" value={this.state.student.prenom} onChange={(event)=>{this.setState({student: {...this.state.student,prenom:event.target.value}})}} />

                    <label htmlFor="">Note :</label>
                    <input type="number" placeholder="Note" value={this.state.student.note} onChange={(event)=>{this.setState({student: {...this.state.student,note:event.target.value}})}} />

                    <button onClick={this.save}>Ajouter</button>

                    <table style={{ padding: "10px", borderCollapse: "collapse", border: "1px solid black" }} >
                        <thead>
                            <th style={{backgroundColor:"#808080", padding: "10px" , border: "1px solid black"}}>Id</th>
                            <th style={{backgroundColor:"#808080", padding: "10px" , border: "1px solid black"}}>Nom</th>
                            <th style={{backgroundColor:"#808080", padding: "10px" , border: "1px solid black"}}>Prenom</th>
                            <th style={{backgroundColor:"#808080", padding: "10px" , border: "1px solid black"}}>Note</th>
                        </thead>

                        <tbody>
                            {this.state.students.map((item,index) => {
                                // this.totalAll(item)
                                return (
                                    <tr key={index} onClick={() => this.setState({ student: {...item }})}>
                                        <td style={{backgroundColor:"#2e4053", padding: "10px" , border: "1px solid black" }}>{item.id}</td>
                                        <td style={{backgroundColor:"#2e4053", padding: "10px" , border: "1px solid black" }}>{item.nom}</td>
                                        <td style={{backgroundColor:"#2e4053", padding: "10px" , border: "1px solid black"}}>{item.prenom}</td>
                                        <td style={{backgroundColor:"#2e4053", padding: "10px" , border: "1px solid black"}}>{item.note}</td>
                                    </tr> 
                                    )
                                })
                            }
                            {/* <tr style={{textAlign:"center"}}>Total points : {this.state.total}</tr> */}
                        </tbody>

                    </table>
                        <button onClick={this.update}>Update</button>
                        <button onClick={this.delete}>Delete</button>
                </div>
            </>
        )
    }

}

export default Form
import React from "react";

class AddContact extends React.Component{
    state = {
        name:"",
        email:"",
    };
      add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory ")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""})
        
      };


    render(){
        return (
            <div className="container">
                <h2>AddContact</h2>
                <form class="" onSubmit={this.add}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Email"  value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </div> <br></br>
                    <button type="onsubmit"  className="btn btn-primary">ADD</button>
                </form>
            </div>
        );
    }

}

export default AddContact;


import React from "react";

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName1:'',
            productName2:''
        };
    }
  
  render() {
    return (
      <form onSubmit={(e)=>{
          e.preventDefault();
        this.props.addItem(this.state.productName1, this.state.productName2);
    }}>
        <div className="row mb-5">
          <div className="mb-3 col-4">
            <label htmlFor="inputName" className="form-label">
              value1
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              name="productName1"
              onChange={(e)=>{
                  this.setState({
                      productName1:e.currentTarget.value
                  })
              }}
              value={this.state.productName1}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputName2" className="form-label">
            value2
            </label>
            <input type="text" className="form-control" id="inputName2" name="productName2" 
            onChange={(e)=>{
                  this.setState({
                    productName2:e.currentTarget.value
                  }) 
              }}
              value={this.state.productName2}/>
          </div>
          <button type="submit" className="btn btn-primary col-4" value="Add">
              +
              </button>
            
          
        </div>
      </form>
    );
  }
}

export default AddItem;

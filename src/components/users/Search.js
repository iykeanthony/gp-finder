import React, { Component } from 'react'

class Search extends Component {
    state ={ text:''}

    onInputChange =(e)=>{
        this.setState({ text: e.target.value })
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.searchUser(this.state.text)
        this.setState({ text:'' })
    }

    render() {
        return (
            <div onSubmit={this.onFormSubmit} className='container' style={{ marginBottom: '10px'}}>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search Users..." onChange={this.onInputChange} />
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block">Search</button>
                </form>
            </div>
        )
    }
}

export default Search

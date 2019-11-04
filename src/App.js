import React, { Component } from "react";
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // componentDidMount(){
  //   fetch('https://api.github.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({ users: users }))
  //   .catch(error => 'Request Failed to Complete')
  // }

  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({ loading: true})
  //   const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ loading:false, users: response.data})
  // }

  searchUser = async(text)=>{
    this.setState({ loading: true})
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ loading:false, users: response.data.items})
  }  

  render() {
    const users = this.state.users;
    const loading = this.state.loading;

    return (
      <div>
        <Navbar />
        <Search searchUser={this.searchUser} />
        <Users users={users} loading={loading} />
      </div>
    );
  }
}

export default App;
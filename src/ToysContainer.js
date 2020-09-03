import React from 'react'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'

// Class components will always rerender when state or props change
class ToysContainer extends React.Component {

    state = {
        toys: [],
        search: "",
        name: "",
        image: ""
    }

    renderToyCards(){
        let displayedToys = this.state.toys
        if(this.state.search){
            displayedToys = this.state.toys.filter((toy) =>
            toy.name.toLowerCase().includes(this.state.search.toLowerCase()))
        }

        return displayedToys.map((toy)=>{
            return <ToyCard name={toy.name} image={toy.image} likes={toy.likes}/>
        })
    }

    componentDidMount(){
        console.log("Component mounted")
        fetch("http://localhost:3000/toys")
        .then(res => res.json())
        .then(arrayOfToys => {
            this.setState({
                toys: arrayOfToys
            }, () => console.log("New state:", this.state))

        })
    }



    handleChange = (e) => {
        // update state
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
        // debugger
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const toy = {
            name: this.state.name,
            image: this.state.image,
            likes: 0
        }
        // update the DB

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(toy)
        }

        fetch("http://localhost:3000/toys", configObj)
        .then(res => res.json())
        .then(data =>{
            this.addToy(data)
        })

        this.setState({
                name: "",
                image: ""
        })

        // new toy object
        // POST request  (config obj)
        // send a fetch request

        // update the DOM   (update the state)
    }

    addToy = (toy) => {
        //update our state
        console.log(toy)
        this.setState((prevState) => {
            return {
                toys: [...prevState.toys, toy]
            }
        })
    }

    handleInputChange = (e) => {
       this.setState({
         search: e.target.value
       })
    }




    render(){
        return(
            <div id="toy-container">
                <ToyForm handleChange={this.handleChange}  handleSubmit={this.handleSubmit} name={this.state.name} image={this.state.image}/>
                <div>
                    <input type="text" placeholder="Search for a toy..." onChange={this.handleInputChange} />
                </div>
                {this.renderToyCards()}
            </div>
        )
    }
}

// function ToysContainer(){

//     const toyCards =  toysObj.toys.map((toy)=>{
//             return <ToyCard name={toy.name} image={toy.image} likes={toy.likes}/>
//         })

//     return(
//         <div id="toy-container">
//             <div>
//                 <input type="text" placeholder="Search for a toy..." />
//             </div>
//             {toyCards}
//         </div>
//     )
// }

export default ToysContainer;
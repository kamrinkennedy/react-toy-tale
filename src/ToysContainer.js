import React from 'react'
import ToyCard from './ToyCard'

// Class components will always rerender when state or props change
class ToysContainer extends React.Component {

    state = {
        toys: [],
        search: "",
        whatever: "hello",
        sort: "asc"
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

    handleInputChange = (e) => {
       this.setState({
         search: e.target.value
       })
    }

    render(){
        return(
            <div id="toy-container">
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
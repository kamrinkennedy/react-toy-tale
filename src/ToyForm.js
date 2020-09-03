import React from 'react'

export default function ToyForm(props){

        return(
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" onChange={props.handleChange} value={props.name}/>
                    <label>Image:</label>
                    <input name="image" type="text" onChange={props.handleChange} value={props.image}/>
                    <input type="submit" value="Add Toy" />
                </form>
            </div>
        )

}
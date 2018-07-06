import React from 'react'
import { component } from 'react'

 const AddColorForm = () => (

    <div>
        <form onSubmit={e => e.preventDefault()}>
            <input type="text"
                placeholder="color title..." required/>
            <input type="color"/>
            <button>Add color</button>
        </form>
    </div>

);

export default AddColorForm
import React from 'react'
import DeleteModal from './DeleteModal'

export default function ListItem({ item, handleDelete, index }) {
    return (
        <div>
            <li>{index+1}  {item}
                <DeleteModal
                    index={index}
                   
                    className="deleteModal"
                    handleDelete={()=>handleDelete(item)}
                />
            </li>
         
        </div>
    )
}

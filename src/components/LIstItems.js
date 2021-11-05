import React from 'react'
import ListItem from './ListItem'

export default function LIstItems({ inputItems, handleDelete }) {

    return (
        <div>
            <ul>
                {
                    inputItems.length !== 0 ? inputItems.map((item, index) => (
                        <ListItem key={index} item={item} handleDelete={handleDelete} index={index} />
                    )) : <div><h4 className="no-data">No data to display..!</h4></div>
                }
            </ul>
        </div>
    )
}

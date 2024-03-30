import React, { useContext } from 'react'
import DataContext from '../data/dataContext'

const DetailForm = () => {
    const {setIsEdit} = useContext(DataContext)
    const {userDetails} = useContext(DataContext)
  return (
    <div
    class="card text-white bg-white m-2"
>
    <ul class="list-group list-group-flush">
        {console.log(userDetails)}
        {userDetails && userDetails.map(user=>{
            return(
                <li key={user.id} class="list-group-item d-flex justify-content-between align-content-center h-auto flex-wrap">
                <h6 className='m-0 col-md-3 pt-2'>{user.label}
                </h6>
                <p className='text-muted m-0 col-md-9 py-2'>{user.value}</p>
            </li>
            )
        })}
    </ul>
    <a
        name=""
        id=""
        class="btn btn-info m-3 text-white"
        href="#"
        style={
            {
                width:60
            }
        }
        role="Button"
        onClick={()=>setIsEdit(true)}
        >Edit</a
    >
    

</div>
  )
}

export default DetailForm
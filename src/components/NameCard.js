import React, { useContext } from 'react'
import DataContext from '../data/dataContext'

const NameCard = () => {
    const {socialName,role,userDetails,follow,setFollow} = useContext(DataContext)
    return (
        <div
            class="card text-white bg-white d-flex align-items-center justify-content-center m-2"
        >
            <img class="card-img-top pt-3" src="./assets/profile.png" alt="Title" style={{
                height: 160,
                width: 140,
                borderRadius: 70
            }} />
            <div class="card-body d-flex flex-column align-items-center justify-content-center text-center">
                <h4 class="card-title text-dark">{socialName}</h4>
                <p class="card-text text-muted">{role}</p>
                <p class="card-text text-muted">{userDetails[4].value}</p>
                <span className='d-flex flex-wrap align-items-center justify-content-center'>
                    <a
                        name=""
                        id=""
                        class="btn btn-primary mx-1"
                        href="#"
                        role="button"
                        onClick={()=>follow == "Follow" ?setFollow("Following"):setFollow("Follow")}
                    >{follow}</a
                    >
                    <a
                        name=""
                        id=""
                        class="btn btn-outline-primary mx-1"
                        href="#"
                        role="button"
                        >Message</a
                    >     
                </span>
            </div>
        </div>

    )
}

export default NameCard
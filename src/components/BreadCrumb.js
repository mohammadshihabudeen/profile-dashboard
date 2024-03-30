import React from 'react'

const BreadCrumb = () => {
    return (
        <div class="card text-white bg-light  pt-3 mt-2">
            <nav className="breadcrumb bg-light h-50">
                <a className="breadcrumb-item text-decoration-none" href="#">Home</a>
                <a className="breadcrumb-item text-decoration-none" href="#">User</a>
                <span className="breadcrumb-item active text-decoration-none" aria-current="page">User Profile</span>
            </nav>
        </div>
    )
}

export default BreadCrumb
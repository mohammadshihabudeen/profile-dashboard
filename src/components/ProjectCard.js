import React, { useContext } from 'react'
import DataContext from '../data/dataContext'

const ProjectCard = () => {
    const {projectStatus} = useContext(DataContext)
    return (
        <div
            class="card bg-white m-2 w-auto"
        >
            <h5 className='d-flex'>
                <i className="text-info m-2">assignment </i>
                <span className='m-2'>Project Status </span>
            </h5>
            <div class="card-body">
                {projectStatus && projectStatus.map(project=>{
                    return(
                        <div className="form-input" key={project.id}>
                        <small class="form-check-label" for=""> {project.projectName}</small>
                        <div class="progress mb-3" style={{ height: 5 }}>
                            <div
                                class="progress-bar"
                                role="progressbar"
                                style={{ width: `${project.projectScore}%` }}
                                aria-valuenow= {`${project.projectScore}`}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ProjectCard
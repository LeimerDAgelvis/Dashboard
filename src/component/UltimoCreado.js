import React from "react";

function UltimoCreado(props) {


    return (
        <div>
            <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className='border-left-primary shadow h-100 fit'>
                    <div className="card-body">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> {` Ultimo ${props.titulo} creado`}</div>
                            <div className="h5 mb-0 text-gray-800">{props.ultimo}</div>
                                    
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        </div>
    )
}

export default UltimoCreado
import React from 'react';



function ContentTotales(props){

    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-success shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> {props.titulo} totales</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.total}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentTotales;
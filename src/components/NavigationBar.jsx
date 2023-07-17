import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ "backgroundColor": "#76cfe3" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" style={{fontSize:"25px"}} to="/">JobBazaar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" style={{fontSize:"20px"}} aria-current="page" to="/jobs">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white mx-3" style={{fontSize:"20px"}} aria-current="page" to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-4" type="search" style={{"width": "500px"}} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-light" style={{color:"#76cfe3", fontSize:"15px", fontWeight:"bold"}}type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar


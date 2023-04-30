import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>React Redux Crud</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>


            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header
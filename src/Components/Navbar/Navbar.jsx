import React from 'react'
import './navbar.css'
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">online magazin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-light active" aria-current="page" href="#products">products</a>
                            <a class="nav-link text-light active" aria-current="page" href="#footer">ContactUs</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

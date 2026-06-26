const Profile = () => {
    return (
        <div>  
            {/* Profile Header */}
            <h1 className = "shadow-lg p-3">Profile</h1>
            <hr />
                 <button type="button" className="btn btn-secondary btn-sm">Edit Profile</button>
            
             <div className="container">

                
                {/*Profile Navbar*/}
                <div>
                 <nav className= "navbar navbar-expand bg-body-tertiary p-3" data-bs-theme="dark" >
                 <div className="container-fluid">
                <a className="navbar-brand" href="#">
                 <img src="/images/profile-image-plus-round-1327-svgrepo-com.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                  Username
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link text-primary" href="#">Reviews</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-primary" href="#">Followers</a>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link text-primary" href="#">Following</a>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

                
                {/* Bio*/}
                <h2 className="text-primary display-8 p-2">Bio</h2>
                <hr />

                {/* row 1 */}
                <div className="row">
                    <div className="-md">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                       <div className="-md">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                       <div className="-md">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile   
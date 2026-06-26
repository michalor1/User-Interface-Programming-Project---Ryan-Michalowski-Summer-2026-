const RegisterForm = () => {
    return (
        <div>
            <form>
        <div className="mb-3">
        <label for="exampleInputUsername1" className="form-label">Username</label>
        <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp"/>
            <div id="usernameHelp" className="form-text">Please create a new username.</div>
            </div>
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
              </form>
        </div>
    )
}
    export default RegisterForm
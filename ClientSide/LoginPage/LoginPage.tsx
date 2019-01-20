import * as React from 'react';

export class LoginPage extends React.Component<{}, { SigningIn: false }>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center vertical-center">
                    <form className="form needs-validation col-lg-6 col-md-9 col-sm-12" noValidate >
                        <img className="mb-4" src="images/list.png" alt="" width="72" height="72" style={{ color: "#6610f2" }} />
                        <h1 className="h3 mb-3 font-weight-normal">Sign into We Share Tasks</h1>
                        <div className="form-group">
                            <div className=" input-group">
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <div id="emailIcon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                    </span>
                                </div>
                                <input type="email" id="inputEmail" className="form-control" value="" placeholder="Email address" onBlur={() => RemoveColorIcon("emailIcon")} onFocus={() => ColorIcon("emailIcon")} required autoFocus />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i id="keyIcon" className="fas fa-key focus-color-password"></i></span>
                                </div>
                                <input type="password" id="inputPassword" value="" className="form-control" placeholder="Password" onBlur={() => RemoveColorIcon("keyIcon")} onFocus={() => ColorIcon("keyIcon")} required />
                            </div>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-lg btn-primary btn-block" type="button">Register</button>
                            </div>
                        </div>
                        <p className="mt-5 mb-3 text-muted">© 2018-2019</p>
                    </form>
                </div>
            </div>
        )
    }
}
function ColorIcon(id: string): void {
    console.log("change color");
    var element: HTMLElement = document.getElementById(id);
    element.classList.add("icon-colored");
}
function RemoveColorIcon(id: string): void {
    console.log("remove color");
    var element: HTMLElement = document.getElementById(id);
    element.classList.remove("icon-colored");
}
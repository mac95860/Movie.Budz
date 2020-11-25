import React from 'react';

export default function LoginForm() {
    return (
        <>
         <div className="d-flex justify-content-center">
            <form className = "w-40">
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    )
}
export const Login = (props) => {

    const {setAuthorized} = props
    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.email.value === "demo@gmail.com" && e.target.password.value === "demo1234") {
            localStorage.setItem('email', e.target.email.value);
            localStorage.setItem('password', e.target
            .password.value);
            setAuthorized(true);
        }
    }

    return (
        <section class="vh-100" style={{backgroundColor: 'white'}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                <div class="card-body p-5 text-center">
                <form onSubmit={handleSubmit}>  
                  <h3 class="mb-5">Sign in</h3>
                    
                  <div class="form-outline mb-4">
                    <input  name="email" type="email" id="email" placeholder="Email Address" class="form-control form-control-lg" required />
                  </div>
      
                  <div class="form-outline mb-4">
                    <input name="password" type="password" id="typePasswordX-2" placeholder="Enter Password" class="form-control form-control-lg" />
                  </div>
      
                  <div class="form-check d-flex justify-content-start mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div>
      
                  <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
      
                  <hr class="my-4" />
      
                  <button class="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}} type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                  <button class="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}} type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                  </form>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
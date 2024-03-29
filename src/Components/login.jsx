export default function Login(){
    return(
        <main className="flex-grow-1 p-3 m-auto my-2 container">
        <h2 className="text-center">LOGIN!</h2>
        <form className="form" 
        // style="width: 320px;"
        >
          <div className="mb-3 text-center">
            <label htmlFor="email" className="form-label mb-0">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="password" className="form-label mb-0">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <button id="login" type="button" className="w-100 btn btn-danger">Login</button>
        </form>
      </main>
    )
}
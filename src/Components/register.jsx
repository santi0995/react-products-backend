export default function Register() {
  return (
    <main className="flex-grow-1 p-3 m-auto my-2 container">
    <h2 className="text-center">REGISTER!</h2>
    <form className="form"
    //  style="width: 320px;"
     >
      <div className="mb-3 text-center">
        <label htmlFor="email" className="form-label mb-0">Email</label>
        <input type="text" className="form-control" id="email" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3 text-center">
        <label htmlFor="password" className="form-label mb-0">Password</label>
        <input type="password" className="form-control" id="password" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3 text-center">
        <label htmlFor="name" className="form-label mb-0">Name</label>
        <input type="text" className="form-control" id="name"/>
      </div>
      <div className="mb-3 text-center">
        <label htmlForm="lastName" className="form-label mb-0">Last Name</label>
        <input type="text" className="form-control" id="lastName"/>
      </div>
      <div className="mb-3 text-center">
        <label htmlForm="photo" className="form-label mb-0">Photo</label>
        <input type="text" className="form-control" id="photo"/>
      </div>
      <div className="mb-3 text-center">
        <label htmlForm="age" className="form-label mb-0">Age</label>
        <input type="number" className="form-control" id="age"/>
      </div>
      <button id="registerButton" type="button" className="w-100 btn btn-danger">Register!</button>
    </form>
  </main>
  
  
  
  );
}

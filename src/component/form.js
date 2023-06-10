
function Form(){
    return (
      <div className="col-lg-3">
        <div className="card">
          <div className="card-header">
            <h3>Registration Form</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="col-lg-3">
                <label>Name: </label>
              </div>
              <div className="col-lg-9">
                <input type="text" id="name" className="form-control" {prop.name} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export {Form}
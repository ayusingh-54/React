function Addtodo() {
    return  (<div>
        <div class="container text-center " className="mx-8">
          <div class="row">
            <div class="col-5"><input type="text" placeholder='Enter to do here' /></div>
            <div class="col-3"><input type="date" /></div>
            <div class="col-2"><button type="button" class="btn btn-success">Success</button></div>
            </div>
        </div>
    </div>)
}

export default Addtodo;
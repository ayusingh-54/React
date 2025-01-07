function Addtodo2({todoName, todoDate}) {

    return (<div>
        <div class="container text-center" className="my-2">
            <div class="row">
                <div class="col-5">{ todoName}</div>
                <div class="col-3">{ todoDate}</div>
                <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
            </div>


        </div>
    </div>)
}
export default Addtodo2;    
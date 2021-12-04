import { useEffect, useState } from "react"

export const Tasks = () => {

    const [data, setData] = useState([]);

    const load_data = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        let data = await response.json();
        console.log(data);
        setData(data);
    }

    const removeObj = (id) => {
        const new_data = data.filter(function(el) { return el.id != id; });
        setData(new_data);
    }

    useEffect(() => {
        load_data();
    }, []);

    return (
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(obj=>(
                <tr>
                    <th scope="row">{obj.id}</th>
                    <td>{obj.title}</td>
                    <td>{String(obj.completed)}</td>
                    <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#exampleModal${obj.id}`}>Delete</button>
                    <Modal id={obj.id} removeObj={removeObj}/>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export const Modal = (props) => {
    
    const {removeObj} = props

    return (
        <div class="modal fade" id={`exampleModal${props.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you Sure you want to Delete
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => removeObj(props.id)}>Ok</button>
      </div>
    </div>
  </div>
</div>
    )
}
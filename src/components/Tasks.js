import { useEffect, useState } from "react"

export const Tasks = () => {

    const [data, setData] = useState([]);

    const load_data = async () => {
        const response = await fetch(`http://jsonplaceholder.typicode.com/todos`);
        let data = await response.json();
        console.log(data);
        setData(data);
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
                    <td><button type="button" class="btn btn-danger">Delete</button></td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getuserdata , delete_data} from '../feature/user/action';

const Viewdata = () => {

    const navigate=useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getuserdata());
    }, []);

    const { users } = useSelector((state) => state.user);

    const ondelete=(id)=>{
        if(window.confirm("Are You Sure Wanted to Delete the User?"))
          {
            dispatch(delete_data(id));
            dispatch(getuserdata());
          }
    }

    const onedit=()=>{

    }


    return (
        <>
            <div className='container mt-5'>
                <h1>Manage Data</h1>
                <Link to="/adddata" className='btn btn-primary float-end'>Add Data</Link>
            </div>
            <div className='container mt-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item,index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary ms-1'>Status</button>
                                        <button onClick={()=>ondelete(item.id)} className='btn btn-danger ms-1'>Delete</button>
                                        <button onClick={()=>navigate(`/edit_user/${item.id}`)} className='btn btn-warning ms-1'>Edit</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </>

    )
}

export default Viewdata
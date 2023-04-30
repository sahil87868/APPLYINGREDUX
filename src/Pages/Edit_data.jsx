import React,{useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { edit_data , update_data} from '../feature/user/action'

const Edit_data = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const {id}=useParams();
    useEffect(()=>{
        dispatch(edit_data(id))
    },[]);


    const {user}=useSelector((state)=>state.user);
    
    useEffect(() => {
        if(user){
            setFormvalue({...user});
        }
    }, [user])


    onchange = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });  // method 1
    }


    const [error, seterror] = useState("") 
    const validation=()=>{
        let result=true;
        if(formvalue.name=="" || formvalue.name==null)
        {
            result=false;
            toast.error('Name field is required !');
            return false;
        }
        if(formvalue.email=="" || formvalue.email==null)
        {
            result=false;
            toast.error('email field is required !');
            return false;
        }
        if(formvalue.password=="" || formvalue.password==null)
        {
            result=false;
            toast.error('password field is required !');
            return false;
        }
        if(formvalue.mobile=="" || formvalue.mobile==null)
        {
            result=false;
            toast.error('mobile field is required !');
            return false;
        }
        return result;
    }
    const onupdate = async(e) => {
        e.preventDefault();
        if(validation())
        {
                dispatch(update_data(id,formvalue));
                setFormvalue({ name: "", email: "", password: "",mobile:""});
                toast.success('Update Success');
                navigate('/');
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Add Data</h1>
                <Link to="/" className='btn btn-primary float-end'>Back</Link>
                {
                    error && <h5 align="center" className='text-danger'>{error}</h5>
                } 
            </div>
            <div className='container mt-5'>
                <form method='post'>
                    <div className="row g-3">
                        <div className="col-sm-12">
                            <input type="text" value={formvalue.name} onChange={onchange} name="name" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                        </div>
                        <div className="col-sm-12">
                            <input type="email" value={formvalue.email} onChange={onchange} name="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                        </div>
                        <div className="col-sm-12">
                            <input type="password" value={formvalue.password} onChange={onchange} name="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{ height: 55 }} />
                        </div>
                        <div className="col-sm-12">
                            <input type="number" value={formvalue.mobile} onChange={onchange} name="mobile" className="form-control bg-light border-0 px-4" placeholder="mobile" style={{ height: 55 }} />
                        </div>
                        <div className="col-sm-12">
                            <button onClick={onupdate} className="btn btn-primary border-inner w-100 py-3" type="submit">Add Data</button>
                        </div>

                    </div>
                </form>
            </div>
        </>

    )
}

export default Edit_data
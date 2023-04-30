import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { add_data } from '../feature/user/action'

const Adddata = () => {

    const dispatch=useDispatch();
    const [formvalue, setFormvalue] = useState({
        id:"",
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    onchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(),status:"Unblock", [e.target.name]: e.target.value });  // method 1
    }
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
    const onsubmit = async(e) => {
        e.preventDefault();
        if(validation())
        {
                dispatch(add_data(formvalue));
                setFormvalue({ name: "", email: "", password: "",mobile:""});
                toast.success('Register Success');
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Add Data</h1>
                <Link to="/" className='btn btn-primary float-end'>Back</Link>
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
                            <button onClick={onsubmit} className="btn btn-primary border-inner w-100 py-3" type="submit">Save Data</button>
                        </div>

                    </div>
                </form>
            </div>
        </>

    )
}

export default Adddata
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://backend-9yvc.onrender.com/')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [data])

    const inp = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://backend-9yvc.onrender.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone: inp.current.value })
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                e.target.reset()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        fetch(`https://backend-9yvc.onrender.com/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => console.log(err))
    }


    const login = useRef()
    const password = useRef()

    const [auth, setAuth] = useState(false)

    const Login = () =>{
        if(login.current.value == 'admin' && password.current.value == 'admin123'){
            setAuth(true)
        }
        else{
            setAuth(false)
            alert('login yoki parol notog\'ri')
        }
    }

    return (
        <div>
            {
                auth ? (
                    <div>
                        <form class="m-5 row g-3" onSubmit={handleSubmit}>
                            <div class="col-md-6">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" class="form-control" placeholder='Telefon raqam kiriting misol: +998991234567' ref={inp} id="phone" required minLength={13} maxLength={13} />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Add user</button>
                            </div>
                        </form>
                        <table class="table" style={{ margin: '3rem', width: '80%' }}>
                            <thead>
                                <tr>
                                    <th scope="col" className='text-light'>phone</th>
                                    <th scope="col" className='text-light'>setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ? (
                                        data.map(el => (
                                            <tr key={el.id}>
                                                <td className='text-light'>{el.phone}</td>
                                                <td className='text-light'><button className='btn btn-primary' onClick={() => handleDelete(el.id)}>delete</button></td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3">No data found</td>
                                        </tr>
                                    )
                                }
                            </tbody>

                            <Link to='/'>Home page</Link>

                        </table>
                    </div>
                ):(
                    <div>
                        <div className="Auth">
                            <div className="Form">
                                <h4 className='text-dark text-center'>Login</h4>
                                <input type="text" ref={login} placeholder='Login Enter...' />
                                <input type="password" ref={password} placeholder='Password Enter...' />
                                <button className='btn btn-outline-primary' onClick={Login}>Login</button>
                            </div>
                        </div>
                    </div>
                )
           }
        </div>
    )
}

export default Admin

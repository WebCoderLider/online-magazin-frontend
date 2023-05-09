import React, { useEffect, useRef, useState } from 'react'
import './admin.css'
function Admin() {
    const [btn, setbtn] = useState(true)
    const btntrue = () => {
        setbtn(true)
    }
    const btnfalse = () => {
        setbtn(false)
    }
    const url = useRef()
    const title = useRef()
    const body = useRef()



    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            img: url.current.value,
            title: title.current.value,
            body: body.current.value
        };
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        url.current.value = ''
        title.current.value = ''
        body.current.value = ''
    }

    const deleteel = (id) => {
        fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data); //update the state after successful deletion
            })
            .catch(error => console.error(error));
    }


    // login parol uchun
    const login = useRef()
    const password = useRef()

    
    const [auth, setAuth] = useState(false)

    const authsubmit =() =>{
        if(login.current.value === 'admin' && password.current.value ==='admin123'){
            setAuth(true)
        }
        else{
            setAuth(false)
            alert("login yoki parol xato ekan")
        }
    }    

    // login parol uchun


    return (
        <div>
            {
                auth ? (
                    <div className="Admin">
                        <div className="Admin_Left">
                            <h4>online magazin</h4>
                            <button className={`btn ${btn ? 'btn-primary' : ''}`} onClick={btntrue}>add products</button>
                            <button className={`btn ${btn ? '' : 'btn-primary'}`} onClick={btnfalse}>buyurtmalar</button>
                        </div>
                        <div className="Admin_right">
                            <div>
                                <form class="row g-3 p-4">
                                    <div class="col-md-12">
                                        <label for="validationServer01" class="form-label">Image url</label>
                                        <input type="url" ref={url} class="form-control is-valid" id="validationServer01" required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationServer02" class="form-label">Title</label>
                                        <input type="text" ref={title} class="form-control is-valid" id="validationServer02" required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationServerUsername" class="form-label">about</label>
                                        <div class="input-group has-validation">
                                            <input type="text" ref={body} class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                                            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                                Please choose a body.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary" onClick={handleSubmit} type="submit">Add products</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <table class="table m-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">title</th>
                                            <th scope="col">setting</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data ? (
                                                data.map(el => (
                                                    <tr>
                                                        <th scope="row">{el.id}</th>
                                                        <td>{el.title}</td>
                                                        <td style={{ cursor: 'pointer' }} onClick={() => deleteel(el.id)}>Delete</td>
                                                    </tr>
                                                ))
                                            ) : ""
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="AdminLogin">
                        <div>
                            <h1 className='text-center'>Login</h1>
                            <input type="text" placeholder='Login....' ref={login} />
                            <input type="password" placeholder='password....' ref={password} />
                            <button onClick={authsubmit}>login</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Admin

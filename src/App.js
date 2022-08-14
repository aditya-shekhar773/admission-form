import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import AdmissionTable from './components/AdmissionTable';


function App() {

  
  const [data, setData] = useState([{ "name": "aditya" },]);
  const [name, setName] = useState([""])
  const [fathername, setFathername] = useState([""])
  const [mothername, setMothername] = useState([""])
  const [email, setEmail] = useState([""])
  const [contact, setContact] = useState([""])
  const [gender, setGender] = useState([""])
  const [dob, setDob] = useState([""])

  const handleSubmit = () => {
    fetch("https://www.codewithsadiq.com/api/student/add", {
      method: "post",
      body: JSON.stringify({
        'name': name,
        'father_name': fathername,
        'mother_name': mothername,
        'dob': dob,
        'contact': contact,
        'email': email,
        'gender': gender
      }),
      headers: {
        "content-type": "application/json"
      }
    }).then(res => console.log(res.data))
  }



  useEffect(() => {
    fetch("https://www.codewithsadiq.com/api/student")
      .then((res) => res.json())
      .then(res => setData(res));
  }, []);

  return (

    <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col-6'>
            <div className='card'>
              <label className='admission'><h5 style={{color:"green"}}>Apply for Addmission</h5></label>
              <div className='mb-3'>
                <label for="name">Name</label>
                <input type="text"  value={name} onChange={(e) => setName(e.target.value)} className='form-control rounded shadow-sm'></input>
              </div>
              <div className='row'>
                <div className='mb-3 col-lg-6'>
                  <label for="mothername">Mother Name</label>
                  <input type="text" value={mothername} onChange={(e) => setMothername(e.target.value)} className='form-control rounded shadow-sm'></input>
                </div>
                <div className='mb-3 col-lg-6'>
                  <label for="fathername">Father Name</label>
                  <input type="text" value={fathername} onChange={(e) => setFathername(e.target.value)} className='form-control rounded shadow-sm'></input>
                </div>
              </div>
              <div className='row'>
                <div className='mb-3 col-lg-6'>
                  <label for="contact">Contact</label>
                  <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className='form-control rounded shadow-sm'></input>
                </div>
                <div className='mb-3 col-lg-6'>
                  <label for="email">Email</label>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded shadow-sm'></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4 col-md-3 col-6'>
                  <label for='education'>Education</label>
                  <input type='text' className='form-control rounded shadow-sm'></input>
                </div>
                <div className='col-lg-4 col-md-3 col-6'>
                  <label for='dob'>Date Of Birth</label>
                  <input type='date' name='dob' value={dob} onChange={(e) => setDob(e.target.value)} className='form-control rounded shadow-sm'></input>
                </div>
                <div className='col-lg-4 col-md-3 col-6'>
                  <label for='gender'>Gender</label>
                  <input type='gender' value={gender} onChange={(e) => setGender(e.target.value)} className='form-control rounded shadow-sm'></input>
                </div>
              </div>
              <div className='mb-3'>
                <label for='address'>Address</label>
                <textarea type='text' name='address' id='address' col='30' row='5'  className='form-control'></textarea>
              </div>
              <div className='mb-3'>
                <button className='btn btn-success w-100' onClick={handleSubmit}>Submit</button>
              </div>
            </div>                
          </div>

          <div className='col-6'>
            <AdmissionTable data={data}/>
          </div>
        </div>
      </div> 
    </nav>

  );
}

export default App;

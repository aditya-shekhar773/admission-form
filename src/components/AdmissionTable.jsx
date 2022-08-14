import React from 'react'

const AdmissionTable = ({data}) => {
    let count=1;
  return (
    <table className='table table-border table-dark'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{
        data.map((value,key)=>(
        <tr key={key}>
          <td>{count++}</td>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.contact}</td>
          <td>True</td>
        </tr>
        ))}

      </tbody>
     </table>
  )
}

export default AdmissionTable
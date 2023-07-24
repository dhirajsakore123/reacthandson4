import React, { useState } from 'react'

const Students = () => {

const [data]=useState([
{name:'john',
age:26,
course:'MERN',
batch:'October',
change:'Edit'
}
,
{name:'Doe',
age:25,
course:'MERN',
batch:'November',
change:'Edit'
},
{name:'Biden',
age:26,
course:'MERN',
batch:'September',
change:'Edit'
}
,
{name:'Barar',
age:22,
course:'MERN',
batch:'September',
change:'Edit'
},
{name:'Christ',
age:23,
course:'MERN',
batch:'October',
change:'Edit'
},
{name:'Elent',
age:24,
course:'MERN',
batch:'November',
change:'Edit'
},
{name:'Harshita Sharma',
age:24,
course:'MERN',
batch:'October',
change:'Edit'
}
])

  return (
    <div>
    <h1>Students Details</h1>
    <div className='table-container'>
<table className='table'>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Course</th>
    <th>Batch</th>
    <th>Change</th>
    </tr>
    {
     data.map((item,index)=>{
        return(
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.course}</td>
            <td>{item.batch}</td>
            <td>{item.change}</td>
            
            </tr>  
        )
     })

    }
</table>
</div>
    </div>
  )
}

export default Students

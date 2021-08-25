// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useHistory, useParams } from 'react-router-dom';



//     const initialForm = {
//    first_name: '',
//     last_name: '',
//     email: ''
// }
  
//   export const EditPlant = () => {
//     const history = useHistory();
//     const [plantToEdit, setPlantToEdit] = useState(initialForm)
//     const {id} = useParams();


//   // updating form data
//   const handleSubmit = e => {
//     e.preventDefault();
//     axios().post(`${id}`, plantToEdit)
//       .then(res => {
//         console.log('post: ', res.data)
//         setPlantToEdit(res.data)
//         history.push(`/plant/${id}`)
//       })
//       .catch(err => console.error('something went wrong: ', err))
//   }

//   const changeHandler = e => {
//     e.persist();
//     let value = e.target.value;
//     setPlantToEdit({
//       ...plantToEdit,
//       [e.target.name]: value
//     })
//   }


//   return(
//     <div>
//         <form className="add-plant-form" onSubmit={handleSubmit}>
//         <h1 className="add-plant-header">Edit Your Plant</h1>
//         <div className="input-container">
//           <label className="add-plant-label">Plant's Nickname</label>
//             <input 
//               type='text'
//               name='first_name'
//               id='first_name'
//               value={plantToEdit.first_name}
//               onChange={changeHandler}
//             />
//           <label className="add-plant-label">Plant's Species</label>
//             <input 
//               type='text'
//               name="last_name"
//               id="last_name"
//               value={plantToEdit.last_name}
//               onChange={changeHandler}
//             />
//           <label className="add-plant-label">Watering Instructions</label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               value={plantToEdit.email}
//               onChange={changeHandler}
//             />
//           <div className="form-button-container">
//             <button className="add-plant-form-button submit-btn" type="submit">Update Plant</button>            
//             <Link to={`/plant/${id}`}></Link>
//               <button className="add-plant-form-button reset-btn">Cancel</button>
//           </div>
//           </div>
//         </form>
//     </div>
//   )
// }
import { useState } from "react";

// Todo : validate the radio and checkbox inputs
const ContactForm = () => {


const [dataForm , setDataForm] = useState({
    firstName:'',
    lastName:'',
    email:'',
    message:'',
    queryType:'',
    checked:false,
    })


// // we track the radio input with state
// const [query, setQuery]=useState('');

const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);  
    
    
    //or 
// const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', message: '' , checked:false });



const handleInputChange = (e) => {
setDataForm({
      ...dataForm,
      [e.target.name]:e.target.value

})
}

const handleQueryChange = (e) => {
setDataForm({...dataForm , queryType:e.target.value})
}

const handleSubmit = (e) => {
e.preventDefault();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!dataForm.firstName.trim() || 
!dataForm.lastName.trim() || 
!emailRegex.test(dataForm.email) || 
!dataForm.message.trim() || 
!dataForm.queryType || !dataForm.checked
  ) 
  {
  setError(true);
  setSuccess(false);
  return;
}else {
setError(false);
setSuccess(true);
console.log('Form submitted:', dataForm);
setDataForm('')
}





}



return (
<div className="flex flex-col-reverse items-center justify-center w-min">
  <form 
  className="border rounded-lg min-w-auto min-h-min  bg-FormBG p-4"
  onSubmit={handleSubmit}
  >
    <h2 className="font-Karla mb-2 font-semibold">Contact Us</h2>

    <div className="flex flex-col gap-0.5 w-min sm:flex-row mb-1" >
    <label className="flex flex-col  font-Karla text-GrayDark w-48 text-sm "> First Name  *


    <input
    name='firstName'
    value={dataForm.firstName}
    onChange={handleInputChange}
    className ={`border  ${error ? 'border-red-400' : 'border-GrayLight'}  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-1 w-min sm:w-46`}

    />

     {error && <span className="text-red-500 text-sm font-Karla">This field is required</span>}
    </label>
   

    <label className="flex flex-col font-Karla text-GrayDark w-48 text-sm "> Last Name *
      <input 
      name='lastName'
      value={dataForm.lastName}
      onChange={handleInputChange}
     className={`border  ${error ? 'border-red-400' : 'border-GrayLight'}  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-1 w-min sm:w-47 `}
     />
      {error && <span className="text-red-500 text-sm mb-0 font-Karla">This field is required</span>}
      
    </label>

    </div>

    <label className="flex flex-col text-GrayDark font-Karla mb-1  w-full " > Email Address *
      <input 
      name='email'
      value={dataForm.email}
      onChange={handleInputChange}
      className={`border sm:w-sm ${error ? 'border-red-400' :  'border-GrayLight'}  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-1 w-min sm:w-lg`} 
      />
      {error && <span className="text-red-500 text-sm mt-1 font-Karla">Please enter a valid Email address </span>}
    </label>
    
    
    <fieldset className="flex flex-col "> 
      <legend className="mb-1 font-Karla ">Query Type *</legend>

      <div className="flex flex-col gap-2 w-min  sm:flex-row sm:w-min">
      {/* for General Enquiry */}
    <label 
  className={`flex items-center border border-GrayLight p-2 rounded text-sm w-45 sm:w-46 hover:bg-PrimaryGreenLight ${dataForm.queryType === 'generalEnquiry' ? 'bg-PrimaryGreenLight' : ''} font-Karla`}
>
        <input 
        type="radio" 
        className="mr-2 mt-1 cursor-pointer accent-PrimaryGreenDark "
        name='queryType'
        value='generalEnquiry'
        onChange={handleQueryChange}
        checked={dataForm.queryType === 'generalEnquiry'}
        />
        General Enquiry
      </label>

      {/* for Support Request */}
        <label 
       className={`flex items-center border border-GrayLight p-2 rounded text-sm w-45 sm:w-47 hover:bg-PrimaryGreenLight ${dataForm.queryType === 'supportRequest' ? 'bg-PrimaryGreenLight' : ''} font-Karla`}>
        <input 
        className="mr-2 mt-1 cursor-pointer accent-PrimaryGreenDark font-Karla "
        type="radio" 
        name='queryType'
        value='supportRequest'
         onChange={handleQueryChange}
           checked={dataForm.queryType === 'supportRequest'}
        />
        Support Request
      </label>
      </div>
      {error && <span className="text-red-500 text-sm  mt-2 font-Karla">Please Select a query</span>}


{/* message */}
     <label className="font-Karla mt-1"> 
    Message *
    <textarea
      name='message'
      value={dataForm.message}
      onChange={handleInputChange}
      className={`w-full h-24 border ${error ? 'border-red-400' : 'border-PrimaryGreenDark '} rounded-md p-3 text-base resize-none mt-3`} 
      placeholder=""
    ></textarea> 
    {error && <span className="text-red-500 text-sm mb-0 font-Karla ">This field is required</span>}
  </label>

    <label className="flex items-center text-xs font-Karla mt-2   ">
      <input 
      className="mr-2 cursor-pointer accent-PrimaryGreenDark"
      type="checkbox" 
      onChange={(e) => {setDataForm ({...dataForm, checked:e.target.checked})}}/>
        I consent to being contacted by the team
    </label>
    { error && <span className="text-red-500 text-sm font-Karla mb-3">To submit this form, please consent to being contacted</span> }
    </fieldset>


    <button
    className="border w-full p-2 rounded-md text-FormBG bg-PrimaryGreenDark font-Karla text-xs mt-3"
    >Submit</button>

  </form>


  {success && <div className="border rounded-lg  max-w-4xs py-4 px-4  bg-GrayDark  text-FormBG  ">
    
   <h2 className="font-bold font-Karla">Message Sent!</h2> 
   <p className="text-xs font-Karla">Thanks for completing the form. We'll be in touch soon!</p> 
  
   </div>}




</div>


)
}
export default ContactForm;
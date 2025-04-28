import { useState } from "react";

// Todo : validate the radio and checkbox inputs
const ContactForm = () => {


const [dataForm , setDataForm] = useState({
    firstName:'',
    lastName:'',
    email:'',
    message:'',
    checked:false,
    })


// we track the radio input with state
const [query, setQuery]=useState('');

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
setQuery(e.target.value)
}

const handleSubmit = (e) => {
e.preventDefault();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!dataForm.firstName.trim() || 
!dataForm.lastName || 
!emailRegex.test(dataForm.email) || 
!dataForm.message.trim() ||
!dataForm.checked
  ) 
  {
  setError(true);
  setSuccess(false);
  return;
}else {
setError(false);
setSuccess(true);
}





}



return (
<>
  <form 
  className="border rounded-lg min-w-auto min-h-96  align-middle bg-FormBG p-8 "
  onSubmit={handleSubmit}
  >
    <h2 className="font-Karla mb-2 font-semibold">Contact Us</h2>

    <div className="flex flex-row gap-3" >
    <label className="flex flex-col  font-Karla text-GrayDark w-48"> First Name  *

    <input
    name='firstName'
    value={dataForm.firstName}
    onChange={handleInputChange}
    className ={`border  ${error ? 'border-red-400' : 'border-GrayLight'}  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-2`}

    />

     {error && <span className="text-red-500 text-sm font-Karla">This field is required</span>}
    </label>
   

    <label className="flex flex-col font-Karla text-GrayDark mb-2 w-48"> Last Name *
      <input 
      name='lastName'
      value={dataForm.lastName}
      onChange={handleInputChange}
     className={`border  ${error ? 'border-red-400' : 'border-GrayLight'}  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-2`}
     />
      {error && <span className="text-red-500 text-sm mb-0 font-Karla">This field is required</span>}
      
    </label>

    </div>

    <label className="flex flex-col text-GrayDark font-Karla mb-3 w-full " > Email Address *
      <input 
      name='email'
      value={dataForm.email}
      onChange={handleInputChange}
      className={`border max-w-xl ${error ? 'border-red-400' :  'border-GrayLight'}  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-2 "
      type="text" `} 
      />
      {error && <span className="text-red-500 text-sm mt-2 font-Karla">Please enter a valid Email address </span>}
    </label>
    
    
    <fieldset className="flex flex-col "> 
      <legend className="mb-2 font-Karla ">Query Type *</legend>

      <div className="flex flex-row gap-3 ">
      {/* for General Enquiry */}
    <label 
  className={`flex items-center border border-GrayLight p-2 rounded text-sm w-48   hover:bg-PrimaryGreenLight ${query === 'generalEnquiry' ? 'bg-PrimaryGreenLight' : ''} font-Karla`}
>
        <input 
        type="radio" 
        className="mr-2 mt-1 cursor-pointer accent-PrimaryGreenDark"
        name='queryType'
        value='generalEnquiry'
        onChange={handleQueryChange}
        checked={query === 'generalEnquiry'}
        />
        General Enquiry
      </label>

      {/* for Support Request */}
        <label 
       className={`flex items-center border border-GrayLight p-2 rounded text-sm w-48   hover:bg-PrimaryGreenLight ${query === 'supportRequest' ? 'bg-PrimaryGreenLight' : ''} font-Karla`}>
        <input 
        className="mr-2 mt-1 cursor-pointer accent-PrimaryGreenDark font-Karla"
        type="radio" 
        name='queryType'
        value='supportRequest'
         onChange={handleQueryChange}
           checked={query === 'supportRequest'}
        />
        Support Request
      </label>
      </div>
      {error && <span className="text-red-500 text-sm mb-2 mt-2 font-Karla">Please Select a query</span>}



     <label className="font-Karla mt-3"> 
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

    <label className="flex items-center text-xs font-Karla mt-3   ">
      <input 
      className="mr-2 cursor-pointer accent-PrimaryGreenDark"
      type="checkbox" 
      onChange={(e) => {setDataForm ({...dataForm, checked:e.target.checked})}}/>
        I consent to being contacted by the team
    </label>
    { error && <span className="text-red-500 text-sm font-Karla mb-3">To submit this form, please consent to being contacted</span> }
    </fieldset>


    <button
    className="border w-full p-3 rounded-md text-FormBG bg-PrimaryGreenDark font-Karla text-xs mt-3"
    >Submit</button>

  </form>


  {success && <div className="border rounded-lg  max-w-4xs py-4 px-4 absolute top-22 bg-GrayDark  text-FormBG  ">
    
   <h2 className="font-bold font-Karla">Message Sent!</h2> 
   <p className="text-xs font-Karla">Thanks for completing the form. We'll be in touch soon!</p> 
  
   </div>}




</>


)
}
export default ContactForm;
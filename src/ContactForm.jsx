const ContactForm = () => {

return (
  <form className="border rounded-lg min-w-auto min-h-96  align-middle bg-FormBG p-8 ">
    <h2 className="font-Karla">Contact Us</h2>

    <div className="flex flex-row gap-3 " >
    <label className="flex flex-col  font-Karla text-GrayDark w-48 mb-3 "> First Name  *

    <input
    className="border border-GrayLight hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-2"
    />

    </label>

    <label className="flex flex-col font-Karla text-GrayDark mb-3 w-48"> Last Name *
      <input 
  
      className="border border-GrayLight  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-2" />
    </label>

    </div>

    <label className="flex flex-col text-GrayDark font-Karla mb-3 w-full " > Email Address *
      <input 
      className="border max-w-xl  border-GrayLight  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded mt-2 "
      type="text" />
    </label>
    
    
    <fieldset className="flex flex-col "> 
      <legend className="mb-2 font-Karla ">Query Type *</legend>

      <div className="flex flex-row gap-3 mb-3">
      {/* for General Enquiry */}
      <label 
      className="flex items-center border border-GrayLight p-2 rounded text-sm w-48" >
        <input 
        type="radio" 
        className="mr-2 mt-1 cursor-pointer accent-PrimaryGreenDark"
        name='queryType'
        value='generalEnquiry'
        />
        General Enquiry
      </label>

      {/* for Support Request */}
        <label 
      className="flex items-center border border-GrayLight p-2 rounded text-sm w-48" >
        <input 
        className="mr-2 mt-1 cursor-pointer accent-PrimaryGreenDark font-Karla"
        type="radio" 
        name='queryType'
        value='supportRequest'
        />
        Support Request
      </label>
      </div>



     <label className="font-Karla"> 
    Message *
    <textarea
      id="message"
      className="w-full h-24 border border-gray-300 rounded-md p-3 text-base resize-none mt-3"
      placeholder=""
    ></textarea>
  </label>

    <label className="flex  items-center text-xs font-Karla mt-2  mb-3 ">
      <input 
      className="mr-2 cursor-pointer accent-PrimaryGreenDark"
      type="checkbox"  />
        I consent to being contacted by the team
    </label>
    </fieldset>


    <button
    className="border w-full p-3 rounded-md text-FormBG bg-PrimaryGreenDark font-Karla text-xs mt-3"
    >Submit</button>

  </form>


)
}
export default ContactForm;
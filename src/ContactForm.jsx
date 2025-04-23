const ContactForm = () => {

return (
  <form className="border rounded-lg min-w-auto min-h-96  align-middle bg-FormBG p-8 ">
    <h2>Contact Us</h2>

    <div className="flex flex-row gap-3 " >
    <label className="flex flex-col text-GrayDark "> First Name

    <input
    className="border border-GrayLight hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded"
    />

    </label>

    <label className="flex flex-col text-GrayDark "> Last Name
      <input 
      className="border border-GrayLight  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded" />
    </label>

    </div>

    <label className="flex flex-col text-GrayDark " > Email Address
      <input 
      className="border max-w-lg  border-GrayLight  hover:border-PrimaryGreenDark cursor-pointer focus:border-PrimaryGreenDark focus:outline-none p-1 rounded"
      type="text" />
    </label>
    
    
    <fieldset className="flex flex-col ">
      <legend className="mb-2">Query Type </legend>

      <div className="flex flex-row gap-3">
      <label 
      className="flex items-center border border-GrayLight  p-1 rounded text-sm" >
        <input 
        className="mr-2 cursor-pointer accent-PrimaryGreenDark"
        type="radio" />
        
        General Enquiry
      </label>
      </div>
      
    
    </fieldset>
  </form>


)
}
export default ContactForm;
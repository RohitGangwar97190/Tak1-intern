
import React, { useRef,useState  } from 'react';

const Form2 = () => {
    const fileInputRefcv = useRef(null);

    const handleClickcv = () => {
      fileInputRef.current.click(); 
    };
  
    const handleFileChangecv = (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log('File selected:', file.name);
        
      }
    };
    const fileInputRefvid = useRef(null);

    const handleClickvid = () => {
      fileInputRef.current.click(); 
    };
  
    const handleFileChangevid = (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log('File selected:', file.name);
       
      }
    };
    const fileInputRefid = useRef(null);

    const handleClickid= () => {
      fileInputRef.current.click(); 
    };
  
    const handleFileChangeid = (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log('File selected:', file.name);
        
      }
    };
    

    
    const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
     
    }
  };

  return (
    <div className="flex flex-col  sm:flex-row">
      <div className="relative w-full sm:w-1/4 flex justify-center sm:justify-end p-7 ">
        <div >
          <img className=" relative h-[15vh] rounded-full" src="/profile-img.webp" alt="Profile" />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="absolute right-[40vw] top-[11vh] sm:right-24 sm:top-[15vh] md:right-14 md:top-[14vh] border border-black text-5xl text-black bg-white rounded-full p-2 z-10"
            onClick={handleClick}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-full sm:w-3/4 p-4 ">
        <h2 className="text-5xl font-bold mb-6">Fill Your Details to Apply for Job Directly</h2>
        <form>
          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <input
              type="text"
              placeholder="Your Full name*"
              className="placeholder-black bg-purple-200 font-bold text-3xl text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
            />
            <input
              type="email"
              placeholder="Email ID*"
              className="placeholder-black font-bold text-3xl bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
            />
            <select
              className="placeholder-black font-bold text-3xl bg-purple-200 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
              required
            >
              <option value="" disabled defaultValue>Gender*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <input
              type="number"
              placeholder="Mobile Number*"
              className="placeholder-black font-bold text-3xl bg-purple-200 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
            />
            <input
              type="text"
              placeholder="Current Address"
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <input
              type="date"
              placeholder="DOB [DD/MM/YYYY]"
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
            />
            <select
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
              required
            >
              <option value="" disabled defaultValue>Select State*</option>
              
            </select>
            <select
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
              required
            >
              <option value="" disabled defaultValue>Select City*</option>
            
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <select
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
              required
            >
              <option value="" disabled defaultValue>Work Experience*</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input
              type="number"
              placeholder="Pincode*"
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
            />
            <select
              className="placeholder-black font-bold text-3xl  bg-purple-200  text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
              required
            >
              <option value="" disabled defaultValue>Select Education*</option>
              <option value="high-school">High School</option>
              <option value="associate-degree">Associate Degree</option>
              <option value="bachelor-degree">Bachelor's Degree</option>
              <option value="master-degree">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
              <option value="diploma">Diploma</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <textarea
              className= "  placeholder-black font-bold text-3xl bg-purple-200 text-black border rounded-2xl py-2 w-[50%] min-h-[20vh]"
              placeholder="Additional Information"
            />
          </div>
          <div className='flex  flex-row'>
          <div className="p-4   w-[60%]">
      <label htmlFor="language" className="block text-2xl  font-bold mb-2">
        Select Known Language
      </label>
      <select
        id="language"
        name="language"
        value={selectedLanguage}
        onChange={handleChange}
        className="font-bold text-xl text-black border bg-purple-200 rounded-full py-2 
             w-[50vw] 
             sm:w-[80%] 
             md:w-[60%] 
             lg:w-[70%] 
             xl:w-[35%] 
             2xl:w-[25%"
      >
        <option value="" disabled>Select a language</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="chinese">Chinese</option>
        <option value="japanese">Japanese</option>
        <option value="korean">Korean</option>
        <option value="hindi">Hindi</option>
        <option value="arabic">Arabic</option>
       
      </select>
      <div className="mt-4">
        <p className="font-bold">Selected Language:</p>
        <p className="text-xl">{selectedLanguage || 'None'}</p>
      </div>
      </div>
    
    <div className="p-4 flex flex-col items-center">
      
      <input
        type="file"
        ref={fileInputRefcv}
        className="hidden"
        onChange={handleFileChangecv}
      />

     
      <button
        type="button"
        onClick={handleClickcv}
        className="bg-purple-200 items-center font-bold  text-black rounded-full p-4 text-2xl"
      >
        Upload your CV
      </button>
      
      
    </div>
    

      
  </div>
          <div className="mb-6">
            <textarea
              className= "  placeholder-black font-bold bg-purple-200 text-3xl text-black border rounded-4xl py-2 w-[50%] min-h-[20vh]"
              placeholder="Mention the other skill"
            />
          </div>
          <div className="p-4 flex flex-col ">
      
      <input
        type="file"
        ref={fileInputRefid}
        className="hidden"
        onChange={handleFileChangeid}
      />

      
      <button
        type="button"
        onClick={handleClickid}
        className="bg-purple-200 font-bold rounded-full p-4 text-black text-xl w-[30%]"
      >
        Upload your any other skill
      </button>
    </div>
    <div className="p-4 flex flex-col ">
      
      <input
        type="file"
        ref={fileInputRefvid}
        className="hidden"
        onChange={handleFileChangevid}
      />

      
      <button
        type="button"
        onClick={handleClickvid}
        className="bg-purple-200 text-black  placeholder-black rounded-full font-bold p-4 text-xl w-[80%]"
      >
        Upload your one minute audio or video
      </button>
    </div>
    <div className='flex justify-end mr-32  '>

    <button className=' bg-blue-800 w-48  placeholder-black rounded-3xl h-12 text-3xl' type='Submit'>Submit Now</button>
    </div>
        </form>
      </div>
    </div>
  );
};

export default Form2;

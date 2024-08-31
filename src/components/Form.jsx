
import React, { useRef } from 'react';

const Form = () => {
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

    <div className=" flex flex-col sm:flex-row">
     <div className="w-full  relative sm:w-1/4 flex items-center justify-center sm:justify-end p-7">
        
        <div>
        <img className='h-[15vh] rounded-full' src="/profile-img.webp"></img>
        <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      
      <button
        type="button"
        className="absolute right-[40vw] top-[11vh] sm:right-14 sm:top-[20vh] md:right-14 md:top-[20vh] border border-black text-5xl text-black bg-white rounded-full p-2 z-10"

                  onClick={handleClick}
      >
        +
      </button>
        </div>
      </div>
      <div className="w-3/4 p-4">
        <div>
          <h2 className=' text-5xl font-bold'>Fill Your Details Before Applying</h2>
          <div className='flex flex-col   '>
            <form>
              <div>
                <div className="flex flex-col sm:flex-row gap-8  m-6">
                  <input
                    type="text"
                    placeholder="Your Full name*"
                    className="placeholder-black font-bold text-3xl  bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%] "
                  />
                  <input
                    type="email"
                    placeholder="Email ID*"
                    className="placeholder-black font-bold text-3xl bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                  />

                  <select
                    className="placeholder-black font-bold text-3xl bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                    required>

                    <option value="" disabled selected>Gender*</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                </div>
              </div>
              <div>
                <div className=" flex flex-col sm:flex-row  gap-8    text-black m-6 ">
                  <input
                    type="number"
                    placeholder="Mobile Number*"
                    className="placeholder-black font-bold text-3xl  bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                  />
                  <input
                    type="text"
                    placeholder="Current Address"
                    className="placeholder-black font-bold text-3xl  bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                  />

                </div>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-8 m-6 ">
                  <input
                    type="date"
                    placeholder="DOB [DD/MM/YYYY]"
                    className="placeholder-black font-bold text-3xl bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                  />
       
                  <select
                    className="placeholder-black font-bold text-3xl bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                    required
                  >
                    <option value="" disabled selected>Select State*</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="arunachal-pradesh">Arunachal Pradesh</option>
                    <option value="assam">Assam</option>
                    <option value="bihar">Bihar</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="haryana">Haryana</option>
                    <option value="himachal-pradesh">Himachal Pradesh</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="kerala">Kerala</option>
                    <option value="madhya-pradesh">Madhya Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="manipur">Manipur</option>
                    <option value="meghalaya">Meghalaya</option>
                    <option value="mizoram">Mizoram</option>
                    <option value="nagaland">Nagaland</option>
                    <option value="odisha">Odisha</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="tripura">Tripura</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="west-bengal">West Bengal</option>
                    <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="dadra-nagar-haveli-daman-diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="delhi">Delhi</option>
                    <option value="jammu-kashmir">Jammu and Kashmir</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="lakshadweep">Lakshadweep</option>
                    <option value="puducherry">Puducherry</option>
                  </select>

                  <select
                    className="placeholder-black font-bold text-3xl bg-blue-300 text-black border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                    required
                  >
                    <option value="" disabled selected>Select City*</option>
                    <option value="lucknow">Lucknow</option>
                    <option value="kanpur">Kanpur</option>
                    <option value="varanasi">Varanasi</option>
                    <option value="agra">Agra</option>
                    <option value="ghaziabad">Ghaziabad</option>
                    <option value="meerut">Meerut</option>
                    <option value="prayagraj">Prayagraj</option>
                    <option value="bareilly">Bareilly</option>
                    <option value="moradabad">Moradabad</option>
                    <option value="firozabad">Firozabad</option>
                    <option value="aligarh">Aligarh</option>
                    <option value="etawah">Etawah</option>
                    <option value="sultanpur">Sultanpur</option>
                    <option value="rampur">Rampur</option>
                    <option value="jhansi">Jhansi</option>
                    <option value="basti">Basti</option>
                    <option value="shahjahanpur">Shahjahanpur</option>
                    <option value="hathras">Hathras</option>
                    <option value="sitapur">Sitapur</option>
                    <option value="kushinagar">Kushinagar</option>
                  </select>

                </div>
              </div>
              <div>
                <div className=" flex flex-col sm:flex-row  gap-8 m-6  h-[50px]">
       
                  <select
                    className="placeholder-black font-bold text-3xl text-black bg-blue-300  border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                    required
                  >
                    <option value="" disabled selected>Work Experience*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <input
                    type="number"
                    placeholder="Pincode*"
                    className="placeholder-black font-bold text-3xl text-black bg-blue-300 border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                  />
                  <select
                    className="placeholder-black font-bold text-3xl text-black bg-blue-300 border rounded-full py-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%]"
                    required
                  >
                    <option value="" disabled selected>Select Education*</option>
                    <option value="high-school">High School</option>
                    <option value="associate-degree">Associate Degree</option>
                    <option value="bachelor-degree">Bachelor's Degree</option>
                    <option value="master-degree">Master's Degree</option>
                    <option value="doctorate">Doctorate</option>
                    <option value="diploma">Diploma</option>
                    <option value="other">Other</option>
                  </select>

                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Form
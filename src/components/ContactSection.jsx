import React,{useState} from 'react'

function ContactSection() {

  const [userName,setUserName] = useState("");
  const [userEmail,setEmail] = useState("");
  const [message,msgInput] = useState("");
  const [messageState,setMessageState]=useState({
    status:true,
    message:null
  });

  const formArray = [
    {
        type: 'text',
        placeholder: 'Enter your name',
        value:userName,
        setFunct:setUserName
    },
    {
        type: 'email',
        placeholder: 'Enter your email address',
        value:userEmail,
        setFunct:setEmail
    },
    {
        type: 'message',
        placeholder: 'Type your message',
        value:message,
        setFunct:msgInput
    },
    // Add more fields as needed
];
  const submitData =async ()=>{
    if(!userName || !userEmail || !message){
      setMessageState({
        status:false,
        message:"Please fill all the Data."
      })
      return null;
    }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(userEmail)){
      setMessageState({
        status:false,
        message:"Please Enter Valid Email."
      })
      return null;
    }

    // console.log("debug21");
    let url = 'https://api.sheety.co/3f0548a2f34f13c782c2612e5ea52e8f/jobHunting/formResponse';
    let body = {
      formResponse: {
        "name":userName,
        "email":userEmail,
        "message":message
      }
    } 
    try{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        setMessageState({
          status:true,
          message:"Message Sent Succesfully."
        })
        console.log(json.formResponse);
        setUserName('');
        setEmail('');
        msgInput('');
      });
    }catch(error){
      setMessageState({
        status:false,
        message:"Something went wrong."
      })

    }

    // console.log(userName,userEmail,message)
  }
  return (
    <div className=" p-6 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.10)_0px_3px_8px]">
        <div> 
          
            <h2 className="text-3xl font-semibold text-indigo-900">Contact me:</h2>
            {messageState.message?<p className={`inline-block mt-4 px-2 py-1  ${messageState.status?"bg-green-200 border-2 border-green-400 text-green-500":"bg-red-200 border-2 border-red-400 text-red-500"}`}>{messageState?.message}</p>:null}

            <div className='my-3'>
              {formArray.map((e,index)=>{return(<div className=' my-5  border border-gray-300 rounded-md' key={index}>
                <input type={e.type} value={e.value} onChange={(event)=>e.setFunct(event.target.value)} className='bg-slate-100 w-full p-3 text-gray-700 outline-gray-400 rounded-md' placeholder={e.placeholder} />
                </div>)})}
            </div>
            <div>
              <button onClick={()=>submitData()} className='bg-indigo-900 text-white font-semibold py-3 px-3 rounded-md'>Send Message.</button>
            </div>
        </div>
    </div>
  )
}

export default ContactSection
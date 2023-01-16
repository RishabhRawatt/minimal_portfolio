import React from "react";
import Title from "./Title";

function Contact(){

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/41d57070-0a00-455f-9a99-63a1c5ebd560"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                <input 
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                 />
                 <input 
                type="text"
                name="email"
                placeholder="Email"
                className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                 />
                 <textarea 
                 name="message" 
                 placeholder="Message"  
                 rows="10"
                 className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                 />
                 <button 
                    type="submit"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-md active:scale-[.97] active:duration-75 transition-all hover:scale-[1.02]">
                    Work Together?
                 </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;

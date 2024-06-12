import React, { useState } from 'react'

export default function Textbox() {
    const [text, setText] = useState('')
    const [words,setWords]=useState(0)
    const [chars,setChars]=useState(0)

    return (
        <div className='w-full flex justify-center mt-8'>
            <div className='w-2/3 flex flex-col'>
                <h1 className='font-bold text-2xl place-self-start'>Text to Upper Case</h1>
                <textarea onKeyDown={(event)=>{
                    if(event.key==="Enter" && event.shiftKey){
                        console.log("Enter")
                    }else if(!event.shiftKey && event.key==="Enter"){
                        event.preventDefault()
                        // document.getElementById('myb').click();
                        document.querySelector('#myb').click();
                }}
                } onChange={(e)=>{
                    setText(e.target.value)
                    setWords(text.replace(/\s+/g,' ').trim().split(' ').length)
                    setChars(e.target.value.length)
                }} value={text} className='form-control rounded-xl w-full mt-2 mb-4 p-4' placeholder='Enter Text Here...' rows={8}></textarea>
                <div className='flex justify-between px-4'>

                <button id='myb' onClick={()=>{
                    setText(text.toUpperCase())
                    }} className='bg-lime-300 text-xl shadow-green-950 rounded w-32 shadow-inner py-2 px-6 ease-in-out duration-100 hover:-translate-y-1 hover:shadow-[3px_3px_5px] hover:scale-90'>Convert</button>
                <button id='myb2' onClick={()=>{
                    navigator.clipboard.writeText(text)
                    document.getElementById('myb2').textContent="Copied"
                    document.getElementById('myb2').style.backgroundColor="black"
                    document.getElementById('myb2').style.color="white"
                    setTimeout(() => {
                        document.getElementById('myb2').textContent="Copy"
                        document.getElementById('myb2').style.backgroundColor="#bef264"
                        document.getElementById('myb2').style.color="black"
                        }, 1000);
                    }} className='bg-lime-300 text-xl shadow-green-950 rounded w-32 shadow-inner py-2 px-6 ease-in-out duration-10 hover:-translate-y-1 hover:shadow-[3px_3px_5px] hover:scale-90'>Copy</button>
                </div>
                <div>
                    <h2 className='px-4'><b className='text-xl'>{words}</b> Words and <b className='text-xl'>{chars}</b> Characters</h2>
                </div>
            </div>
        </div>
    )
}

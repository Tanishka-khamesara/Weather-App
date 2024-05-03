import React from 'react'

const Data = () => {
    const as = () =>{
        const api = async() =>{
            const res = await fetch(`${apiKeys.base}weather?q=${
                city != "[object Object]" ? city : query
              }&units=metric&APPID=${apiKeys.key}`)
            
              const data = res.json();
              console.log(data);
        }
        api();
    }
  return (
    <div>
      
    </div>
  )
}

export default Data

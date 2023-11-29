
import React, { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'

const InputTel = ({className,onChange,value}) => {
  
  return (  
  <div className={className}>
    <MuiTelInput value={value} onChange={onChange} flagSize="medium"  defaultCountry="IN" className='w-full' placeholder='Phone Number'/>
  </div>)

}
export default InputTel
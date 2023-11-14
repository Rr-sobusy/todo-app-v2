import React from 'react'

type Props = {
    children : string;
}

const AddBtn:React.FC<Props> = ({children}) => {
  return (
    <div className='px-3 py-2 bg-blue-200 rounded-md'>{children}</div>
  )
}

export default AddBtn
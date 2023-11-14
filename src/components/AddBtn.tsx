import React from 'react'

type Props = {
    children : string;
    className?:string;
}

const AddBtn:React.FC<Props> = ({children, className}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default AddBtn
import { Children, ReactNode } from "react"

interface prop {
    children : ReactNode;
}

function Wrapperr( {children }: prop ) {
  return (
    <div className="max-w-350 mx-auto px-8">
        {children}
    </div>
  )
}

export default Wrapperr
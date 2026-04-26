import { Children, ReactNode } from "react"

interface prop {
    children : ReactNode;
}

function Wrapperr( {children }: prop ) {
  return (
    <div className="max-w-300 lg:max-w-350 mx-auto lg:px-8 px-2``">
        {children}
    </div>
  )
}

export default Wrapperr
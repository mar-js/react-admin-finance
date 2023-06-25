import { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="w-9/12 m-auto flex flex-col justify-center items-center">
    { children }
  </div>
)

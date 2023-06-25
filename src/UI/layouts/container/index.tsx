import { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="w-10/12 m-auto flex justify-between items-center">
    { children }
  </div>
)

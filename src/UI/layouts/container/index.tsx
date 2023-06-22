import { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="h-full w-10/12 m-auto">
    { children }
  </div>
)

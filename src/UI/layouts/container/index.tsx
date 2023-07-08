import { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full m-auto flex flex-wrap justify-center items-star gap-5">
    { children }
  </div>
)

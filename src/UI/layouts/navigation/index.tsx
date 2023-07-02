import { PropsWithChildren } from 'react'

export const Navigation: React.FC<PropsWithChildren> = ({ children }) => (
  <nav className="w-full">
    { children }
  </nav>
)

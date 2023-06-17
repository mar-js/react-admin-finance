import { PropsWithChildren } from 'react'

export const Navigation: React.FC<PropsWithChildren> = ({ children }) => (
  <nav className="p-6">
    { children }
  </nav>
)

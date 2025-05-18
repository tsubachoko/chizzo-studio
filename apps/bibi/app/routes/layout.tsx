import { Outlet } from 'react-router'
import Header from '~/components/Header'

export default function Terms() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-2">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

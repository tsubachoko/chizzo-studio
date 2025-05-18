import { Outlet } from 'react-router'

export default function Terms() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-2">
        <Outlet />
      </div>
    </div>
  )
}

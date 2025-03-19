import { Bell } from "lucide-react"
import Logo from "../assets/Layer_1.png"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-white border-b">
      <div className="flex items-center">
        <img src={Logo} alt="E-Doc Logo" width={100} height={40} className="h-10 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IrvyNA6eIRRiETSdaT1EqJ1wZYAh1s.png"
              alt="User avatar"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Omar Boudelia</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}


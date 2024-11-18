import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen space-x-4">
    <div className="w-1/5  bg-red-500">Sidebar</div>
    <div className="w-4/5 bg-green-700">Main Content</div>
    </div>
  )
}
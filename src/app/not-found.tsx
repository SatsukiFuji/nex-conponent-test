import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-xl font-medium">Page Not Found</p>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">Go back home</Link>
    </div>
  )
}

export default NotFoundPage
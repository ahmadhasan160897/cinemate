import NotFound from "../images/page_not_found.jpg"
import { Link } from "react-router-dom"
import { Button } from "../components"
import { useEffect } from "react"

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-2">
          <p className="text-7xl text-gray-700 font-bold my-8 dark:text-white ">Oops! Page Not Found</p>
          <div className="max-w-lg">
            <img className="rounded" src={NotFound} alt="Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
        </section>
      </main>
  )
}

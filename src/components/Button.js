export const Button = ({children}) => {
  return (
    <div>
      <button className="text-black dark:text-white w-60 text-2xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">{children}</button>
    </div>
  )
}


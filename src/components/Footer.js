import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <NavLink to="/" className="hover:underline">Cinemate</NavLink>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <NavLink to="https://www.instagram.com/ahmadhasan428?igsh=MTdxczlqemxhcHAzdA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</NavLink>
        </li>
        <li>
            <NavLink to="https://www.linkedin.com/in/ahmad-hasan-178519186" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</NavLink>
        </li>
        <li>
            <NavLink to="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">YouTube</NavLink>
        </li>
        <li>
            <NavLink to="https://github.com/ahmadhasan160897" target="_blank" rel="noreferrer" className="hover:underline">GitHub</NavLink>
        </li>
    </ul>
    </div>
</footer>

  )
}

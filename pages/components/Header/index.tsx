import Link from "next/link";
import { useState } from "react";

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-gray-100 border-b border-gray-200 px-4 py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg width="182" height="30" viewBox="0 0 182 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.6633 0C9.12483 0 6.77919 1.35426 5.50995 3.55263L0.951925 11.4474C-0.317307 13.6457 -0.317309 16.3543 0.951925 18.5526L5.50995 26.4474C6.77919 28.6457 9.12483 30 11.6633 30H20.7794C23.3178 30 25.6634 28.6457 26.9327 26.4474L31.4907 18.5526C32.7599 16.3543 32.7599 13.6457 31.4907 11.4474L26.9327 3.55263C25.6634 1.35426 23.3178 0 20.7794 0H11.6633ZM20.7794 4.73684H15.0818C14.1702 4.73684 13.6006 5.7236 14.0571 6.51268C15.4655 8.94726 16.8772 11.38 18.2836 13.8158C18.7067 14.5486 18.7067 15.4514 18.2836 16.1842C16.8772 18.62 15.4655 21.0527 14.0571 23.4873C13.6006 24.2764 14.1702 25.2632 15.0818 25.2632H20.7794C21.6255 25.2632 22.4074 24.8117 22.8305 24.0789L27.3885 16.1842C27.8116 15.4514 27.8116 14.5486 27.3885 13.8158L22.8305 5.92105C22.4074 5.18826 21.6255 4.73684 20.7794 4.73684Z" fill="#335DDE"/>
            <path d="M52.8926 24.2812C51.4629 24.2812 50.2168 24.0156 49.1543 23.4844C48.0996 22.9453 47.2793 22.2031 46.6934 21.2578C46.1152 20.3047 45.8262 19.207 45.8262 17.9648V6.53906H48.8848V17.7188C48.8848 18.8281 49.2441 19.7422 49.9629 20.4609C50.6895 21.1797 51.666 21.5391 52.8926 21.5391C54.1191 21.5391 55.0918 21.1797 55.8105 20.4609C56.5293 19.7422 56.8887 18.8281 56.8887 17.7188V6.53906H59.9473V17.9648C59.9473 19.207 59.6543 20.3047 59.0684 21.2578C58.4902 22.2031 57.6699 22.9453 56.6074 23.4844C55.5527 24.0156 54.3145 24.2812 52.8926 24.2812ZM68.1113 24.2812C65.9473 24.2812 64.252 23.7539 63.0254 22.6992C61.8066 21.6367 61.1973 20.1719 61.1973 18.3047H64.2324C64.248 19.3594 64.5957 20.1836 65.2754 20.7773C65.9629 21.3711 66.916 21.668 68.1348 21.668C69.2207 21.668 70.0957 21.4414 70.7598 20.9883C71.4238 20.5273 71.7559 19.9141 71.7559 19.1484C71.7559 18.5312 71.5059 18.0312 71.0059 17.6484C70.5059 17.2578 69.6738 16.9297 68.5098 16.6641L66.6348 16.2422C64.8926 15.8438 63.6074 15.2539 62.7793 14.4727C61.9512 13.6914 61.5371 12.6875 61.5371 11.4609C61.5371 10.4219 61.8027 9.51172 62.334 8.73047C62.873 7.94922 63.623 7.34375 64.584 6.91406C65.5527 6.47656 66.6777 6.25781 67.959 6.25781C69.9121 6.25781 71.459 6.75391 72.5996 7.74609C73.748 8.73828 74.3457 10.1016 74.3926 11.8359H71.4512C71.3887 10.9141 71.0449 10.1914 70.4199 9.66797C69.7949 9.14453 68.9707 8.88281 67.9473 8.88281C66.9785 8.88281 66.1855 9.10938 65.5684 9.5625C64.9512 10.0156 64.6426 10.5977 64.6426 11.3086C64.6426 11.8945 64.8848 12.3711 65.3691 12.7383C65.8613 13.0977 66.6777 13.4062 67.8184 13.6641L69.5879 14.0742C71.4004 14.4727 72.7285 15.0664 73.5723 15.8555C74.416 16.6445 74.8379 17.6797 74.8379 18.9609C74.8379 20.0469 74.5645 20.9883 74.0176 21.7852C73.4707 22.582 72.6934 23.1992 71.6855 23.6367C70.6777 24.0664 69.4863 24.2812 68.1113 24.2812ZM82.041 24H76.1465V6.53906H82.1699C83.9043 6.53906 85.4004 6.89453 86.6582 7.60547C87.916 8.30859 88.8848 9.3125 89.5645 10.6172C90.2441 11.9141 90.584 13.457 90.584 15.2461C90.584 17.0508 90.2441 18.6094 89.5645 19.9219C88.8848 21.2266 87.9043 22.2344 86.623 22.9453C85.3496 23.6484 83.8223 24 82.041 24ZM79.2402 21.3516H81.877C83.7754 21.3516 85.1777 20.8203 86.084 19.7578C86.998 18.6875 87.4551 17.1836 87.4551 15.2461C87.4551 13.3242 87.002 11.8359 86.0957 10.7812C85.1895 9.71875 83.8145 9.1875 81.9707 9.1875H79.2402V21.3516ZM95.291 24L90.6387 11.625H93.7676L96.0293 18.0703C96.1934 18.5625 96.3496 19.0547 96.498 19.5469C96.6543 20.0312 96.8066 20.5156 96.9551 21C97.1035 20.5156 97.252 20.0312 97.4004 19.5469C97.5488 19.0547 97.7012 18.5625 97.8574 18.0703L100.084 11.625H103.178L98.5254 24H95.291ZM110.65 11.625V14.0039H108.131V20.4492C108.131 20.8945 108.221 21.2031 108.4 21.375C108.58 21.5391 108.908 21.6211 109.385 21.6211H110.65V24H108.869C107.611 24 106.678 23.7461 106.068 23.2383C105.467 22.7305 105.166 21.9453 105.166 20.8828V14.0039H103.01V11.625H105.166V8.25H108.131V11.625H110.65Z" fill="#0D0D12"/>
          </svg>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-500 transition duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="text-gray-600 hover:text-blue-500 transition duration-200"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="text-gray-600 hover:text-blue-500 transition duration-200"
              >
                Company
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-200">
            GET USDvt
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 mt-2 shadow-md rounded-md px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-500"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="text-gray-600 hover:text-blue-500"
                onClick={closeMenu}
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="text-gray-600 hover:text-blue-500"
                onClick={closeMenu}
              >
                Company
              </Link>
            </li>
          </ul>

          <div className="mt-4">
            <button
              onClick={closeMenu}
              className="w-full bg-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-200"
            >
              GET USDvt
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Footer() {
return (
<footer className="bg-[#335DDE] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans leading-relaxed">
  {/* Top grid */}
  <div
    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[260px_repeat(3,1fr)] gap-12 lg:gap-8 text-left sm:text-left">
    {/* Brand & socials */}
    <div className="flex flex-col justify-between">
      <div className="flex items-center mb-8 sm:mb-0">
        <svg width="182" height="30" viewBox="0 0 182 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M11.6633 0C9.12483 0 6.77919 1.35426 5.50995 3.55263L0.951925 11.4474C-0.317307 13.6457 -0.317309 16.3543 0.951925 18.5526L5.50995 26.4474C6.77919 28.6457 9.12483 30 11.6633 30H20.7794C23.3178 30 25.6634 28.6457 26.9327 26.4474L31.4907 18.5526C32.7599 16.3543 32.7599 13.6457 31.4907 11.4474L26.9327 3.55263C25.6634 1.35426 23.3178 0 20.7794 0H11.6633ZM20.7794 4.73684H15.0818C14.1702 4.73684 13.6006 5.7236 14.0571 6.51268C15.4655 8.94726 16.8772 11.38 18.2836 13.8158C18.7067 14.5486 18.7067 15.4514 18.2836 16.1842C16.8772 18.62 15.4655 21.0527 14.0571 23.4873C13.6006 24.2764 14.1702 25.2632 15.0818 25.2632H20.7794C21.6255 25.2632 22.4074 24.8117 22.8305 24.0789L27.3885 16.1842C27.8116 15.4514 27.8116 14.5486 27.3885 13.8158L22.8305 5.92105C22.4074 5.18826 21.6255 4.73684 20.7794 4.73684Z"
            fill="white" />
          <path
            d="M52.8926 24.2812C51.4629 24.2812 50.2168 24.0156 49.1543 23.4844C48.0996 22.9453 47.2793 22.2031 46.6934 21.2578C46.1152 20.3047 45.8262 19.207 45.8262 17.9648V6.53906H48.8848V17.7188C48.8848 18.8281 49.2441 19.7422 49.9629 20.4609C50.6895 21.1797 51.666 21.5391 52.8926 21.5391C54.1191 21.5391 55.0918 21.1797 55.8105 20.4609C56.5293 19.7422 56.8887 18.8281 56.8887 17.7188V6.53906H59.9473V17.9648C59.9473 19.207 59.6543 20.3047 59.0684 21.2578C58.4902 22.2031 57.6699 22.9453 56.6074 23.4844C55.5527 24.0156 54.3145 24.2812 52.8926 24.2812ZM68.1113 24.2812C65.9473 24.2812 64.252 23.7539 63.0254 22.6992C61.8066 21.6367 61.1973 20.1719 61.1973 18.3047H64.2324C64.248 19.3594 64.5957 20.1836 65.2754 20.7773C65.9629 21.3711 66.916 21.668 68.1348 21.668C69.2207 21.668 70.0957 21.4414 70.7598 20.9883C71.4238 20.5273 71.7559 19.9141 71.7559 19.1484C71.7559 18.5312 71.5059 18.0312 71.0059 17.6484C70.5059 17.2578 69.6738 16.9297 68.5098 16.6641L66.6348 16.2422C64.8926 15.8438 63.6074 15.2539 62.7793 14.4727C61.9512 13.6914 61.5371 12.6875 61.5371 11.4609C61.5371 10.4219 61.8027 9.51172 62.334 8.73047C62.873 7.94922 63.623 7.34375 64.584 6.91406C65.5527 6.47656 66.6777 6.25781 67.959 6.25781C69.9121 6.25781 71.459 6.75391 72.5996 7.74609C73.748 8.73828 74.3457 10.1016 74.3926 11.8359H71.4512C71.3887 10.9141 71.0449 10.1914 70.4199 9.66797C69.7949 9.14453 68.9707 8.88281 67.9473 8.88281C66.9785 8.88281 66.1855 9.10938 65.5684 9.5625C64.9512 10.0156 64.6426 10.5977 64.6426 11.3086C64.6426 11.8945 64.8848 12.3711 65.3691 12.7383C65.8613 13.0977 66.6777 13.4062 67.8184 13.6641L69.5879 14.0742C71.4004 14.4727 72.7285 15.0664 73.5723 15.8555C74.416 16.6445 74.8379 17.6797 74.8379 18.9609C74.8379 20.0469 74.5645 20.9883 74.0176 21.7852C73.4707 22.582 72.6934 23.1992 71.6855 23.6367C70.6777 24.0664 69.4863 24.2812 68.1113 24.2812ZM82.041 24H76.1465V6.53906H82.1699C83.9043 6.53906 85.4004 6.89453 86.6582 7.60547C87.916 8.30859 88.8848 9.3125 89.5645 10.6172C90.2441 11.9141 90.584 13.457 90.584 15.2461C90.584 17.0508 90.2441 18.6094 89.5645 19.9219C88.8848 21.2266 87.9043 22.2344 86.623 22.9453C85.3496 23.6484 83.8223 24 82.041 24ZM79.2402 21.3516H81.877C83.7754 21.3516 85.1777 20.8203 86.084 19.7578C86.998 18.6875 87.4551 17.1836 87.4551 15.2461C87.4551 13.3242 87.002 11.8359 86.0957 10.7812C85.1895 9.71875 83.8145 9.1875 81.9707 9.1875H79.2402V21.3516ZM95.291 24L90.6387 11.625H93.7676L96.0293 18.0703C96.1934 18.5625 96.3496 19.0547 96.498 19.5469C96.6543 20.0312 96.8066 20.5156 96.9551 21C97.1035 20.5156 97.252 20.0312 97.4004 19.5469C97.5488 19.0547 97.7012 18.5625 97.8574 18.0703L100.084 11.625H103.178L98.5254 24H95.291ZM110.65 11.625V14.0039H108.131V20.4492C108.131 20.8945 108.221 21.2031 108.4 21.375C108.58 21.5391 108.908 21.6211 109.385 21.6211H110.65V24H108.869C107.611 24 106.678 23.7461 106.068 23.2383C105.467 22.7305 105.166 21.9453 105.166 20.8828V14.0039H103.01V11.625H105.166V8.25H108.131V11.625H110.65Z"
            fill="white" />
        </svg>
      </div>

      <div className="flex gap-4">
        {/* X / Twitter */}
        <a href="#" aria-label="X"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <svg viewBox="0 0 16 16" className="w-4.5 h-4.5 fill-white">
            <path
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </a>
        {/* Facebook */}
        <a href="#" aria-label="Facebook"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <svg viewBox="0 0 16 16" className="w-4.5 h-4.5 fill-white">
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
        {/* Twitter (legacy bird) */}
        <a href="#" aria-label="Twitter"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <svg viewBox="0 0 512 512" className="w-4.5 h-4.5 fill-white">
            <path
              d="M459 151c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-46.722 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.974-84.792-31.188-98.112-72.772 6.498.974 12.995 1.623 19.818 1.623 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c8.182 7.884 30.335 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.507-52.954 52.632 64.3 131.86 106.7 221.031 111.298-1.623-7.884-2.598-15.768-2.598-24.004 0-57.502 46.782-104.284 104.284-104.284 30.005 0 57.167 12.67 76.19 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.884 24.629-24.63 45.36-46.132 58.525 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <svg viewBox="0 0 16 16" className="w-4.5 h-4.5 fill-white">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Link sections */}
    <div>
      <h6 className="text-xs uppercase tracking-wider text-gray-300 mb-5 font-normal">Terms & Policies</h6>
      <ul className="space-y-3">
        <li><a href="#" className="text-white text-sm font-light hover:underline">Terms of Service</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Disclaimer Text</a></li>
      </ul>
    </div>

    <div>
      <h6 className="text-xs uppercase tracking-wider text-gray-300 mb-5 font-normal">Solutions</h6>
      <ul className="space-y-3">
        <li><a href="#" className="text-white text-sm font-light hover:underline">Retail</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Enterprises</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Institutions</a></li>
      </ul>
    </div>

    <div>
      <h6 className="text-xs uppercase tracking-wider text-gray-300 mb-5 font-normal">Company</h6>
      <ul className="space-y-3">
        <li><a href="#" className="text-white text-sm font-light hover:underline">About</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Transparency</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Blog Link</a></li>
        <li><a href="#" className="text-white text-sm font-light hover:underline">Partners</a></li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <hr className="my-8 border-white/25" />

  {/* Bottom bar */}
  <div
    className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
    <small className="text-white font-light">© 2025 USDtv, All Rights Reserved</small>
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <li><a href="#" className="text-white text-sm font-light hover:underline">Terms & Conditions</a></li>
      <li
        className="relative sm:pl-6 sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:w-px sm:before:h-5 sm:before:bg-white/25 sm:before:-translate-y-1/2">
        <a href="#" className="text-white text-sm font-light hover:underline">Privacy Policy</a>
      </li>
      <li
        className="relative sm:pl-6 sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:w-px sm:before:h-5 sm:before:bg-white/25 sm:before:-translate-y-1/2">
        <a href="#" className="text-white text-sm font-light hover:underline">Cookie Policy</a>
      </li>
    </ul>
  </div>
</footer>
)
}
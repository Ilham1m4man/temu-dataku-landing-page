import Link from "next/link";

export default function Navbar() {
    
  return (
    <div className="sticky top-1 flex justify-between items-center w-full h-16 px-4 rounded-full bg-slate-100 text-black dark:bg-slate-900 dark:text-slate-50">
      {/* LOGO */}
      <div className="h-full ">
        <img className="h-full" src="./images/logo.png" alt="Logo" />
      </div>
      {/* NAV */}
      <nav>
        <ul className="flex gap-10 font-bold">
          <li><Link id="home" href="/">HOME</Link></li>
          <li><Link id="mentoring" href="/mentoring"></Link>MENTORING</li>
          <li><Link id="practice" href="/practice"></Link>PRACTICE</li>
          <li><Link id="bootcamp" href="/bootcamp"></Link>BOOTCAMP</li>
        </ul>
      </nav>
      {/* CART */}
      <div>
        <svg className="e-font-icon-svg e-eicon-cart-solid" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M188 167H938C943 167 949 169 953 174 957 178 959 184 958 190L926 450C919 502 875 542 823 542H263L271 583C281 631 324 667 373 667H854C866 667 875 676 875 687S866 708 854 708H373C304 708 244 659 230 591L129 83H21C9 83 0 74 0 62S9 42 21 42H146C156 42 164 49 166 58L188 167ZM771 750C828 750 875 797 875 854S828 958 771 958 667 912 667 854 713 750 771 750ZM354 750C412 750 458 797 458 854S412 958 354 958 250 912 250 854 297 750 354 750Z"></path></svg>
      </div>
    </div>
  );
}

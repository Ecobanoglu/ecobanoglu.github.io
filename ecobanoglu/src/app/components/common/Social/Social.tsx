import Link from "next/link";

const styleLink =
  "flex items-center justify-center rounded-full w-10 h-10 text-center text-gray-950 bg-slate-100 hover:bg-primary-500 hover:text-white  transition";

export default function Social() {
  return (
    <ul className="list-none inline-flex items-center justify-start">
      <li className="p-2">
        <Link href={"https://github.com"} rel="nofollow" className={styleLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.435 12.973c.269 0 .492.133.686.396c.192.265.294.588.294.975c0 .385-.102.711-.294.973c-.193.265-.417.396-.686.396c-.278 0-.522-.131-.715-.396c-.192-.262-.294-.588-.294-.973c0-.387.102-.71.294-.975c.192-.264.436-.396.715-.396m3.44-3.559c.746.811 1.125 1.795 1.125 2.953c0 .748-.086 1.423-.259 2.023c-.175.597-.394 1.084-.654 1.459a4.268 4.268 0 0 1-.974.989a4.94 4.94 0 0 1-1.065.623a5.465 5.465 0 0 1-1.111.306a9 9 0 0 1-.943.123l-.685.014l-.547.015a17.567 17.567 0 0 1-1.524 0l-.547-.015l-.685-.014a8.966 8.966 0 0 1-.943-.123a5.28 5.28 0 0 1-1.111-.306a4.888 4.888 0 0 1-1.064-.623a4.253 4.253 0 0 1-.975-.989c-.261-.375-.479-.862-.654-1.459c-.173-.6-.259-1.275-.259-2.023c0-1.158.379-2.143 1.125-2.953c-.082-.041-.085-.447-.008-1.217a7.071 7.071 0 0 1 .495-2.132c.934.099 2.09.629 3.471 1.581c.466-.119 1.101-.183 1.917-.183c.852 0 1.491.064 1.918.184c.629-.425 1.23-.771 1.805-1.034c.584-.261 1.005-.416 1.269-.457l.396-.09c.27.649.434 1.36.496 2.132c.076.769.073 1.175-.009 1.216m-5.845 7.82c1.688 0 2.954-.202 3.821-.607c.855-.404 1.292-1.238 1.292-2.496c0-.73-.273-1.34-.822-1.828a1.845 1.845 0 0 0-.989-.486c-.375-.061-.949-.061-1.72 0c-.769.062-1.298.09-1.582.09c-.385 0-.8-.018-1.319-.059c-.52-.04-.928-.065-1.223-.078a3.727 3.727 0 0 0-.958.108a1.913 1.913 0 0 0-.853.425c-.521.469-.79 1.077-.79 1.828c0 1.258.426 2.092 1.28 2.496c.85.405 2.113.607 3.802.607h.061m-2.434-4.261c.268 0 .492.133.685.396c.192.265.294.588.294.975c0 .385-.102.711-.294.973c-.192.265-.417.396-.685.396c-.279 0-.522-.131-.716-.396c-.192-.262-.294-.588-.294-.973c0-.387.102-.71.294-.975c.193-.264.436-.396.716-.396"
            />
          </svg>
        </Link>
      </li>
      <li className="p-2">
        <Link
          href={"https://linkedin.com"}
          rel="nofollow"
          className={styleLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085c-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678c1.025 0 1.854.285 2.487 1.001c.637.717.954 1.679.954 3.03V19z"
            />
            <ellipse cx="6.5" cy="6.5" fill="currentColor" rx="1.55" ry="1.5" />
          </svg>
        </Link>
      </li>
    </ul>
  );
}
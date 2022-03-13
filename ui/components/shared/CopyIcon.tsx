import { CSSProperties } from 'react'

interface Props {
  style?: CSSProperties
}

const CopyIcon = ({ style }: Props) => {
  return (
    <svg
      style={style}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.72038 10.6876C6.16987 10.6877 5.63169 10.5246 5.17392 10.2188C4.71615 9.91301 4.35936 9.47833 4.14866 8.96974C3.93797 8.46114 3.88285 7.90149 3.99026 7.36156C4.09768 6.82163 4.36282 6.32569 4.75213 5.93647L7.62386 3.0653C8.14583 2.5433 8.85378 2.25003 9.59198 2.25C10.3302 2.24997 11.0382 2.5432 11.5602 3.06516C12.0822 3.58713 12.3754 4.29508 12.3755 5.03328C12.3755 5.77148 12.0823 6.47945 11.5603 7.00145L11.2496 7.31229L10.4532 6.51753L10.7669 6.20372C11.0767 5.89238 11.2504 5.47095 11.25 5.03177C11.2496 4.59259 11.0751 4.17148 10.7648 3.86073C10.4488 3.55917 10.0287 3.39091 9.59194 3.39091C9.15514 3.39091 8.73512 3.55917 8.41913 3.86073L5.54773 6.73173C5.3937 6.8857 5.27151 7.0685 5.18815 7.26969C5.10478 7.47089 5.06188 7.68654 5.06188 7.90432C5.06188 8.12211 5.10478 8.33776 5.18815 8.53895C5.27151 8.74015 5.3937 8.92295 5.54773 9.07691C5.86373 9.37848 6.28374 9.54673 6.72055 9.54673C7.15735 9.54673 7.57736 9.37848 7.89336 9.07691L8.6889 9.87257C8.43095 10.1318 8.12415 10.3373 7.78626 10.4772C7.44837 10.6171 7.08609 10.6886 6.72038 10.6876Z"
        fill="#4F46E5"
      />
      <path
        d="M11.2204 9.56238C10.6699 9.56249 10.1317 9.39934 9.67392 9.09355C9.21615 8.78776 8.85936 8.35308 8.64866 7.84449C8.43797 7.33589 8.38285 6.77624 8.49026 6.23631C8.59768 5.69638 8.86282 5.20044 9.25213 4.81122L9.56297 4.50038L10.3585 5.2961L10.0477 5.60676C9.89368 5.76073 9.77153 5.94352 9.68819 6.1447C9.60485 6.34588 9.56195 6.56151 9.56195 6.77927C9.56195 6.99703 9.60485 7.21265 9.68819 7.41383C9.77153 7.61501 9.89368 7.7978 10.0477 7.95177C10.3637 8.25334 10.7837 8.42159 11.2205 8.42159C11.6573 8.42159 12.0773 8.25334 12.3933 7.95177C12.5396 7.80552 15.0535 5.29154 15.265 5.08049C15.5755 4.7693 15.7499 4.34765 15.7499 3.90804C15.7499 3.46844 15.5755 3.04679 15.265 2.7356C14.949 2.43403 14.529 2.26577 14.0922 2.26577C13.6554 2.26577 13.2354 2.43403 12.9194 2.7356L12.1239 1.93994C12.646 1.41873 13.3537 1.12614 14.0915 1.12647C14.8293 1.12679 15.5367 1.42 16.0584 1.94167C16.5801 2.46333 16.8733 3.17078 16.8737 3.90854C16.874 4.64631 16.5815 5.35403 16.0603 5.8762C15.8485 6.0877 13.3355 8.60028 13.1894 8.74692C12.9314 9.00625 12.6245 9.21185 12.2865 9.35182C11.9486 9.49179 11.5862 9.56336 11.2204 9.56238Z"
        fill="#4F46E5"
      />
      <path
        d="M13.5 16.875H2.25C1.95173 16.8747 1.66576 16.7561 1.45485 16.5451C1.24394 16.3342 1.12531 16.0483 1.125 15.75V4.5C1.12531 4.20173 1.24394 3.91576 1.45485 3.70485C1.66576 3.49394 1.95173 3.37531 2.25 3.375H4.5V4.5H2.25V15.75H13.5V10.125H14.625V15.75C14.6247 16.0483 14.5061 16.3342 14.2951 16.5451C14.0842 16.7561 13.7983 16.8747 13.5 16.875Z"
        fill="#4F46E5"
      />
    </svg>
  )
}

export default CopyIcon

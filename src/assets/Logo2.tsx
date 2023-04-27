import { SVGProps } from "react";

export interface ILogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function Logo({ size = 1.5, ...props }: ILogoProps) {
  return (
    <svg
      width={Math.round(21 * size)}
      height={Math.round(21 * size)}
      viewBox="0 -1.5 21 21"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="rowy-logo-title"
      role="img"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.75 15.1197V11.6958H0L0 15.1197C0 17.0107 1.51104 18.5437 3.375 18.5437C5.23896 18.5437 6.75 17.0107 6.75 15.1197ZM1.125 12.8371H5.625V15.1198L5.61883 15.2901C5.53293 16.4712 4.56115 17.4024 3.375 17.4024L3.20708 17.3962C2.04286 17.309 1.125 16.3231 1.125 15.1198L1.125 12.8371Z"
        fill="url(#paint0_linear_954_4344)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-0.000117779 3.42395V6.84791L6.74988 6.84791V3.42395C6.74988 1.53296 5.23884 0 3.37488 0C1.51092 0 -0.000117779 1.53296 -0.000117779 3.42395ZM5.62488 5.70658L1.12489 5.70658V3.42394L1.13106 3.25359C1.21695 2.07248 2.18873 1.14131 3.37489 1.14131L3.54281 1.14757C4.70702 1.23471 5.62488 2.22058 5.62488 3.42394V5.70658Z"
        fill="#4200FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.75 12.6958V5.8479H0V12.6958H6.75ZM1.125 6.98919H5.625V11.5545H1.125V6.98919Z"
        fill="url(#paint1_linear_954_4344)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8749 -4.76837e-06L11.4999 -4.76837e-06V6.8479L14.8749 6.8479C16.7388 6.8479 18.2499 5.31494 18.2499 3.42395C18.2499 1.53295 16.7388 -4.76837e-06 14.8749 -4.76837e-06ZM12.626 5.70659V1.14132L14.8749 1.14132L15.0428 1.14758C16.207 1.23472 17.1249 2.22059 17.1249 3.42395L17.1187 3.59431C17.0328 4.77541 16.061 5.70659 14.8749 5.70659L12.626 5.70659Z"
        fill="url(#paint2_linear_954_4344)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.74988 3.42395V6.84791H12.4999V0H9.12488C7.26092 0 5.74988 1.53296 5.74988 3.42395ZM9.12488 1.14131H11.3749V5.70658H6.87488V3.42394L6.88106 3.25359C6.96695 2.07248 7.93873 1.14131 9.12488 1.14131Z"
        fill="url(#paint3_linear_954_4344)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_954_4344"
          x1="0.56196"
          y1="12.836"
          x2="0.56196"
          y2="18.5437"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF00AA" />
          <stop offset="1" stop-color="#FFAA00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_954_4344"
          x1="0.549323"
          y1="6.96248"
          x2="0.549323"
          y2="12.6958"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4200FF" />
          <stop offset="1" stop-color="#FF00AA" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_954_4344"
          x1="12.6439"
          y1="6.2676"
          x2="18.2499"
          y2="6.2676"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00AAFF" />
          <stop offset="1" stop-color="#00FFAA" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_954_4344"
          x1="12.4999"
          y1="0.568869"
          x2="6.87135"
          y2="0.568869"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00AAFF" />
          <stop offset="1" stop-color="#4200FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

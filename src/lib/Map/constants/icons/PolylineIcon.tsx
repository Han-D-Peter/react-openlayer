import { SVGProps } from ".";

export function PolylineIcon({ color = "black", size = 18 }: SVGProps) {
  return (
    <div>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        color={`${color}`}
        height={`${size}`}
        width={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z"></path>
      </svg>
    </div>
  );
}

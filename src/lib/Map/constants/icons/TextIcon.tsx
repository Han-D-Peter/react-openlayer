import { SVGProps } from ".";

export function TextIcon({ color = "black", size = 18 }: SVGProps) {
  return (
    <div>
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        color={`${color}`}
        height={`${size}`}
        width={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 4l12 0"></path>
        <path d="M12 4l0 16"></path>
      </svg>
    </div>
  );
}

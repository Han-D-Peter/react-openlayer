import { SVGProps } from ".";

export function MultiPointIcon({ color = "black", size = 18 }: SVGProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color={`${color}`}
        height={`${size}`}
        width={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
        <path d="M8 7l0 .01"></path>
        <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
        <path d="M16 15l0 .01"></path>
      </svg>
    </div>
  );
}

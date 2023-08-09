import { SVGProps } from ".";

export function MovementIcon({ color = "black", size = 18 }: SVGProps) {
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
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        color={`${color}`}
        height={`${size}`}
        width={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4z"></path>
      </svg>
    </div>
  );
}

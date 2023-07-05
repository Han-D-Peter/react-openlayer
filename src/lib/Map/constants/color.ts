export const ANNOTATION_COLOR = {
  RED: {
    fill: (opcity: number) => `rgba(248, 7, 1, ${0.3 * opcity})`,
    stroke: "rgb(248, 7, 1)",
  },
  YELLOW: {
    fill: (opcity: number) => `rgba(255, 254, 0, ${0.3 * opcity})`,
    stroke: "rgb(255, 254, 0)",
  },
  GREEN: {
    fill: (opcity: number) => `rgba(30, 128, 0, ${0.3 * opcity})`,
    stroke: "rgb(30, 128, 0)",
  },
  SKYBLUE: {
    fill: (opcity: number) => `rgba(135, 206, 235, ${0.3 * opcity})`,
    stroke: "rgb(135, 206, 235)",
  },
  BLUE: {
    fill: (opcity: number) => `rgba(2, 26, 255, ${0.3 * opcity})`,
    stroke: "rgb(2, 26, 255)",
  },
  BROWN: {
    fill: (opcity: number) => `rgba(165, 42, 42, ${0.3 * opcity})`,
    stroke: "rgb(165, 42, 42)",
  },
  SELECT: {
    fill: () => "rgba(1, 1, 1, 0.5)",
    stroke: "rgb(1, 1, 1)",
  },
};

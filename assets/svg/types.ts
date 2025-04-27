// types.ts
import * as SVGs from "../svg/index"; // Import the SVGs object

// Dynamically infer the available icon names from the exported SVGs
export type IconName = keyof typeof SVGs; // This gets the keys of the SVGs object
// Define a type for the SVG component that takes props and returns JSX
export type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>;

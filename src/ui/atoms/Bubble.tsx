type Size = "tiny" | "little" | "small" | "medium" | "large";
type Variant = "default" | "illuminated";
type Color = "bg-eerie-black" | "bg-lavender-indigo" | "bg-violet-blue";

function Bubble({
  size = "small" as Size,
  variant = "default" as Variant,
  color = "bg-lavender-indigo" as Color,
  className = "",
}) {
  // Definición de clases base
  const baseClasses = "rounded-full";

  // Clases dinámicas según las props
  const sizeClasses = {
    tiny: "w-[24px] h-[24px]",
    little: "w-[72px] h-[72px]",
    small: "w-[415px] h-[415px]",
    medium: "w-[524px] h-[524px]",
    large: "w-[746px] h-[746px]",
  };

  const colorClasses = {
    "bg-eerie-black": {
      default: "bg-eerie-black",
      illuminated: "bg-eerie-black animate-bubbleMoveBlack",
    },
    "bg-lavender-indigo": {
      default: "bg-lavender-indigo",
      illuminated: "bg-lavender-indigo animate-bubbleMoveLavenderIndigo",
    },
    "bg-violet-blue": {
      default: "bg-violet-blue",
      illuminated: "bg-violet-blue animate-bubbleMoveVioletBlue",
    },
  };

  const selectedColorClass = colorClasses[color][variant];

  // Combinación de clases
  // ! Tener en cuenta que las clases manuales sean las mismas
  // ! que se usan en el componente para tengan efecto en la especificidad
  const classes = [
    baseClasses,
    sizeClasses[size],
    selectedColorClass,
    className, // Agregar className al final para que tenga prioridad
  ]
    .filter(Boolean) // Filtrar valores falsy
    .join(" "); // Unir las clases en una cadena
  return <div className={classes}></div>;
}
export default Bubble;

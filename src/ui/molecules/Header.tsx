import owlLogo from "../../assets/owl-white.png";
import menu from "../../assets/ham-menu.svg";

type Variant = "default" | "illuminated";
type Color = "bg-eerie-black" | "bg-lavender-indigo" | "bg-violet-blue";

function Header({
  variant = "default" as Variant,
  color = "bg-eerie-black" as Color,
  className = "",
}) {
  // Clases dinámicas según las props
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
    selectedColorClass,
    className, // Agregar className al final para que tenga prioridad
  ]
    .filter(Boolean) // Filtrar valores falsy
    .join(" "); // Unir las clases en una cadena
  return (
    <header className={classes}>
      <img src={menu}></img>
      <img className="header-logo" src={owlLogo} alt="" />
    </header>
  );
}
export default Header;

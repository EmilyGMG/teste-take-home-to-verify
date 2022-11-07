
const Button = ({ title, background, iconColor, color }) => (
  <button className={background}>
    <div className={iconColor}></div>
    <p className={color}>{title}</p>
  </button>
)

export default Button;

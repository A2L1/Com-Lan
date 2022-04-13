import classNames from "classnames"

const Input = (props) => (
  <input
    {...props}
    className={classNames(
      "px-3 py-2 border-2 border-slate-200",
      props.className
    )}
  />
)

export default Input

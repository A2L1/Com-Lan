import classNames from "classnames"

const variants = {
  primary: "text-lg font-bold text-white bg-blue-600 px-2 py-1.5",
}

const Button = (props) => {
  const { variant = "primary", block, className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(variants[variant], !block || "w-full", className)}
    />
  )
}

export default Button

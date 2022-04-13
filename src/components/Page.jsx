const Page = (props) => {
  const { title, children, ...otherProps } = props

  return (
    <main {...otherProps}>
      <div className="mx-auto max-w-xl pt-8">
        <h1 className="text-2xl font-bold mb-8">{title}</h1>
        {children}
      </div>
    </main>
  )
}

export default Page

import "../styles/globals.css"

const id = (id) => id

const App = ({ Component, pageProps, ...otherProps }) => {
  const getLayout = Component.getLayout || id

  return getLayout(<Component {...pageProps} {...otherProps} />)
}

export default App

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards flex justify-center items-center min-h-screen bg-gray-100">
        <Card title="ReactJS " description="ReactJS OP 🔥🔥" img="https://kinsta.com/wp-content/uploads/2022/06/what-is-react-js-feature-image.png" />
        <Card title="Next JS" description="Next JS OP 🔥🔥" img="https://media.licdn.com/dms/image/D4D12AQHXuhSrsqfMPw/article-cover_image-shrink_600_2000/0/1706034898997?e=2147483647&v=beta&t=6Yk41qQTh0-1FFzBeyJFvCUTjxWdsekfcAAEKZgh40Y" height ="100px"/>
        <Card title="Javascript " description="JS OP 🔥🔥" img="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark.png" height ="200px" />
      </div>
      <Footer />
    </>
  )
}

export default App
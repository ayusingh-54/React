

import Clockheading from "./component/clockheading"
import Currenttime from "./component/Currenttime"
import Slogon from "./component/clockslogan"
import "bootstrap/js/dist/base-component"
function App() {
  

  return (
    <>
      <center>
        <Clockheading />
        <Currenttime />
        <Slogon />
      </center>
    </>
  )
}

export default App

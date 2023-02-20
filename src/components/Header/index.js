import {withRouter} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const Header = props => {
  const {history} = props
  return (
    <div
      className="header-container"
      style={{
        backgroundImage:
          `url(` +
          'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676918709/CCBP-mini%20projects/Movies%20website%20%28netflix%2Cprime%20clone%29/assets/Home%20page/super_man_poster_home_rxh4qa.svg' +
          `)`,
      }}
    >
      <Navbar />
    </div>
  )
}

export default withRouter(Header)

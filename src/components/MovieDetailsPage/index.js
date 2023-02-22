import {Component} from 'react'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import './index.css'

const statusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MovieDetailsPage extends Component {
  state = {
    status: statusConstants.initial,
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    // console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const getMovieDetailsApiUrl = `https://apis.ccbp.in/movies-app/movies/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(getMovieDetailsApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
    }
  }

  render() {
    const {status} = this.state

    let content

    switch (status) {
      case statusConstants.success:
        content = <h1>Success</h1>

        break

      default:
        content = null
        break
    }
    return (
      <div className="movie-details-main-bg-container">
        <div className="header-container">
          <Navbar />
          {content}
        </div>
      </div>
    )
  }
}

export default MovieDetailsPage

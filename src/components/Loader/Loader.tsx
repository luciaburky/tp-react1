import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className="loader">
        <Spinner animation="border" variant="dark" className="loaderSpinner">
        </Spinner>
    </div>
  )
}

export default Loader;

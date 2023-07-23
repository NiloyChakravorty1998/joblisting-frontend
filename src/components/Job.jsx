import PropTypes from 'prop-types';

const Job = (props) => {
  const {id, profile, description, techstack, imageURL } = props;

  const handleJob = () => {
    window.location.href = `/job/${id}`;
  };

  return (
    <div className="my-3">
      <div className="card" style={{ backgroundColor: '#eeeeee' }}>
        <img src={imageURL} style={{ maxWidth: "120px", maxHeight: "120px", display: "block", margin: "0 auto" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <center>
            <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
              {profile}
            </h5>
            <br></br>
          </center>

          <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>Description:</h6>
          <p className="card-text">{description}...</p>

          <h6 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>Skills:</h6>
          {Array.isArray(techstack) ? (
            <p className="card-text">{techstack.join(', ')}</p>
          ) : (
            <p className="card-text">{techstack}</p>
          )}

          <center>
            <h6 className="card-text" style={{ color: '#154c79', marginTop: '10px', marginBottom: '10px', fontWeight: 'bold' }}>
              {props.location}
            </h6>
          </center>
          <center>
            <button type="button" className="btn btn-primary" onClick={handleJob}>
              Apply
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  id: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techstack: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  imageURL: PropTypes.string,
  location: PropTypes.string
};

export default Job;

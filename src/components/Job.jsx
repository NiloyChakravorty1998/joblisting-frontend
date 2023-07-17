
import PropTypes from 'prop-types';

const Job = (props) => {
  const handleJob = () => {
    window.location.href = "/";
  };

  return (
    <div className="my-3">
      <div className="card" style={{ backgroundColor: '#eeeeee' }}>
        <div className="card-body">
          <center>
            <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
              {props.profile}
            </h5>
            <br></br>
          </center>

            <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>Description : </h6>
            {props.description}... 
                        
            <h6 style={{ fontSize: '15px', fontWeight: 'bold', marginTop:'10px' }}>Skills : </h6>
            {props.techstack.join(', ')}
          
          <center>
            <h6 className="card-text" style={{ color: '#154c79',marginTop:'10px', marginBottom: '10px', fontWeight: 'bold' }}>
              Kolkata
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
    profile: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techstack: PropTypes.array
};

export default Job;

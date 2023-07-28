import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobItem = () => {
  let { jobId } = useParams();
  const [job, setJob] = useState(null);
  const handleDelete = () => {
    fetch(`http://localhost:8080/api/post/${jobId}`, {
      method: 'DELETE'
      })
      .then((res) => res.json())
      .then(() => {
        window.location = "/jobs"
      })
      .catch((error) => {
        console.log(error);
      });

  }
  const handleUpdate = () => {
    window.location.href=`/job/update/${jobId}`;  
  }
  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${jobId}`, {
      method: 'GET',

    })
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (

    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 56px)', backgroundColor: '#eeeeee' }}>
      <div className="container p-4">
        {job ? (
          <div>
            <img src={job.imageUrl} style={{ maxWidth: "120px", maxHeight: "120px", display: "block", margin: "0 auto" }} className="card-img-top" alt="..." />
            <br></br>
            <h5 className="text-center mb-4">{job.profile}</h5>
            <div className="card mx-auto" style={{ width: 'calc(100% + 20px)', backgroundColor: '#eeeeee', borderRadius: '0.25rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body" >
                <h6 style={{ fontSize: '19px', color: '#6B7171', }}>Description :</h6>
                <p className="card-text" style={{ fontSize: '15px' }}>{job.desc}</p>

                <center>
                  <p className="card-text" style={{ color: '#154c79', fontWeight: 'bold' }}>{job.techStack}</p>
                  <p className="card-text" style={{ color: '#404D4D', fontWeight: 'bold' }}>{job.location}</p>
                </center>
              </div>
            </div>
            <br></br>
            <center>
              <button type="button" className="btn btn-info mx-3" onClick={handleUpdate}>Update</button>
              <button type="button" className="btn btn-warning" onClick={handleDelete}>Delete</button>
            </center>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>

  )
}

export default JobItem

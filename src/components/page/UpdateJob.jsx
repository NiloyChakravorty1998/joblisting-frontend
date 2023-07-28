import  {useState} from 'react'
import { useParams } from 'react-router-dom';

const UpdateJob = () => {
    let { jobId } = useParams();

    
    const [profile,setProfile] = useState('');
    const [location,setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [exp, setExp] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [tech, setTech] = useState([]);

    const handleProfileChange = (e) => {
        setProfile(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }
    const handleImageURLChange =(e) => {
      setImageUrl(e.target.value);
    }
    const handleTechChange=(e) => {
      let tech = e.target.value;
      setTech(tech.split(','));
    }
    const handleExperienceChange=(e) => {
      setExp(e.target.value);
    }

    const handleSaveJob= async () => {  

        fetch(`http://localhost:8080/api/post/${jobId}`, {
            method: "PATCH",headers: {
              "Content-Type": "application/json", 
            }, body: JSON.stringify({
                profile,
                desc:description,
                location,
                techStack:tech,
                imageUrl,
                experience:exp
            })
        }).then((res) => {
            res.json().then(() => {
                window.location = '/jobs';
            })
        })
    }
    
        return (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 56px)', backgroundColor: '#eeeeee' }}>
            <div className="container p-4 rounded shadow" style={{ maxWidth: '400px' }}>
              <br />
              <br />
              <center>
                <h4>Update Job</h4>
              </center>
              <br />
              <p style={{ fontSize: '13px' }} />
              The job should have:
              <ul>
                <li>A profile of minimum three characters</li>
                <li>A description of minimum five characters</li>
                <li>An experience in years</li>
                <li>An image URL</li>
                <li>An list of techstack, separated by comma</li>
              </ul>
      
              <form>
                <div className="container form-group my-3">
                  <label htmlFor="exampleFormControlTextarea1"><h5>Profile : </h5></label>
                  <textarea className="form-control form-control-sm" id="profile" rows="1" onChange={handleProfileChange} value={profile} />
                </div>
              </form>
              <form>
                <div className="container form-group my-3">
                  <label htmlFor="exampleFormControlTextarea1"><h5>Description : </h5></label>
                  <textarea className="form-control form-control-sm" id="description" rows="6" onChange={handleDescriptionChange} value={description} />
                </div>
              </form>
              <form>
                <div className="container form-group my-3">
                  <label htmlFor="exampleFormControlTextarea1"><h5>Experience : </h5></label>
                  <textarea className="form-control form-control-sm" id="experiece" rows="1" onChange={handleExperienceChange} value={exp} />
                </div>
              </form>
              <form>
                <div className="container form-group my-3">
                  <label htmlFor="exampleFormControlTextarea1"><h5>Techstack : </h5></label>
                  <textarea className="form-control form-control-sm" id="Techstack" rows="3" onChange={handleTechChange} value={tech} />
                </div>
              </form>
              <form>
                <div className="container form-group my-3">
                  <label htmlFor="exampleFormControlTextarea1"><h5>ImageURL : </h5></label>
                  <textarea className="form-control form-control-sm" id="ImageURL" rows="1" onChange={handleImageURLChange} value={imageUrl} />
                </div>
              </form>
              <form>
                <div className="container form-group my-3">
                  <label htmlFor="exampleFormControlTextarea1"><h5>Location: </h5></label>
                  <textarea className="form-control form-control-sm" id="Location" rows="1" onChange={handleLocationChange} value={location} />
                  <br />
                  <center>
                    <button type="button" className="btn btn-primary" onClick={handleSaveJob}>Save</button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        );      
}

export default UpdateJob
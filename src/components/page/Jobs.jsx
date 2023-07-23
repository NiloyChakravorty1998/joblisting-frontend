import { useEffect, useState } from 'react';
import Job from '../Job';

const Jobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/posts', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const truncate = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const truncateSkills = (skills, characterLimit) => {
    if (skills.length > characterLimit) {
      return skills.slice(0, characterLimit) + '...';
    }
    return skills;
  };
  

  return (
    <div className="container my-3">
      <div className="row row-cols-2 row-cols-md-4">
        {jobList && jobList.length > 0 ? (
          jobList.map((element) => (
            <div className="col mb-4" key={element.id}>
              <Job
                profile={element.profile ? element.profile : ''}
                description={truncate(element.desc, 6)}
                techstack={truncateSkills(element.techStack, 6)}
                imageURL={element.imageUrl}
                id={element.id}
                location={element.location}
              />
            </div>
          ))
        ) : (
          <p>No Jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;

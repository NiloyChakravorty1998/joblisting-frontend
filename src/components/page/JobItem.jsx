import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobItem = () => {
    let {jobId} = useParams();
    const [job, setJob] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/api/post/${jobId}`, {
            method: 'GET',

          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setJob(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);
  return (
    <div>
      
    </div>
  )
}

export default JobItem

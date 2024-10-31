import React from 'react';
import './App.css';

const Home = ({ students }) => {
  return (
    <div>
      <h1 className="my-4">Student List</h1>
      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-4">
            <div className="card">
              <img src={student.image} className="card-img-top" alt={student.name} />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Age: {student.age}</p>
                <p className="card-text">Course: {student.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

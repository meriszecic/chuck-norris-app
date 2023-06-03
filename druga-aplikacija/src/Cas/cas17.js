import {useState} from 'react';

var studentsData = [
  {
    "name": "John",
    "surname": "Doe",
    "average": 85,
    "grade": "B+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Jane",
    "surname": "Smith",
    "average": 92,
    "grade": "A-",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Michael",
    "surname": "Johnson",
    "average": 78,
    "grade": "C+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Emily",
    "surname": "Williams",
    "average": 95,
    "grade": "A",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Daniel",
    "surname": "Brown",
    "average": 81,
    "grade": "B-",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Olivia",
    "surname": "Jones",
    "average": 89,
    "grade": "B+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "James",
    "surname": "Davis",
    "average": 76,
    "grade": "C",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Sophia",
    "surname": "Taylor",
    "average": 93,
    "grade": "A",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Matthew",
    "surname": "Miller",
    "average": 87,
    "grade": "B+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Isabella",
    "surname": "Anderson",
    "average": 79,
    "grade": "C+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "John",
    "surname": "Doe",
    "average": 85,
    "grade": "B+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Jane",
    "surname": "Smith",
    "average": 92,
    "grade": "A-",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Michael",
    "surname": "Johnson",
    "average": 78,
    "grade": "C+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Emily",
    "surname": "Williams",
    "average": 95,
    "grade": "A",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Daniel",
    "surname": "Brown",
    "average": 81,
    "grade": "B-",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Olivia",
    "surname": "Jones",
    "average": 89,
    "grade": "B+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "James",
    "surname": "Davis",
    "average": 76,
    "grade": "C",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Sophia",
    "surname": "Taylor",
    "average": 93,
    "grade": "A",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Matthew",
    "surname": "Miller",
    "average": 87,
    "grade": "B+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  },
  {
    "name": "Isabella",
    "surname": "Anderson",
    "average": 79,
    "grade": "C+",
    "image": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
  }
];

const StudentsPage = ({students}) =>{
  return (
      <div>
        {students.map((student, index) =>(
          <div key={index}> 
          <img src={student.image} alt='slika studenta' height={"200px"}></img>
          <h2>{student.name} {student.surname}</h2>
          <p>has the avg grade of : {student.average/10} </p>
          <p>has become grade : {student.grade}</p>
          </div>
        ))}
      </div>
    );
}


const Pagination = ({curentPage, totalPages, onPageChange}) =>{
  const pageNumbers = Array.from(Array(totalPages).keys());

  return (
    <div>
      {
        pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => onPageChange(pageNumber + 1)}
          disabled={curentPage === pageNumber + 1} style={{marginBottom:"100px"}}>
            {pageNumber + 1}
          </button>
        ))
      }
    </div>
  )
}

function App() {

  const [currentPage,setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  const indexOfLastStudent = currentPage * studentsPerPage;

  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const curentStudents = studentsData.slice(indexOfFirstStudent, indexOfLastStudent); 

  const totalPages = Math.ceil(studentsData.length / studentsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>List of students with pagination  </h1>
      <StudentsPage students={curentStudents}/>
      <Pagination curentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
    </div>
  )

}

export default App;
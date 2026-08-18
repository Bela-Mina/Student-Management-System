import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/students")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Student Management System</h1>

            {loading ? (
                <p>Loading students...</p>
            ) : (
                <>
                    <p>Total Students: {students.length}</p>

                    <StudentList students={students} />
                </>
            )}
        </div>
    );
}

export default App;
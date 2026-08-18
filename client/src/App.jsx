import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchStudents = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/students"
            );

            const data = await response.json();

            setStudents(data.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleStudentAdded = (student) => {
        setStudents((currentStudents) => [
            ...currentStudents,
            student
        ]);
    };

    return (
        <div>
            <h1>Student Management System</h1>

            <StudentForm onStudentAdded={handleStudentAdded} />

            <hr />

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
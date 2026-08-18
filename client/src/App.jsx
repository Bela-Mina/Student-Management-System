import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import "./App.css";

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [studentToEdit, setStudentToEdit] = useState(null);
    const [showForm, setShowForm] = useState(false);

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

    const handleStudentSaved = (student) => {
        if (studentToEdit) {
            setStudents((currentStudents) =>
                currentStudents.map((currentStudent) =>
                    currentStudent._id === student._id
                        ? student
                        : currentStudent
                )
            );

            setStudentToEdit(null);
        } else {
            setStudents((currentStudents) => [
                ...currentStudents,
                student
            ]);
        }

        setShowForm(false);
    };

    const handleStudentDeleted = (id) => {
        setStudents((currentStudents) =>
            currentStudents.filter(
                (student) => student._id !== id
            )
        );
    };

    const handleEdit = (student) => {
        setStudentToEdit(student);
        setShowForm(true);
    };

    const handleAdd = () => {
        setStudentToEdit(null);
        setShowForm(true);
    };

    const handleCancel = () => {
        setStudentToEdit(null);
        setShowForm(false);
    };

    return (
        <div className="app">
            <header className="header">
                <div>
                    <h1>Student Management</h1>
                    <p>Manage your students efficiently</p>
                </div>

                <button className="add-button" onClick={handleAdd}>
                    + Add Student
                </button>
            </header>

            <main>
                <section className="stats">
                    <div className="stat-card">
                        <span>Total Students</span>
                        <strong>{students.length}</strong>
                    </div>

                    <div className="stat-card">
                        <span>Departments</span>
                        <strong>
                            {new Set(
                                students.map(
                                    (student) => student.department
                                )
                            ).size}
                        </strong>
                    </div>
                </section>

                {showForm && (
                    <section className="form-section">
                        <StudentForm
                            studentToEdit={studentToEdit}
                            onStudentSaved={handleStudentSaved}
                            onCancelEdit={handleCancel}
                        />
                    </section>
                )}

                <section className="students-section">
                    {loading ? (
                        <p>Loading students...</p>
                    ) : (
                        <StudentList
                            students={students}
                            onStudentDeleted={handleStudentDeleted}
                            onEditStudent={handleEdit}
                        />
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
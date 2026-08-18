function StudentList({
    students,
    onStudentDeleted,
    onEditStudent
}) {
if (students.length === 0) {
        return <p>No students found.</p>;
    }

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/students/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to delete student");
            }

            onStudentDeleted(id);
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <div>
            <h2>Students</h2>

            {students.map((student) => (
                <div key={student._id}>
                    <h3>{student.name}</h3>

                    <p>Email: {student.email}</p>
                    <p>Department: {student.department}</p>
                    <p>Year: {student.year}</p>
                    <p>Phone: {student.phone}</p>

                    <button onClick={() => onEditStudent(student)}>
                        Edit
                    </button>

                    <button onClick={() => handleDelete(student._id)}>
                        Delete
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default StudentList;
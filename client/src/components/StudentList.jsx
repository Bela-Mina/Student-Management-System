function StudentList({
    students,
    onStudentDeleted,
    onEditStudent
}) {
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
                throw new Error(
                    data.message || "Failed to delete student"
                );
            }

            onStudentDeleted(id);
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    if (students.length === 0) {
        return (
            <div className="empty-state">
                <h3>No students found</h3>
                <p>Add your first student to get started.</p>
            </div>
        );
    }

    return (
        <div className="student-list">
            <div className="section-header">
                <div>
                    <h2>Students</h2>
                    <p>All registered students</p>
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id}>
                                <td className="student-name">
                                    {student.name}
                                </td>

                                <td>{student.email}</td>

                                <td>
                                    <span className="department">
                                        {student.department}
                                    </span>
                                </td>

                                <td>{student.year}</td>

                                <td>{student.phone}</td>

                                <td className="actions">
                                    <button
                                        className="edit-button"
                                        onClick={() =>
                                            onEditStudent(student)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            handleDelete(student._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentList;
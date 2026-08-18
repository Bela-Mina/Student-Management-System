function StudentList({ students }) {
    if (students.length === 0) {
        return <p>No students found.</p>;
    }

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
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default StudentList;
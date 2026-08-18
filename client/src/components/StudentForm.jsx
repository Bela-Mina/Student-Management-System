import { useEffect, useState } from "react";

function StudentForm({ studentToEdit, onStudentSaved, onCancelEdit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        year: "",
        phone: ""
    });

    useEffect(() => {
        if (studentToEdit) {
            setFormData({
                name: studentToEdit.name,
                email: studentToEdit.email,
                department: studentToEdit.department,
                year: studentToEdit.year,
                phone: studentToEdit.phone
            });
        }
    }, [studentToEdit]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const url = studentToEdit
                ? `http://localhost:5000/api/students/${studentToEdit._id}`
                : "http://localhost:5000/api/students";

            const response = await fetch(url, {
                method: studentToEdit ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    year: Number(formData.year)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Request failed");
            }

            onStudentSaved(data.data);

            setFormData({
                name: "",
                email: "",
                department: "",
                year: "",
                phone: ""
            });
        } catch (error) {
            console.error("Error saving student:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>
                {studentToEdit ? "Edit Student" : "Add Student"}
            </h2>

            <input
                type="text"
                name="name"
                placeholder="Student name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <button type="submit">
                {studentToEdit ? "Save Changes" : "Add Student"}
            </button>

            {studentToEdit && (
                <button
                    type="button"
                    onClick={onCancelEdit}
                >
                    Cancel
                </button>
            )}
        </form>
    );
}

export default StudentForm;
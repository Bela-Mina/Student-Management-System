import { useState } from "react";

function StudentForm({ onStudentAdded }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        year: "",
        phone: ""
    });

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
            const response = await fetch(
                "http://localhost:5000/api/students",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...formData,
                        year: Number(formData.year)
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to create student");
            }

            onStudentAdded(data.data);

            setFormData({
                name: "",
                email: "",
                department: "",
                year: "",
                phone: ""
            });
        } catch (error) {
            console.error("Error creating student:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>

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
                Add Student
            </button>
        </form>
    );
}

export default StudentForm;
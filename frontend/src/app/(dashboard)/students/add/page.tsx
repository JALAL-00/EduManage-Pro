'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddStudentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    grade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/students', {
        ...formData,
        age: parseInt(formData.age),
      });
      router.push('/students');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Student</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Grade</span>
          </label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div className="flex gap-2">
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
          <button
            type="button"
            onClick={() => router.push('/students')}
            className="btn btn-ghost"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
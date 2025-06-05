'use client'
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  grade: string;
}

export default function EditStudentPage() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState<Omit<Student, 'id'>>({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    grade: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/students/${id}`);
        const student = response.data;
        setFormData({
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          age: student.age,
          grade: student.grade,
        });
      } catch (error) {
        toast.error('Failed to load student data');
        console.error('Error fetching student:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/students/${id}`, {
        ...formData,
        age: Number(formData.age),
      });
      toast.success('Student updated successfully');
      router.push('/students');
    } catch (error) {
      toast.error('Failed to update student');
      console.error('Error updating student:', error);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Student</h1>
      
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
            min="5"
            max="100"
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
            Update Student
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
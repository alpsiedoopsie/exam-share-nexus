
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-exam-light">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-exam-primary">Exam Share Nexus</h1>
        <p className="text-xl text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  );
};

export default Index;

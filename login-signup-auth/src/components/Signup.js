import { useState } from 'react';

function SignupForm({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const text = await response.text();

      if (response.ok) {
        setMessage('Signup successful! You can now log in.');
        if (onSignup) {
          onSignup();
        }
      } else {
        setMessage(`Signup failed: ${text || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl mb-4">Signup Form</h2>

      <div className="mb-4">
        <label className="block mb-1">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border p-2"
            placeholder="user@example.com"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-1">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border p-2"
          />
        </label>
      </div>

      <button
        onClick={handleSignup}
        disabled={isLoading}
        className="bg-green-600 text-white p-2 rounded"
      >
        {isLoading ? 'Signing up...' : 'Sign up'}
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default SignupForm;

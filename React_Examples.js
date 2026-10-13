// 1. Rendering a List Using map()
function list() {
  const arr = [delhi, mohali, Pune, goa]
  return (
    <ul>
      {arr.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
}

// 2. Passing Data/Function from Child to Parent
function app() {
  function handleMessage(message) { console.log(message); }
  return <child onMessage={handleMessage} />;
}
function child(props) {
  return <button onClick={() => props.onMessage("Hello")}>click</button>;
}

// 3. Fetching API Data with Axios + Loading State
import axios from "axios";
import { useEffect, useState } from "react";
function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) { console.log(error); }
      finally { setLoading(false); }
    }
    getUsers();
  }, []);
  if (loading) return <p>Loading...</p>;
  return <div>{users.map(user => <p key={user.id}>{user.name}</p>)}</div>;
}

// 4. Handling API Errors with Axios
import axios from "axios";
import { useEffect, useState } from "react";
function Users() {
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get("/api/users");
        console.log(response.data);
      } catch (error) { setError(error.message); }
    }
    getUsers();
  }, []);
  if (error) return <p>Error: {error}</p>;
  return <p>Users loaded</p>;
}

// 5. Basic Routing with React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes></BrowserRouter>
  );
}

// 6. Protected Routes / Authentication Check
function ProtectedRoute({ children }) {
  const isLoggedIn = true;
  if (!isLoggedIn) return <Navigate to="/login" />;
  return children;
}
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

// useMemo — Memoize a calculated value
import { useMemo } from "react";
function App({ number }) {
  const double = useMemo(() => number * 2, [number]);
  return <h1>{double}</h1>;
}

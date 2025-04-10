import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go back if there is history
    } else {
      navigate("/"); // Redirect to home if no history
    }
  };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong 😞</h1>
      <p>We can&apos;t seem to find the page you&apos;re looking for.</p>

      <div className="error-buttons">
        <button onClick={handleGoBack}>🔙 Go Back</button>
        <button onClick={() => navigate("/")}>🏠 Home</button>
      </div>
    </div>
  );
}

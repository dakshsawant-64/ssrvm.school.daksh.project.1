function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-container">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <button onClick={() => (window.location.href = "/")}>
          Go to Home
        </button>
      </div>
    </main>
  );
}

export default NotFound;
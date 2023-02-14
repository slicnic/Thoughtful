import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function LogList() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/logs")
      .then((r) => r.json())
      .then(setLogs);
  }, []);

  return (
    <div class= "bg-plant bg-scroll bg-cover">
      {logs.length > 0 ? (
        logs.map((log) => (
          <div key={log.id}>
            <div >
              <p class="text-white font-serif text-center pl-12 p-1.5">A prominent feeling for me today is {log.emotion.emotion}</p>
              <h2 class="text-white text-center pl-9 p-1.5">My log entry around that feeling: {log.content}</h2>
              <p class="text-white text-center pl-9 p-1.5">
                <cite>By {log.user.name}</cite>
              </p>
            </div>
          </div>
        ))
      ) : (
        <>
          <h2>No Logs Found</h2>
            <button>
              <Link to="/new">New Log</Link>
            </button>
        </>
      )}
    </div>
  );
}

export default LogList;

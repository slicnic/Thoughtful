import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Box, Button } from "../styles";

function LogList() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/logs")
      .then((r) => r.json())
      .then(setLogs);
  }, []);

  return (
    <div>
      {logs.length > 0 ? (
        logs.map((log) => (
          <div key={log.id}>
            <div>
              <h2>{log.content}</h2>
              <p>
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

// const Wrapper = styled.section`
//   max-width: 800px;
//   margin: 40px auto;
// `;

// const Recipe = styled.article`
//   margin-bottom: 24px;
// `;

export default LogList;

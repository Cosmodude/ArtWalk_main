import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useState } from "react";
import { animated, useSpringValue } from "@react-spring/web";

export function Finish() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [similarityState, setSimilarityState] = useState({
    progress: 0, // 0 to 1
    result: 0, // 0 to 1
  });

  const opacity = useSpringValue(0);

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Back button */}
      <div
        style={{
          zIndex: 10,
          position: "absolute",
          top: 24,
          left: 24,
        }}
      >
        <IconButton aria-label="back" onClick={() => navigate(-1)}>
          <BackIcon />
        </IconButton>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          padding: "32px",
          paddingTop: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Wohhooooo! 🥳
          </h1>
          <p>You finished the walking artwork!</p>
        </div>

        <div
          style={{
            flex: "1 1 0%",
            textAlign: "center",
            backgroundColor: "#00000011",
            borderRadius: "8px",
          }}
        >
          Canvas here
        </div>

        <Link to={`/challenges/${slug}/similarity`}>
          <Button
            variant="contained"
            style={{
              width: "100%",
              flexShrink: 0,
              borderRadius: "20px",
              fontSize: "16px",
            }}
          >
            Check Similarity
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

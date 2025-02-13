import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./fetchFeedback.css";

const FetchFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const feedbackList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Datos obtenidos:", feedbackList); // Depuración
        setFeedbacks(feedbackList);
      } catch (error) {
        console.error("Error fetching feedback: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando retroalimentaciones...</p>;
  }

  return (
    <div>
      <h2>Retroalimentaciones</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <p>{feedback.message || "Mensaje no disponible"}</p> {/* Validación */}
            <small>
              {feedback.timestamp
                ? new Date(feedback.timestamp.toDate()).toLocaleString()
                : "Fecha no disponible"}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchFeedback;
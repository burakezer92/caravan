import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CaravanDetails from "../../components/CaravanDetails";
import Header from "../../components/Header/Header";

function CamperDetails() {
  const { id } = useParams(); // URL'den id alıyoruz
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCamper(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!camper) return <p>Camper bulunamadı</p>;

  return (
    <div>
      <Header />
      <CaravanDetails camper={camper} />
    </div>
  );
}

export default CamperDetails;

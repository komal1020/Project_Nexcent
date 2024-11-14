import Container from "react-bootstrap/Container";
import { ManageClientsData } from "../constants";
import ManageClientCard from "../components/ManageClientCard";

const ManageClients = ({ item }) => {
  return (
    <Container>
      <article className="text-center mt-4" data-aos="fade-down">
        <h1 className="fs-1 fw-bold text-dark-emphasis pt-5">
          Manage your entire community
          <span className="d-block"> in a single system</span>
        </h1>
        <p className=" ft-light fs-6 text-body-secondary ">
          Who is Nextcent suitable for?
        </p>
      </article>

      <div
        className="d-flex justify-content-between align-items-center mt-4 flex-sm-row flex-column"
        data-aos="zoom-in"
      >
        {ManageClientsData.map((item) => (
          <ManageClientCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default ManageClients;

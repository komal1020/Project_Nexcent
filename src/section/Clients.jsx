import Container from "react-bootstrap/Container";
import { clientImgSrc } from "../constants";

const Clients = () => {
  return (
    <Container>
      <article className="text-center mt-5" data-aos="zoom-in">
        <h1 className="fs-1 fw-bold text-dark-emphasis">Our Clients</h1>
        <p className="ft-light fs-6 text-body-secondary">
          We have been working with some Fortune 500+ clients
        </p>
      </article>
      <figure className="d-flex align-items-center justify-content-between my-5 flex-wrap" data-aos="zoom-in">
        {clientImgSrc.map((item) => (
          <img
            key={item}
            src={item}
            alt="icon"
            width="48"
            height="48"
            className="object-fit-contain"
          />
        ))}
      </figure>
    </Container>
  );
};

export default Clients;

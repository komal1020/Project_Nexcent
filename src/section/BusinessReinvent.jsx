import Container from "react-bootstrap/Container";
import { businessIcons } from "../constants";
import BusinessDataCard from "../components/BusinessDataCard";

const BusinessReinvent = () => {
  return (
    <section className="bg-silver py-3">
      <Container>
        <div
          className="row row-cols-sm-2 align-items-center "
          data-aos="fade-right"
        >
          <article className="ps-5">
            <h1 className="fs-1 fw-bold text-dark-emphasis">
              Helping a local
              <p className="text-success mb-0"> business reinvent itself </p>
            </h1>
            <p className="t-light fs-6 ">
              We reached here with our hardwork and dedication.
            </p>
          </article>
          <div
            className=" row row-cols-sm-2  align-items-center"
            data-aos="zoom-in"
          >
            {businessIcons.map((status) => (
              <BusinessDataCard
                {...status}
                key={status.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessReinvent;

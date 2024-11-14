import Container from "react-bootstrap/Container";
import { MarketingData } from "../constants";
import MarketingCard from "../components/MarketingCard";

const Marketing = () => {
  return (
    <section className="bg-white">
      <Container data-aos="fade-right">
        <h1 className="fs-1 fw-bold text-dark-emphasis text-center mt-5 pt-3 mb-4">
          Caring is the new marketing
        </h1>
        <article className="w-75 text-center mx-auto mb-4 w-md-75">
          <p className="mb-0">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more.
          </p>
          <p className="mb-0">
            See who‘s joining the community, read about how our community are
          </p>
          <p className="mb-0">
            increasing their membership income and lot‘s more.
          </p>
        </article>
        <div
          className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4"
          data-aos="zoom-out"
        >
          {MarketingData.map((item) => (
            <MarketingCard
              key={item.title}
              {...item}
              data-aos="zoom-in"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Marketing;

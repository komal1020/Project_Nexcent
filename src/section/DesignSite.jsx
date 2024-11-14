import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const DesignSite = () => {
  return (
      <Container className=" d-flex  justify-content-center align-items-center my-5  gap-5 flex-lg-row flex-column justify-content-lg-between">
        <img src="./Features/useImg.svg" alt="Img.." data-aos="fade-right" />
        <article className="w-50 pt-4" data-aos="fade-left">
          <h1 className="fs-1 fw-bold text-dark-emphasis  lh-base">
            How to design your site footer like
            <span className="text-success"> we did ?</span>
          </h1>
          <p className="t-light fs-6 text-body-secondary">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button variant="success" className="mt-4 fs-5">
            Learn More
          </Button>
        </article>
      </Container>
  );
};

export default DesignSite;

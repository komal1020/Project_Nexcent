import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <section className="bg-silver py-5">
      <Container
        className="d-flex align-items-center justify-content-center flex-lg-row flex-column justify-content-lg-between"
        data-aos="fade-right"
      >
        <article>
          <h1 className="fw-bold text-light-emphasis ">
            Lessons and insights
            <span className="text-success d-block">from 8 years</span>
          </h1>
          <p className="fs-6 text-muted">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button variant="success" size="lg" type="button" className="mt-4">
            Register
          </Button>
        </article>
        <img
          src="/hero1.svg"
          alt="Hero-Image"
          className="h-auto w-auto"
          data-aos="fade-left"
        />
      </Container>
    </section>
  );
};

export default Hero;

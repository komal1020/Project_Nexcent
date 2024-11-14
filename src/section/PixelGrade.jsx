import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

const PixelGrade = () => {
  return (
    <Container className="d-flex  justify-content-center align-items-center my-5 gap-5 flex-lg-row flex-column justify-content-lg-between">
      <img
        src="./Features/pixelgrade.svg"
        alt="Loading.."
        data-aos="fade-right"
      />
      <div className="w-75 px-2" data-aos="fade-left">
        <article>
          <h1 className=" fw-bold text-dark-emphasis lh-base">
            The unseen of spending three years at
            <span className="text-success"> Pixelgrade</span>
          </h1>
          <p className="ft-light fs-6 text-body-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </article>
        <Button variant="success" size="lg" className="mt-4">
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default PixelGrade;

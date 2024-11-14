import Button from "react-bootstrap/Button";

const Demo = () => {
  return (
    <section className="mt-5 pt-5" data-aos="zoom-in">
      <article className="mt-5 pb-5 text-center bg-body-tertiary" >
        <h1 className="fs-1 fw-bold text-secondary-emphasis mt-5 pt-5 bg-body-tertiary">
          Pellentesque suscipit
         <p> fringilla libero eu.</p>
        </h1>
        <Button variant="success" className="mt-4 fs-5 py-2">
          Get Demo &#x2192;
        </Button>
      </article>
    </section>
  );
};

export default Demo;

import Container from "react-bootstrap/Container";
import { clientImgSrc } from "../constants";

const FeedBack = () => {
  return (
    <section className="bg-silver">
      <Container className="px-3 py-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between gap-3">
          <img
            src="/feedback.svg"
            alt="feedback"
            className="img-fluid"
            data-aos="fade-right"
          />

          <div className="text-center text-md-start" data-aos="fade-left">
            <article>
              <p className="ft-light fs-6 text-light-emphasis">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <span className="text-success fs-5 fw-semibold d-block my-2">
                Tim Smith
              </span>
              <p className="ft-light fs-6 text-light-emphasis">
                British Dragon Boat Racing Association
              </p>
            </article>

            <div
              className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3 mt-3"
              data-aos="fade-left"
            >
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
              <h1 className="text-success fs-5 fw-semibold mt-2">
                Meet All Customers &#8594;
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeedBack;

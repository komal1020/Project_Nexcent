import Card from "react-bootstrap/Card";

const BusinessDataCard = ({ icon, number, name }) => {
  return (
    <Card className=" py-2 border border-0 bg-silver">
    <Card.Body className="d-flex align-items-center gap-3">
      <Card.Img 
        src={icon} 
        alt="icon" 
        style={{ width: '48px', height: '48px' }} 
        className="flex-wrap"
      />
      <div className="d-flex flex-column justify-content-start">
        <Card.Title className="fs-2 fw-bold text-dark-emphasis">{number}</Card.Title>
        <Card.Text className="fs-6 text-body-secondary">{name}</Card.Text>
      </div>
    </Card.Body>
  </Card>
  );
};

export default BusinessDataCard;

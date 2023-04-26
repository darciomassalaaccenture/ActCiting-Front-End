import Card from 'react-bootstrap/Card';
import './Header.css'

const AllPagesHeader = () => {
  return (

      <Card className="text-start">
        <Card.Body>
          <Card.Title> <h1>ActCiting</h1></Card.Title>
          <Card.Title> <h2>Part of GigStr</h2></Card.Title>
          <Card.Text><h3>Its time to get "actcited"... with venue hosting made easy!</h3></Card.Text>
        </Card.Body>
      </Card>

  );
}
export default AllPagesHeader;
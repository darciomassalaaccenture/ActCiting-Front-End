
import Button from './Button'
import Card from 'react-bootstrap/Card';

const HomeHeader = () => {

  return (
    <Card className="text-start" >
      <Card.Body>
        <Card.Title> <h1>ActCiting</h1></Card.Title>
        <Card.Title> <h2>Part of GigStr</h2></Card.Title>
        <Card.Text><h3>Its time to get "actcited"... with venue hosting made easy!</h3></Card.Text>
      </Card.Body>
      <Card.Footer className = 'black'>      
        <Card.Text>Click on the ADD VENUE button below to get started </Card.Text>
          <Button className="submit-button" id="orange" type='submit' title= "Add New Venue" path="/AddVenue"/>
      </Card.Footer>
    </Card>
  )
}
export default HomeHeader;
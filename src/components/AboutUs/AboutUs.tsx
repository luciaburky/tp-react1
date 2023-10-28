import { Button, Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
        <h1 style={{margin: '20px'}} >About us</h1>
        <p style={{margin: '20px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum repudiandae illo qui veniam, doloribus, saepe beatae quam aliquid est rerum sunt harum consequatur quasi hic impedit autem quas recusandae!</p>
        <div style={{display: 'flex', margin: '15px',justifyContent: 'center'}}>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://images.ecestaticos.com/_stKE3zmP-O4HvvldCophrAWlhs=/0x0:1600x900/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd0e%2F94c%2Fa18%2Fd0e94ca18ec7bc50dbfca932572ef450.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://www.clarin.com/2022/11/02/0Kvnx73R1_360x240__1.jpg"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://es.rollingstone.com/wp-content/uploads/2022/09/Taylor-Swift-recibe-premio-a-la-artista-y-compositora-de-la-decada.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </>
  )
}

export default AboutUs;
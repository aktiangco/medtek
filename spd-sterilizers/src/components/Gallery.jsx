import React , {}from 'react';
import Card from 'react-bootstrap/Card';



const Gallery = () => {


    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid',
        height: '100%'
    };

    return (
        <div>
             <Card className="container" style={cardStyle}>
                <Card.Body style={{ display: 'center' , height: "100%" }}>
                    <Card.Title className="font-weight-bold"><h1>Lesson page</h1></Card.Title> 
                    <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                          
                        </div>
                    </Card.Text>
                    <Card.Text >
                       
                    </Card.Text>
                </ Card.Body>
            </ Card> 
        </div>
    );
  };
  
  export default Gallery;
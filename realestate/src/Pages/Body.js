import React, { useEffect ,useState} from 'react';
import '../components/Body.css';



const Body = () => {
    useEffect(() => {
        const findYourHomeElement = document.querySelector('.find-your-home');
        const realEstateElement = document.querySelector('.real-estate');

        const animateText = () => {
            // Start the animation sequence
            setTimeout(() => {
                findYourHomeElement.classList.add('fade-up');
            }, 2000);

            setTimeout(() => {
                findYourHomeElement.classList.add('hide-text');
            }, 4000);

            setTimeout(() => {
                realEstateElement.classList.add('appear-down');
            }, 6000);

            // Reset classes to restart the animation
            setTimeout(() => {
                findYourHomeElement.classList.remove('fade-up', 'hide-text');
                realEstateElement.classList.remove('appear-down');
            }, 8000);
        };

        // Initial animation
        animateText();

        // Set interval to repeat the animation every 8 seconds
        const interval = setInterval(animateText, 6000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);


    const [properties, setProperties] = useState([]);

    useEffect(() => {
        handleAddProperty()
      fetch('http://localhost:3000/properties')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => setProperties(data))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);


    const handleAddProperty = () => {
        const propertyData = {
          address: "123 Main St, City",
          houseName: "Beautiful Villa",
          rooms: 4,
          bathrooms: 3,
          squareFeet: 2500,
          price: "$750,000",
          customerImage: "https://example.com/customer-image.jpg",
          images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
          ],
          landKunte: "30x40",
          propertyType: "building",
          buildingType: "villa"
        };
    
        fetch('http://localhost:3000/properties', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(propertyData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          // You can update the state or perform other actions here
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      };

    return (
        <div className="body">
            <div className="image-container">
                <div className="text-overlay">
                    <span className="text find-your-home">Find your home</span>
                    <span className="text real-estate">Real Estate</span>
                </div>
            </div>
        </div>
    );
};

export default Body;

import React from 'react';
import Slider from 'react-slick';


const reviews = [
  {
    name: "Liam Anderson",
    title: "CEO Digital",
    image: "https://example.com/image1.jpg",
    text: "I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.",
    rating: 5
  },
  {
    name: "Adam Will",
    title: "CEO Agency",
    image: "https://example.com/image2.jpg",
    text: "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
    rating: 5
  },
  // Add more reviews as needed
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <button>Next</button>,
    prevArrow: <button>Prev</button>,
  };

  return (
    <></>
    // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    //   <div style={{ flex: '1', padding: '20px' }}>
    //     <h2 style={{ color: '#ff0000', textTransform: 'uppercase' }}>Top Properties</h2>
    //     <h3>What's People Say's</h3>
    //     <p>Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.</p>
    //   </div>
    //   <div style={{ flex: '2' }}>
    //     <Slider {...settings}>
    //       {reviews.map((review, index) => (
    //         <div key={index} style={{ padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#fff' }}>
    //           <div style={{ display: 'flex', alignItems: 'center' }}>
    //             <img src={review.image} alt={review.name} style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
    //             <div>
    //               <h4>{review.name}</h4>
    //               <p>{review.title}</p>
    //             </div>
    //           </div>
    //           <p>{'"' + review.text + '"'}</p>
    //           <div>
    //             {'★'.repeat(review.rating).padEnd(5, '☆')}
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>
  );
};

export default ReviewCarousel;


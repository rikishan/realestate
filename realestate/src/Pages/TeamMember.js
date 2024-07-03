
// // src/Pages/Team.js
// import React from 'react';
// import TeamMember from './TeamMember';

// const teamMembers = [
//   {
//     name: 'Jack Halow',
//     position: 'CEO & Founder',
//     imgSrc: 'https://example.com/path_to_image',
//     socialLinks: [],
//     callIcon: 'https://example.com/path_to_call_icon'
//   },
//   {
//     name: 'John Smith',
//     position: 'Property Manager',
//     imgSrc: 'https://example.com/path_to_image',
//     socialLinks: [],
//     callIcon: 'https://example.com/path_to_call_icon'
//   },
//   {
//     name: 'Chris Patt',
//     position: 'Administrative Staff',
//     imgSrc: 'https://example.com/path_to_image',
//     socialLinks: [],
//     callIcon: 'https://example.com/path_to_call_icon'
//   },
//   {
//     name: 'Jack Halow',
//     position: 'Real Estate Marketer',
//     imgSrc: 'https://example.com/path_to_image',
//     socialLinks: [
//       { name: 'Facebook', url: 'https://example.com/facebook', icon: 'https://example.com/path_to_facebook_icon' },
//       { name: 'LinkedIn', url: 'https://example.com/linkedin', icon: 'https://example.com/path_to_linkedin_icon' },
//       { name: 'Twitter', url: 'https://example.com/twitter', icon: 'https://example.com/path_to_twitter_icon' },
//       { name: 'Instagram', url: 'https://example.com/instagram', icon: 'https://example.com/path_to_instagram_icon' }
//     ],
//     callIcon: 'https://example.com/path_to_call_icon'
//   }
// ];

// const Team = () => {
//   const teamStyle = {
//     textAlign: 'center',
//     padding: '50px 0',
//   };

//   const teamMembersStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   };

//   return (
//     <div style={teamStyle}>
//       <h2>Meet Our Agents</h2>
//       <div style={teamMembersStyle}>
//         {teamMembers.map((member, index) => (
//           <TeamMember key={index} {...member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

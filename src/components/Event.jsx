import React from "react";
import "../styles/event.scss";

const events = [
  {
    title: "Brainstorm",
    content:
      "Join the Microbus Society's exhilarating Brainstorm Quiz event, a thrilling exploration of creativity and intellect. The competition challenges teams to go beyond traditional quiz formats, fostering critical thinking and lateral problem-solving. With diverse rounds covering general knowledge, entertainment , sports, science and current affairs related questions participants can anticipate a dynamic atmosphere that encourages collaboration and intellectual curiosity. Open to all Microbus Society members and beyond, Brainstorm Quiz promises not only exciting prizes and recognition for outstanding performances but also a unique opportunity to connect with like-minded individuals. Don't miss out on this chance to ignite your intellectual spark and be part of a memorable quiz experience.",
    image: "/assets/events/brainstorm.jpeg",
  },
  {
    title: "Microexplorer",
    content:
      "A ride unlike any other, an uncharted territory, and an unmatched journey surrounded by several competitors. Good times start here, don't they? Microbus wants to take you on such a ride and for that, we present to you - MICROEXPLORER!! Along a journey to the final finish line, you and your buddy robot communicate using a wireless transmitter and overcome the struggles. Where the opponent has maneuvered, you gotta buckle up! Does your bot have what it takes to win this mega event? The journey only gets tougher when your bot gets damaged in the rough terrain with sharp turnes, obstacles , rotating platforms and what not! You have to design a backup, make the bot efficient and bring it back safely in the minimum possible time. After all, buddies are super precious. Aren't they? Microbus family invites you to participate and grace this event with your presence. Let us all show our zeal and enthusiasm through this fabulous opportunity.",
    image: "/assets/events/microexplorer.jpeg",
  },
  {
    title: "Web Set Hunt",
    content:
      "Got that curious explorer inside you who can run to seek answers. MICROBUS presents WEBSETHUNT to test your knowledge skills and ability to solve riddles. Get your team and mind ready for solving queries through the augmented routes of web servers 🌐. WEBSETHUNT consists of internet based round with cryptic questions that make you run against clock ⏱️and expand your creative thinking. Let the pursuit of answers begin!🚥 Get ready to use those search engines in your own creative way to hunt for facts or information to acquire the solutions.",
    image: "/assets/events/websethunt.jpeg",
  },
//   {
//     title: "Communicode",
//     content:
//       "Communicode, a solo coding event presented by Microbus, addresses the complexities and algorithms of computer networks. Challenge yourself to explore and apply knowledge in graph algorithms-Dijkstra's, Bellman, etc. along with complementary- CRC, leaky bucket and more. Get hands-on experience implementing protocols, encryption, and other development aspects using the Java and C++. Take part in the world of diverse design complexities to learn and create scalable and interoperable computer networks. Join Communicode for a chance to turn challenges into growth opportunities and mastery.",
//     image: "/assets/events/websethunt.jpeg",
//   },
  {
    title: "Aristotle",
    content:
      "Going through the recruitment process is The first step in the corporate world. It's the first station in a journey that will span over decades. It tests your ability to stay calm, composed and present yourself when it matters the most. Microbus presents “ Aristotle ”, an exciting opportunity To take a Peak into one of the most nerve Wrecking and significant phases of life. A test of your wits and soft skills as you navigate through the recruitment process. Three rounds, each more competitive than the other. Aptitude test, group discussion, personal interview-Each to test the various skills that you will have to show during a placement process and to help you understand your strength and weaknesses. So put your best self on, and get ready for an experience of a lifetime.",
    image: "/assets/events/aristotle.jpeg",
  },
//   {
//     title: "C1rcuit0",
//     content:
//       "Life's too short for weak connections. Why not build a strong bond 🖇️. Embrace your inner geek with circuits - where 'laughter' and 'soldering' are ultimate power couple 💎 !! Microbus ⚙️ give you a chance to become a circuitry master building your own circuits to demonstrate. 💁Grab soon to enhance your knowledge and make your path and circuit to flow in the path of light without resistance 🫠 . Come up with trio to illuminate your tech skills at this Techspardhha !! 💡⚡🔌 Explore - Create - Demonstrate ✨✨ Get to the exposure of elegance of Microbus 💎",
//     image: "/assets/events/websethunt.jpeg",
//   },
];

const Event = () => {
  return (
    <div className="event-container">
      <h1 className="heading">EVENTS</h1>

      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <h2 className="event-title">{event.title}</h2>
          <div className="event-content">
            <img
              src={event.image}
              className={`event-image ${
                index % 2 === 0 ? "float-left" : "float-right"
              }`}
              alt={event.title}
            />
            <p>{event.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;

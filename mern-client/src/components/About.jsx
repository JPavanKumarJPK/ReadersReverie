import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8 mt-16 "> {/* Adding mt-16 for top margin */}
      <h1 className="text-3xl font-bold mb-4">About Readers Reverie</h1>
      <p className="text-lg mb-4">
        Welcome to Readers Reverie, a sanctuary for book lovers and literary enthusiasts alike. Here, we believe in the power of words to transport, inspire, and transform lives.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        At Readers Reverie, our mission is simple: to cultivate a community of passionate readers and provide them with a platform to discover, discuss, and celebrate the world of literature.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
      <p className="text-lg mb-4">
        Explore our vast collection of book recommendations spanning various genres, from timeless classics to contemporary bestsellers. Engage in thought-provoking discussions with fellow bookworms in our forums. Stay updated on the latest literary news, author interviews, and book events through our blog.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">Join Us</h2>
      <p className="text-lg mb-4">
        Whether you're an avid reader, an aspiring writer, or simply someone who appreciates the magic of storytelling, Readers Reverie welcomes you with open arms. Join our community today and embark on a journey through the pages of imagination.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-lg mb-4">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you! Feel free to reach out to us at contact@readersreverie.com.
      </p>
    </div>
  );
};

export default AboutPage;

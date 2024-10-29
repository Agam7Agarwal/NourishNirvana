import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Nourish Your Body, Nurture Your Soul</h1>
        <p>
          Personalized nutrition plans to help you reach your wellness goals.
        </p>
        <button>Start Your Journey</button>
      </section>

      <section className="about-preview">
        <h2>About Dt. Ritika Gupta</h2>
        <p>
          Helping people achieve their healthiest potential through personalized
          nutrition plans.
        </p>
        <button>Learn More</button>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services">
          <div>Weight Loss Management</div>
          <div>Therapeutic Diets</div>
          <div>Custom Diet Plans</div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>"Vidhi's experience with managing PCOD was amazing!"</p>
        <p>"I lost 10 kg and improved my health with Ritika's plans!"</p>
      </section>
    </div>
  );
};

export default Home;

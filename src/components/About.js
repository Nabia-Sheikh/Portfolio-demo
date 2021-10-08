import React from 'react'
import img from "../assets/img/about.jpg"

const About = () => {
    return (
        <>
    
    <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>About</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h3>Illustrator &amp; UI/UX Designer</h3>
        <p className="font-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 4 Nov 1997</li>
              <li><i className="icofont-rounded-right" /> <strong>Website:</strong> <a href="https://nabiasheikh.netlify.app/
" target="_blank" rel="noreferrer">Nabiasheikh.netlify.app
</a>
</li>
              <li><i className="icofont-rounded-right" /> <strong>Phone:</strong> +123 456 7890</li>
              <li><i className="icofont-rounded-right" /> <strong>City:</strong> City : Karachi, Pakistan</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 24</li>
              <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> BSIT</li>
              <li><i className="icofont-rounded-right" /> <strong>Email:</strong> nabiasheikh2222@gmail.com</li>
              <li><i className="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default About

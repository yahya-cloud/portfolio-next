import React from "react";
import Icon from "../Icon/Icon";
import Form from "../Form/Form";

import Grid from "@mui/material/Grid";

import "./Footer.css";

const Footer = (props) => {
  return (
    <section className="footer" id="about">
      <div className="footer_wrapper">
        <h1 className="footer_heading">Contact</h1>
        <div className="sections_line" />
        {" "}
        <Grid
          container
          spacing={6}
          sx={{
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Grid item xs={12} md={4} className="footer_image_column">
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-once={true}
              data-aos-duration={1500}
              className="img_container"
              style={{ backgroundImage: `url(${"/images/yahya.jpg"})` }}
            ></div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-once={true}
              data-aos-delay={props.duration}
              data-aos-duration={800}
              className="about_container"
            >
              <p className="about_info">
                I'm a Software Engineer based in Berlin, currently pursuing an M.Sc.
                in Artificial Intelligence. My work centers on building
                reliable, scalable products that balance performance, usability,
                and simplicity. I enjoy tackling complex challenges, improving
                systems, and designing applications that are both technically
                robust and intuitive to use. With a strong interest in
                thoughtful engineering, I aim to create solutions that are
                practical, efficient, and impactful.
                <br></br>
                If you are interested in my work or if you like to collaborate
                or just say hello, feel free to contact me.
              </p>
              <Icon size="small" section="footer" />
              <div className="contact_container">
                <div className="contact_info">
                  <h4 className="contact_mail">MAIL: yahya01work@gmail.com</h4>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* contact box */}

      {/* about box */}

      {/* form */}

      <Form />

      <p className="copyright">&#169;Designed and Developed by Mohd Yahya</p>
    </section>
  );
};

export default Footer;

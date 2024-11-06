import { ResumeData } from "../types";

function About(props: { resumeData: ResumeData }) {
  let resumeData = props.resumeData;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/linked_in_profile.jpeg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>
        </div>
      </div>
    </section>
  );
}

export default About;



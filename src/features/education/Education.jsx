import { Reveal } from "../../components/ui/Reveal/Reveal";
import "./Education.scss";
export function Education() {
  return (
    <section className="education shell">
      <Reveal>
        <h2>Foundation</h2>
        <div className="education-grid">
          <div>
            <span>Education</span>
            <h3>B.Tech, Computer Science &amp; Engineering</h3>
            <p>
              Sushila Devi Bansal College of Technology, 2018 - 2022
              <br />
              CGPA 8.32, First Division with Honours
            </p>
          </div>
          <div>
            <span>Certification</span>
            <h3>Microsoft Azure Data Fundamentals</h3>
            <p>DP-900 certification</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

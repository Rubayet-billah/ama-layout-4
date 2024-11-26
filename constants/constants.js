/* eslint-disable react/no-unescaped-entities */
import Picture1 from "@/assets/icons/Picture1.png";
import Picture2 from "@/assets/icons/Picture2.png";
import Picture3 from "@/assets/icons/Picture3.png";
import Picture4 from "@/assets/icons/Picture4.png";
import Picture5 from "@/assets/icons/Picture5.png";
import Picture6 from "@/assets/icons/Picture6.png";
export const pubCode = "MIR";
export const websiteTitle = "Market Insights Report";
export const websiteURL = "https://marketinsights.report";
export const salesEmail = "sales@marketinsights.report";

export const themeColors = {
  primary: "#0E0F3B",
  secondary: "#F7931E",
  accent: "#837575",
  neutral: "#6b6b6b",
  info: "#0693E3",
};

export const slidesData = [
  {
    id: 2,
    title: "Twice The Glory",
    subTitle: "We are yet again",
    subTitle2: "A great place to work",
    image: "/images/bannerSlider/image-1.jpg",
  },
  {
    id: 3,
    title: "Discover New Opportunities",
    subTitle: "Explore endless possibilities",
    subTitle2: "with our innovative solutions",
    image: "/images/bannerSlider/image-2.png",
  },
  {
    id: 1,
    title: "Transform Your Business",
    subTitle: "Unlock your potential",
    subTitle2: "with our cutting-edge technology",
    image: "/images/bannerSlider/image-3.png",
  },
];

export const links = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "/about" },
  {
    text: "Industries",
    url: "/industries",
    submenus: [
      { text: "Healthcare", url: "/reports" },
      { text: "Technology", url: "/reports" },
      { text: "Finance", url: "/reports" },
      { text: "Education", url: "/reports" },
      { text: "Manufacturing", url: "/reports" },
    ],
  },
  { text: "Services", url: "/service" },
  // { text: "Insights", url: "#" },
  { text: "Contact", url: "/contact" },
];

export const industries = [
  {
    id: 1,
    name: "Healthcare",
    description:
      "Design and build services from initial sketches to final production, with focus on change drivers.",
    icon: Picture1,
  },
  {
    id: 2,
    name: "Chemicals and Materials",
    description:
      "Objective solutions for construction markets, emphasizing best opportunities.",
    icon: Picture2,
  },
  {
    id: 3,
    name: "Information and Technology",
    description:
      "Innovative growth models generating new products with lower risks of failure.",
    icon: Picture4,
  },
  {
    id: 4,
    name: "Energy and Power",
    description:
      "Integrated commercial strategies for scheduled transport operations and market trends.",
    icon: Picture5,
  },
  {
    id: 5,
    name: "Agriculture",
    description:
      "Understanding construction market drivers across major geographies.",
    icon: Picture6,
  },
  {
    id: 6,
    name: "Consumer Goods",
    description:
      "Objective solutions emphasizing best opportunities in buy-side and sell-side.",
    icon: Picture3,
  },
];

export const jobDetails = [
  {
    id: 1,
    title: "Frontend Developer",
    vacancy: 2,
    postedAt: "2024-03-01",
    jobSummary: `We're seeking a talented Frontend Developer to join our team at TechCo, where innovation and creativity thrive. As a Frontend Developer, you'll play a pivotal role in developing user-friendly web interfaces using cutting-edge technologies like React.js. If you're passionate about creating seamless user experiences and enjoy working in a collaborative environment, then this role is perfect for you.`,
    jobDescription: (
      <div>
        <p>
          We're seeking a Frontend Developer to join our dynamic team at TechCo,
          where innovation and creativity thrive.
        </p>
        <p>
          As a Frontend Developer, you'll play a crucial role in developing
          user-facing web applications using cutting-edge technologies and
          frameworks.
        </p>

        <h3>Why Join TechCo?</h3>
        <ul>
          <li>
            Work on exciting projects that push the boundaries of technology.
          </li>
          <li>
            Collaborate with talented individuals in a supportive and inclusive
            environment.
          </li>
          <li>Competitive salary and benefits package.</li>
          <li>Opportunities for career growth and advancement.</li>
        </ul>

        <h3>Skills and Qualifications:</h3>
        <ul>
          <li>
            <strong>Proficiency in HTML, CSS, and JavaScript:</strong> Solid
            understanding of frontend development fundamentals.
          </li>
          <li>
            <strong>Experience with React.js:</strong> Hands-on experience
            developing React applications.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ability to create responsive and
            mobile-friendly user interfaces.
          </li>
          <li>
            <strong>Version Control:</strong> Familiarity with Git and version
            control best practices.
          </li>
          <li>
            <strong>Problem-Solving Skills:</strong> Ability to troubleshoot and
            debug frontend issues effectively.
          </li>
          <li>
            <strong>Team Player:</strong> Excellent communication and
            collaboration skills.
          </li>
        </ul>

        <h3>Key Responsibilities:</h3>
        <ul>
          <li>
            Develop user-friendly web interfaces using React.js and other
            frontend technologies.
          </li>
          <li>
            Collaborate with backend developers to integrate frontend components
            with server-side logic.
          </li>
          <li>
            Implement responsive designs and ensure cross-browser compatibility.
          </li>
          <li>Optimize web applications for maximum speed and scalability.</li>
          <li>
            Participate in code reviews and provide constructive feedback to
            team members.
          </li>
          <li>
            Stay updated with frontend development trends and best practices.
          </li>
        </ul>

        <p>
          Join us at TechCo and be part of a team that's shaping the future of
          technology. Apply now and take your frontend development career to new
          heights!
        </p>
      </div>
    ),
    aboutCompany: "TechCo is a leading technology company specializing in...",
  },
  {
    id: 2,
    title: "Backend Developer",
    vacancy: 3,
    postedAt: "2024-03-10",
    jobSummary: `Join our dynamic team at SoftTech as a Backend Developer and contribute to building robust and scalable backend systems. You'll have the opportunity to work on challenging projects and collaborate with cross-functional teams to deliver high-quality solutions. If you have a strong proficiency in Node.js and a passion for backend development, then we'd love to hear from you`,
    jobDescription: (
      <div>
        <p>
          We're looking for a skilled Backend Developer to join our team at
          SoftTech, where innovation meets excellence.
        </p>
        <p>
          As a Backend Developer, you'll be responsible for building robust and
          scalable backend systems to support our web and mobile applications.
        </p>

        <h3>Why Join SoftTech?</h3>
        <ul>
          <li>
            Work on challenging projects in a collaborative and supportive
            environment.
          </li>
          <li>
            Opportunity to contribute to the development of cutting-edge
            technology solutions.
          </li>
          <li>
            Competitive salary and benefits package, including flexible work
            arrangements.
          </li>
          <li>Room for professional growth and career advancement.</li>
        </ul>

        <h3>Skills and Qualifications:</h3>
        <ul>
          <li>
            <strong>Proficiency in Node.js:</strong> Extensive experience
            developing backend applications using Node.js and related
            frameworks.
          </li>
          <li>
            <strong>Database Management:</strong> Solid understanding of
            database design and management, with experience in SQL and NoSQL
            databases.
          </li>
          <li>
            <strong>RESTful APIs:</strong> Experience building and consuming
            RESTful APIs for web and mobile applications.
          </li>
          <li>
            <strong>Cloud Services:</strong> Familiarity with cloud platforms
            like AWS or Azure, including serverless architectures.
          </li>
          <li>
            <strong>Agile Development:</strong> Ability to work in an agile
            environment and adapt to changing project requirements.
          </li>
          <li>
            <strong>Problem-Solving Skills:</strong> Excellent analytical and
            problem-solving abilities.
          </li>
        </ul>

        <h3>Key Responsibilities:</h3>
        <ul>
          <li>
            Design and develop scalable backend systems using Node.js and
            related technologies.
          </li>
          <li>
            Integrate backend services with frontend components to deliver
            seamless user experiences.
          </li>
          <li>
            Implement secure authentication and authorization mechanisms for web
            and mobile applications.
          </li>
          <li>
            Optimize backend applications for performance, reliability, and
            scalability.
          </li>
          <li>
            Collaborate with cross-functional teams to define project
            requirements and deliver high-quality solutions.
          </li>
          <li>
            Stay updated with emerging technologies and best practices in
            backend development.
          </li>
        </ul>

        <p>
          Join us at SoftTech and be part of a team that's shaping the future of
          technology. Apply now and unleash your potential as a Backend
          Developer!
        </p>
      </div>
    ),
    aboutCompany:
      "SoftTech is a leading software development company specializing in...",
  },
];

export const purposeOptions = [
  { id: 1, value: "Market Understanding and Insights" },
  { id: 2, value: "Competitive Analysis" },
  { id: 3, value: "Strategic Planning" },
  { id: 4, value: "Investment Decisions" },
  { id: 5, value: "Customer Insights" },
  { id: 6, value: "Risk Mitigation" },
  { id: 7, value: "Innovation and Product Development" },
  { id: 8, value: "Regulatory and Policy Awareness" },
  { id: 9, value: "Others" },
];

export const testimonialBenefits = [
  {
    title: "Trust & Credibility",
    description:
      "Real stories from real users enhance our credibility, helping new customers make confident decisions.",
  },
  {
    title: "Insightful Feedback",
    description:
      "Testimonials provide valuable insights into the practical benefits of our reports, guiding prospective users.",
  },
  {
    title: "Your Voice Shapes Us",
    description:
      "Your feedback is crucial. It helps improve our offerings and ensures our reports meet your needs.",
  },
];

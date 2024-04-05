import './header.scss';

export default function Header() {
  return (
    <>
      <section className="header__svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1440 320">
          <path
            fill="#1C2942"
            fillOpacity="1"
            d="M0,288L20,272C40,256,80,224,120,224C160,224,200,256,240,240C280,224,320,160,360,144C400,128,440,160,480,170.7C520,181,560,171,600,154.7C640,139,680,117,720,122.7C760,128,800,160,840,170.7C880,181,920,171,960,144C1000,117,1040,75,1080,69.3C1120,64,1160,96,1200,106.7C1240,117,1280,107,1320,138.7C1360,171,1400,245,1420,282.7L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
        </svg>
      </section>
      <section className="header">
        <ul className="header__nav">
          <li className="header__nav--item"></li>
          <li className="header__nav--item"></li>
          <li className="header__nav--item"></li>
        </ul>
        <div className="header__logo">G</div>
      </section>
    </>
  );
}

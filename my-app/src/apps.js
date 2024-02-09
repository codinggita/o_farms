import './apps.css';
import Appnavtest from './appnavtest.js';
import cart from './addtocart.svg';
import videospic from './videospics.svg';

// import Footer from './Footer';
//  import Newsletter from './Newsletter';

//  import Advertisement from './newtestt';
//  import JournalPage from './journal';
// import Pricing from './Pricing';


function Apps(){
    return(
        <div className='landing-page-background'>
        <Appnavtest/>
        <div>
        <div className='main-container'>


<div className='l-container'>
<div className='l-top'>
<div className='l-t-t'>
<img
              className="undraw-add-to-cart"
              alt="Undraw add to cart"
              src={cart}
            />
  </div>
  <div className='l-t-b'>
  <div className="check-our-quality">
              Check Our
              <br />
              <br />
              Quality
              <br />
              <br />
              Products
            </div>
</div>
  </div>

  <div className='l-bottom'>
  <div className='l-b-l'>

  <div className="gtv-container">
              <p className="go-through-videos">
                <span className="span">Go through</span>
                <span className="spacetext">
                  {" "}
                  <br />
                  
                </span>
                <span className="text-video">Videos</span>
                <span className="spacetext">&nbsp;</span>
              </p>
              </div>
</div>
<div className='l-b-r'>
<div>
              <img
                className="undraw-online-video"
                alt="Undraw online video"
                src={videospic}
              />
            </div>
</div>
</div>
  </div>


  <div className='r-container'>
  <div className='r-top'>

  <div className='r-t-l'>
  <div>
                <p className="test-our-soil-before">
                  <span className="text-wrapper-10">
                    Test Our soil, <br />
                    <br />
                    Before going
                    <br />
                    <br />
                    to Farming
                    <br />
                    <br />
                     Organically
                  </span>
                  <span className="text-wrapper-11">&nbsp;</span>
                </p>
              </div>
  </div>
  <div className="r-t-r">
  <img
                  className="undraw-scientist"
                  alt="Undraw scientist"
                  src="https://cdn.animaapp.com/projects/65bbd071206cc4fa9aea7174/releases/65bbd0ea4ef69e7c65ae2c52/img/undraw-scientist-ft0o-1.svg"
                />
  </div>
   
</div>
<div className='r-b'>
<button className="stbtn">
              <btn className="text-stbtn">Book Now</btn>
            </button>
</div>
</div>

</div>
        </div>
        {/* <div><Apps/></div>
   
    <div><JournalPage/></div>
    <div><Pricing/></div>
    <div className='lowcard'>
    <Newsletter/>
    <Footer/></div> */}
        </div>

        
    );
}

export default Apps;
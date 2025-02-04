
import OwlCarousel from 'react-owl-carousel';
export default function LogoSection() {
  return (
    <div className="logo-section spad">
            <OwlCarousel 
                className="logo-items" 
                loop 
                margin={40} 
                nav
                responsive={{
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 5 },
                }}
            >
                <div className="logo-item">
                    <img src="img/logos/logo-1.png" alt="" />
                </div>
                <div className="logo-item">
                    <img src="img/logos/logo-2.png" alt="" />
                </div>
                <div className="logo-item">
                    <img src="img/logos/logo-3.png" alt="" />
                </div>
                <div className="logo-item">
                    <img src="img/logos/logo-4.png" alt="" />
                </div>
                <div className="logo-item">
                    <img src="img/logos/logo-5.png" alt="" />
                </div>
            </OwlCarousel>
        </div>
  );
}

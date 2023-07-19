import Image from "next/image";
import homeimage from "../../public/assests/home.jpg";
import fastcash from "../../public/assests/fastcash.png";
import personalizedSeller from "../../public/assests/personalized.png";
import consultations from "../../public/assests/Consulting.png";
import investment from "../../public/assests/invest.png";
import aboutImage from "../../public/assests/about-image.jpg";
import group from "../../public/assests/group.svg"
import Link from "next/link";

const heroSectionStyle = {
  background:
    "linear-gradient(91deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.14) 100%), url('/assests/hero-image.jpg'), lightgray 50% / cover no-repeat",
};

export default function Home() {
  return (
    <main>
      <section
        id="hero__section"
        className="h-[720px] -mt-40 flex flex-col"
        style={heroSectionStyle}
      >
        <div className="container overflow-hidden flex flex-col justify-center h-full">
          <h1 className="capitalize text-2xl lg:text-3xl xl:text-4xl font-semibold text-white max-w-[450px] mt-28 sm:mt-48 leading-relaxed tracking-wider break-words">
            real estate{" "}
            <span className="text-primary font-bold text-[26px] lg:text-[32px] xl:text-[38px]">
              solutions
            </span>{" "}
            and investment firm
          </h1>
          <h3 className="text-white mt-3 block sm:hidden leading-6 tracking-wide">
          Selling your house made easy Fast cash, tailored solutions, and a positive impact. Your home, your needs, our solution. Experience a hassle-free selling process with us.
          </h3>
          <Link href={"#contact"} className="scroll-smooth"><button className="text-white mt-8 font-semibold tracking-wide bg-primary capitalize py-2 px-8 w-fit hover:brightness-75">
            Contact Us
          </button></Link>
        </div>
        <div className="hidden w-full sm:w-9/12 lg:w-3/4 xl:w-7/12 bg-black sm:grid grid-cols-3 text-left text-white self-end">
          <div className="detail__1 my-5 ml-5 border-b-2">
            <h3>Selling your house made easy: Fast cash, tailored solutions, and a positive impact. </h3>
          </div>
          <div className="detail__2 my-5 border-b">
            <h3 className="px-5">
            Your home, your needs, our solution. Experience a hassle-free selling process with us.
            </h3>
          </div>
          <div className="detail__3">
            <Image
              alt="Property"
              src={homeimage}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="bg-accent" id="services">
        <div className="container overflow-hidden py-8">
          <div className="about-details flex flex-col sm:items-center sm:flex-row gap-4 sm:gap-10 h-auto sm:h-60">
            <div className="heading sm:grow mt-6 sm:mt-0">
              <h2 className="capitalize leading-10 tracking-wider text-2xl lg:text-3xl xl:text-4xl font-semibold w-72">
                Performee Throught{" "}
                <span className="text-primary font-bold">Passion</span>
              </h2>
            </div>
            <div className="paragraph w-full sm:w-80">
              <p>
                Established in 2017, Bramble Management Group is a trusted real
                estate company specializing in wholesale transactions and
                property acquisition.
              </p>
            </div>
            <div className="button">
              <Link href={"#contact"}>
              <button className="text-white grow font-semibold tracking-wide bg-primary capitalize py-2 px-8 hover:brightness-75 ">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
          <div
            className="sevices grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 xl:gap-10 mt-6"
            id="services"
          >
            <div className="card flex flex-col justify-around bg-white p-4 lg:p-8 relative">
              <Image alt="Property" src={fastcash} width={200} height={150} />
              <h2 className="absolute top-4 right-4 text-5xl font-black opacity-5">
                1
              </h2>
              <h2 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                Fast Cash Home Purchases
              </h2>
            </div>
            <div className="card flex flex-col justify-around bg-white p-4 lg:p-8 relative">
              <Image
                alt="Property"
                src={personalizedSeller}
                width={200}
                height={150}
              />
              <h2 className="absolute top-4 right-4 text-5xl font-black opacity-5">
                2
              </h2>
              <h2 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                Personalized Seller Solutions
              </h2>
            </div>
            <div className="card flex flex-col justify-around bg-white p-4 lg:p-8 relative">
              <Image alt="Property" src={consultations} width={200} height={150} />
              <h2 className="absolute top-4 right-4 text-5xl font-black opacity-5">
                3
              </h2>
              <h2 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                Home Improvement Consultations
              </h2>
            </div>
            <div className="card flex flex-col justify-around bg-white p-4 lg:p-8 relative">
              <Image alt="Property" src={investment} width={200} height={150} />
              <h2 className="absolute top-4 right-4 text-5xl font-black opacity-5">
                4
              </h2>
              <h2 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                Investment Opportunities
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="why__us overflow-hidden" id="about">
        <div className="container py-4 md:py-24 md:flex">
          <div className="image w-full md:w-1/2 flex-wrap h-full relative">
             <Image
              alt="dots group1"
              src={group}
              // Make the image display full width
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
              }}
              className="-z-10 -bottom-8 -right-7 absolute"
            />
             <Image
              alt="dots group 2"
              src={group}
              // Make the image display full width
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
              }}
              className="absolute -top-8 -left-7 -z-10"
            />
            <Image
              alt="why us"
              src={aboutImage}
              placeholder="blur"
              // Make the image display full width
              style={{
                width: "430px",
                height: "490px",
                objectFit: "cover",
              }}
              className="z-10"
            />
          </div>
          <div className="content w-full md:w-1/2 md:ml-20">
            <h3 className="uppercase tracking-wider font-semibold text-primary mt-10 md:mt-0">Why Choose Us</h3>
            <h2 className="capitalize text-2xl md:text-3xl lg:text-4xl leading-10 tracking-wide mt-2 font-semibold">Quick Cash, Tailored Solutions, Happy Sellers</h2>
            <p className="mt-3 text-base leading-7 tracking-wide">Thank you for choosing our real estate firm. We are experts in helping homeowners sell their houses quickly and for cash. Our personalized approach and commitment to meeting your unique needs set us apart. Rest assured, we genuinely care about making a positive impact on your life. Count on us for a seamless and successful home selling experience that will leave you satisfied and relieved.</p>
           <Link href={"#contact"}>
           <button className="text-white grow font-semibold tracking-wide bg-primary capitalize py-2 px-8 mt-6 mb-10 md:mb-0 md:mt-10">
                Contact Us
              </button>
           </Link>
          </div>
        </div>
      </section>
      <section className="contact bg-black" id="contact">
        <div className="max-w-7xl m-auto md:flex">
          <div className="contact__details py-10 pl-5 md:pl-7 lg:ml-[150px] 2xl:ml-0 w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="w-fit border-b-4 border-white border-double text-xl md:text-2xl text-white tracking-wider leading-10 uppercase font-semibold">Contact Us</h2>
            <div className="call mt-6">
            <h3 className="text-lg md:text-xl text-white tracking-wider leading-10 uppercase font-semibold">Call Us</h3>
            <h3 className="text-md text-white tracking-wider leading-8 uppercase opacity-90">(470) 209-3591</h3>
            <h3 className="text-md text-white tracking-wider leading-8 uppercase opacity-90">(516) 458-8616</h3>
            </div>
            <div className="email mt-3">
            <h3 className="text-lg md:text-xl text-white tracking-wider leading-10 uppercase font-semibold">Email Us</h3>
            <h3 className="text-md text-white tracking-wider leading-8 uppercase opacity-90">example@gmail.com</h3>
            </div>
            <div className="address mt-3">
            <h3 className="text-lg md:text-xl text-white tracking-wider leading-10 uppercase font-semibold">Our Address</h3>
            <p className="text-md text-white tracking-wider leading-8 uppercase opacity-90">191 Urban Ave.Westbury, NY 11590</p>
            <p className="text-md text-white tracking-wider leading-8 uppercase opacity-90"> 2483 Heritage Village ste 16-331, Snellville, Ga. 30078</p>
            </div>
          </div>
          <div className="map w-full md:w-1/2">
          <div style={{width: "100%"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.026564040602!2d-73.56674982496719!3d40.76144047138622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28733cb58c8c9%3A0x1e4387c5b3ece409!2s191%20Urban%20Ave%2C%20Westbury%2C%20NY%2011590%2C%20USA!5e0!3m2!1sen!2sin!4v1689347462783!5m2!1sen!2sin" width="100%" height="450" allowFullScreen
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

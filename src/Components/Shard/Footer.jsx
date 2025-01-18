import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
export default function CustomFooter() {
  return (
    <Footer container>
      <div className="w-full container mx-auto py-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 space-y-10 md:space-y-0">
          {/* left section */}
          <section className="flex flex-col space-y-2">
            <div className="flex">
              <FooterBrand src={logo} alt="Logo" className="mr-1" />
              <FooterBrand alt="name" src={name} />
            </div>
            <div className="max-w-xs lg:max-w-xl text-lg">
              Welcome to{" "}
              <span className="font-merriweather font-semibold">MediCamp</span>,
              where healthcare meets compassion. Our mission is to provide
              accessible and quality medical services to all. Join us in our
              efforts to promote well-being and community health. Together,
              let's create a healthier tomorrow.
            </div>
          </section>
          {/* center */}
          <section>
            <FooterTitle title="All Camps" />
            <FooterLinkGroup col>
              <FooterLink href="#">Login</FooterLink>
              <FooterLink href="#">Register</FooterLink>
              <FooterLink href="#">All Camps</FooterLink>
            </FooterLinkGroup>
          </section>
          {/* right */}
          <section>
            <div>
              <FooterTitle title="Contact" />
              <FooterLinkGroup col>
                <FooterLink>
                  <div className="flex items-center gap-1 hover:no-underline">
                    <span className="text-xl">
                      <IoMdHome />
                    </span>
                    <span>Patuakhali, Bangladesh</span>
                  </div>
                </FooterLink>
                <FooterLink>
                  <div className="flex items-center gap-1 hover:no-underline">
                    <span className="text-lg">
                      <MdEmail />
                    </span>
                    <span>info@example.com</span>
                  </div>
                </FooterLink>
                <FooterLink>
                  <div className="flex items-center gap-1 hover:no-underline">
                    <span className="text-lg">
                      <FaPhoneFlip />
                    </span>
                    <span>+2524035440350</span>
                  </div>
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </section>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright by="Medi Camp™. All Rights Reserved." year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsLinkedin} />
            <FooterIcon href="#" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

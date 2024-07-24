// import profile images
import ProfilePhoto1 from '../src/assets/img/profile1.png';
import ProfilePhoto2 from '../src/assets/img/profile2.png';
import ProfilePhoto3 from '../src/assets/img/profile3.png';

// import about icons
import Skill3 from '../src/assets/img/skills/skill3.png';
import Skill4 from '../src/assets/img/skills/skill4.png';
import Skill6 from '../src/assets/img/skills/skill6.png';

// import team images
import TeamMember1 from '../src/assets/img/lawyer1.png';
import TeamMember2 from '../src/assets/img/lawyer2.png';
import TeamMember3 from '../src/assets/img/lawyer3.png';

// import social icons
import FacebookIcon from '../src/assets/img/social/facebook.png';
import TwitterIcon from '../src/assets/img/social/twitter.png';
import InstagramIcon from '../src/assets/img/social/instagram.png';
import YoutubeIcon from '../src/assets/img/social/youtube.png';
import PinterestIcon from '../src/assets/img/social/pinterest.png';






// navigation data
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'About Us',
    href: 'skills',
  },
  {
    name: 'Our team',
    href: 'team',
  },
  {
    name: 'Contact us',
    href: 'contact',
  },
];

// testimonials data
export const testimonials = [
  {
    text: '',
    name: 'Jane Cooper',
    image: ProfilePhoto1,
    position: 'Web Developer',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
    name: 'Theresa Webb',
    image: ProfilePhoto2,
    position: 'Web Designer',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
    name: 'Kathryn Murphy',
    image: ProfilePhoto3,
    position: 'UI/UX Designer',
  },
];

// skills data
export const skills = [
  {
    id: "1",
    icon: Skill3 ,
    title: "Real Estate",
    description:
      'Trust Ringo Real Estate Lawyers for expert legal guidance in buying, selling and inheritance of property. Click or tap on this to ensure a smooth process every step of the way.',
  },
  {
    id: "2",
    icon: Skill4,
    title: 'Taxes',
    description:
      'Let Ringo Real Estate Lawyers provide expert legal assistance for all your tax-related needs. Click or tap to explore our services and ensure compliance and efficiency in your tax matters.',
  },
  {
    id: "3",
    icon: Skill6,
    title: 'Banking',
    description:
      'Rely on Ringo Real Estate Lawyers for expert legal support in all your banking needs. Tap on this to explore our services and ensure smooth and secure banking transactions.',
  },
];

// team data
export const team = [
  {
    image: TeamMember1,
    name: 'Jeffery William',
    position: 'Real Estate and Financial Law Specialist',
    description:
      'Jeffery William brings over a decade of expertise in real estate and financial law, offering comprehensive legal solutions for property transactions, investment strategies, and financial compliance. Known for his meticulous attention to detail and client-focused approach, Jeffery ensures seamless and secure legal processes, helping clients maximize their investments and safeguard their assets.',
  },
  {
    image: TeamMember2,
    name: 'Andrea Collins',
    position: 'Expert Business Lawyer',
    description:
      'With over 15 years of experience, Andrea Collins provides strategic legal counsel tailored to the needs of businesses both large and small. Specializing in corporate law, contract negotiations, and regulatory compliance, Andrea is dedicated to helping clients navigate the complexities of the legal landscape to achieve their business goals. Trust in his expertise and commitment to excellence for all your legal needs.',
  },
  {
    image: TeamMember3,
    name: 'Paisley Mchoy',
    position: ' Compassionate Family Law Advocate',
    description:
      'With a deep commitment to helping families navigate challenging legal issues, Paisley McHoy offers expert guidance in family law matters including divorce, custody, and estate planning. With a compassionate and personalized approach, Paisley strives to achieve the best outcomes for her clients, ensuring their rights and interests are protected. Trust Paisley’s expertise and dedication for your family legal needs.',
  },
];

// social data
export const social = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: PinterestIcon,
  },
];
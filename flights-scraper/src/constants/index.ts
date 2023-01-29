import * as assets from "../assets";

//TECHNOLOGIES
import { Technologies } from "./technologies";
import { Categories } from "./technologies";
const CategoryTitles = Object.values(Categories);
const SuffeledCategoryTitles = CategoryTitles.sort(() => 0.5 - Math.random())
export const TECHNOLOGYS_GROUPS: any = SuffeledCategoryTitles.map((title, idx) => {
  return { id: idx, title, items: [] };
});
export const updateTechnologiesGroups = () => {
  TECHNOLOGYS_GROUPS.forEach((group: any) => {
    const technology = Technologies.filter(
      (tech) => tech.category === group.title
    );
    group.items.push(...technology);
  });
};
updateTechnologiesGroups();

//PRODUCTS
export const PRODUCTS = [
  {
    id: 0,
    icon: assets.devopsIcon1,
    title: "DevOps",
    subTitle:
      "Lorem ipsum dolor sit ametos, consectetuer adipiscing ela sed dia monor. ",
    content:
      "nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    logo: assets.terragramLogo,
  },
  {
    id: 1,
    icon: assets.finopsIcon,
    title: "Finops",
    subTitle:
      "Lorem ipsum dolor sit ametos, consectetuer adipiscing ela sed dia monor. ",
    content:
      "nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    logo: assets.finopsysLogo,
  },
];

//SERVICES
export const SERVICES = [
  {
    id: 0,
    img: assets.devopsIcon2,
    title: "DevOps",
    subTitle:
      "DevOps is a culture, set of practices, and tools that enable our clients to deliver high-quality software faster and more reliably. ",
    content:
      "Our DevOps team brings together people, processes, and technology to automate the build, test, and release process of applications. By embracing DevOps, our clients can improve collaboration and communication between development and operations teams, increase efficiency and speed of delivery, and reduce the risk of errors in the software development lifecycle. Our DevOps services can help our clients deliver value to their customers faster, out-innovate their competitors, and drive business growth.",
  },
  {
    id: 1,
    img: assets.uxuiIcon,
    title: "UX/UI",
    subTitle:
      "User experience (UX) and user interface (UI) design are two critical components of any successful digital product. ",
    content:
      "UX design focuses on creating intuitive, efficient, and enjoyable experiences for users, while UI design focuses on the visual and interactive aspects of a product. Our UX and UI designers work to create products that are easy to use and aesthetically pleasing. By embracing UX and UI design principles, our clients can create digital products that are intuitive, engaging, and visually appealing, which can lead to increased customer satisfaction, loyalty, and conversions. In today's highly competitive digital landscape, having a strong UX and UI design strategy can be a major differentiator for businesses, helping them to stand out from the competition and drive growth.",
  },
  {
    id: 2,
    img: assets.developmentIcon,
    title: "Development",
    subTitle:
      "Software development is the process of designing, creating, testing, and maintaining software applications and systems. ",
    content:
      "Our development team involves a range of activities, including requirements gathering, design, coding, testing, and deployment. It is a critical component of modern businesses, as software is at the heart of almost every aspect of how we work and live. By embracing software development best practices, our clients can create high-quality software that meets the needs of their customers and drives business growth. Whether you are developing desktop applications, mobile apps, web-based systems, or complex software solutions, our team offers effective software development which is essential for success in today's digital world.",
  },
];

//CLIENTS
export const CLIENTS = [
  {
    id: 0,
    isOn: true,
    logo: assets.clalit,
    review:
      "0 Tal and his team are true professio-nals, nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat. Ut wisi enim ad minim viam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    writtenBy: "0 Moran L, CMO",
  },
  {
    id: 1,
    isOn: false,
    logo: assets.clalit,
    review:
      "1 Yogi and his team are true professio-nals, nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat. Ut wisi enim ad minim viam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    writtenBy: "1 Dana L, CMO",
  },
  {
    id: 2,
    isOn: false,
    logo: assets.clalit,
    review:
      "2 Tomer and his team are true professio-nals, nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat. Ut wisi enim ad minim viam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    writtenBy: "2 Vig L, CMO",
  },
  {
    id: 3,
    isOn: false,
    logo: assets.clalit,
    review:
      "3 Tomer and his team are true professio-nals, nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat. Ut wisi enim ad minim viam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    writtenBy: "3 Vig L, CMO",
  },
  {
    id: 4,
    isOn: false,
    logo: assets.clalit,
    review:
      "4 Tomer and his team are true professio-nals, nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat. Ut wisi enim ad minim viam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    writtenBy: "4 Vig L, CMO",
  },
  {
    id: 5,
    isOn: false,
    logo: assets.clalit,
    review:
      "5 Tomer and his team are true professio-nals, nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat. Ut wisi enim ad minim viam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    writtenBy: "5 Vig L, CMO",
  },
];

//TEAM
const inLink = "https://il.linkedin.com/in/tomer-raz-578b2421b";
export const MEMBERS = [
  {
    id: 3,
    img: assets.img4,
    in: inLink,
    title: "Tomer Raz, Full Stack Developer",
    description:
      "I am a fullstack developer with one year of experience. I have the ability to design and implement efficient software solutions to meet the specific needs of clients. I am familiar with the latest technologies and know how to complete projects successfully. I work well alone or with a team and am known for my problem-solving skills and ability to think creatively.",
  },
];



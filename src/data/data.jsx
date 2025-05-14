import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"

const servicesData = [
    {
        name: "Web Development",
        details: "I do web development for both frontend and backend. I can build a website for you or your business."
    },
    {
        name: "API Design/ Intergration",
        details: "Developing highly secure, fast and scalable Restful API for your application."
    },
    {
        name: "Payment Integration",
        details: "I do payment Integration to automate the process of payment. I can integrate with payment gateways."
    }
]

const projectsData = [
    {
        name: "Tuzidi Movers App",
        link: "https://tuzidi-frontend.vercel.app/",
        image: img1,
        details: "TUZIDI Movers brings years of experience to delivering affordable, reliable, and trustworthy relocation services across the country.",
        type: "website"
    },
    {
        name: "African Gourmet Cuisine Hub",
        link: "https://african-gourmet-cuisine-hub-f180079b7050.herokuapp.com/",
        image: img2,
        details: "African Gourmet Cuisine Hub, the premier destination for authentic African gourmet experiences.",
        type: "website"
    },
    {
        name: "Church Poster Design",
        link: "https://photos.app.goo.gl/example1", // replace with your actual shared link
        image: "https://lh3.googleusercontent.com/example_image1", // replace with actual image link
        details: "A modern church poster designed using Adobe Illustrator for a youth event.",
        type: "graphics"
    },
    {
        name: "Business Card Sample",
        link: "https://photos.app.goo.gl/example2", // replace with your actual shared link
        image: "https://lh3.googleusercontent.com/example_image2", // replace with actual image link
        details: "Clean, professional business card layout created with Canva.",
        type: "graphics"
    }
]

export { projectsData, servicesData }

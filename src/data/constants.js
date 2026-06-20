import hvacImage from "../assets/HVAC.jpg";
import plumbingImage from "../assets/Plumbing.jpg";
import electricalImage from "../assets/Electrical.jpg";
import tileImage from "../assets/tiles.jpg";
import carpentryImage from "../assets/carpentry.jpg";
import paintingImage from "../assets/painting.jpg";
import MechaicalMaintenanceImage from "../assets/MechanicalMaintenance.jpg";
import {
  Snowflake,
  Wrench,
  Zap,
  Settings,
  Paintbrush,
  Building,
  Grid,
  Hammer,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "HVAC Systems",
    description:
      "Air Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance",
    icon: Snowflake,
    image: hvacImage,
  },
  {
    id: 2,
    title: "Plumbing Services",
    description:
      "Sanitary Installation & Pipe Repairing for residential and commercial properties",
    icon: Wrench,
    image: plumbingImage,
  },
  {
    id: 3,
    title: "Electrical Services",
    description:
      "Electrical Fittings & Fixtures Repair & Maintenance",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
  },
  {
    id: 4,
    title: "Electromechanical Works",
    description:
      "Electromechanical Equipment Installation & Maintenance",
    icon: Settings,
    image: electricalImage,
      
  },
  {
    id: 5,
    title: "Painting Works",
    description:
      "Professional Interior & Exterior Painting Services",
    icon: Paintbrush,
    image:paintingImage,
     
  },
  {
    id: 6,
    title: "False Ceiling & Partitions",
    description:
      "Modern False Ceiling & Light Partition Solutions",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
  {
    id: 7,
    title: "Tiling & Plaster Works",
    description:
      "Professional Floor & Wall Tiling and Plaster Works",
    icon: Grid,
    image:tileImage,
      
  },
  {
    id: 8,
    title: "Carpentry & Wood Flooring",
    description:
      "Premium Carpentry and Wood Flooring Services",
    icon: Hammer,
    image:carpentryImage,
      
  },
  {
    id: 9,
    title: "Mechanical Maintenance",
    description:
      "Mechanical Systems Installation & Preventive Maintenance",
    icon: Settings,
    image: MechaicalMaintenanceImage,
  },
];

export const stats = [
  {
    number: "500+",
    title: "Projects Completed",
  },
  {
    number: "120+",
    title: "Happy Clients",
  },
  {
    number: "15+",
    title: "Years Experience",
  },
  {
    number: "24/7",
    title: "Support Service",
  },
];

export const testimonials = [
  {
    name: "Ahmed Hassan",
    company: "Dubai Marina",
    review:
      "Excellent HVAC and maintenance services. Highly professional team.",
  },
  {
    name: "John Mathew",
    company: "Business Bay",
    review:
      "Delivered our office fit-out project on time with outstanding quality.",
  },
  {
    name: "Sarah Khan",
    company: "JLT",
    review:
      "Reliable electrical and plumbing support for our commercial property.",
  },
];
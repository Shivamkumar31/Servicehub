// src/data/mockdata.js
import {
  FaTools,
  FaGraduationCap,
  FaPaw,
  FaCamera,
  FaStar,
} from "react-icons/fa";

export const categories = [
  {
    name: "Plumbing",
    icon: FaTools,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "Pipes • Leaks • Bathroom",
  },
  {
    name: "Electrician",
    icon: FaTools,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    description: "Wiring • Fans • Lights",
  },
  {
    name: "Carpentry",
    icon: FaTools,
    color: "bg-red-100",
    iconColor: "text-red-600",
    description: "Furniture • Doors • Repair",
  },
  {
    name: "Tutoring",
    icon: FaGraduationCap,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    description: "Maths • Science • Home Tutor",
  },
  {
    name: "Photography",
    icon: FaCamera,
    color: "bg-green-100",
    iconColor: "text-green-600",
    description: "Events • Portrait • Product",
  },
  {
    name: "Pet Care",
    icon: FaPaw,
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    description: "Grooming • Walking • Care",
  },
];

export const StarIcon = FaStar;


export const services = 
  // 🔧 PLUMBING
  
[
  {
    id: 1,
    title: "Plumbing Fixes",
    category: "Plumbing",
    rating: 5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "Bathroom Leak Repair",
    category: "Plumbing",
    rating: 4.8,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: 3,
    title: "Kitchen Sink Installation",
    category: "Plumbing",
    rating: 4.9,
    reviews: 14,
    image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=800&q=80",
  },

  // ⚡ ELECTRICIAN
  {
  id: 4,
  title: "Electric Repair",
  category: "Electrician",
  rating: 5,
  reviews: 10,
  image: "https://images.unsplash.com/photo-1581092918387-6a6c7c3fa2fd?auto=format&fit=crop&w=800&q=80",
},
{
  id: 5,
  title: "Fan & Light Installation",
  category: "Electrician",
  rating: 4.7,
  reviews: 8,
  image: "https://images.unsplash.com/photo-1600474661221-8d967b960c73?auto=format&fit=crop&w=800&q=80",
},
{
  id: 6,
  title: "Complete Wiring Check",
  category: "Electrician",
  rating: 4.9,
  reviews: 15,
  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
},

  // 🪚 CARPENTRY
  {
    id: 7,
    title: "Furniture Repair",
    category: "Carpentry",
    rating: 4.9,
    reviews: 11,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
  },
  {
    id: 8,
    title: "Door & Window Work",
    category: "Carpentry",
    rating: 4.8,
    reviews: 7,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 9,
    title: "Custom Wood Furniture",
    category: "Carpentry",
    rating: 5,
    reviews: 6,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
  },

  // 📚 TUTORING
  {
    id: 10,
    title: "Math Home Tutoring",
    category: "Tutoring",
    rating: 5,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    id: 11,
    title: "Science Coaching",
    category: "Tutoring",
    rating: 4.8,
    reviews: 13,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    id: 12,
    title: "Private Home Tutor",
    category: "Tutoring",
    rating: 4.9,
    reviews: 10,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
  },

  // 📸 PHOTOGRAPHY
  {
    id: 13,
    title: "Event Photography",
    category: "Photography",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80",
  },
  {
    id: 14,
    title: "Portrait Photography",
    category: "Photography",
    rating: 4.9,
    reviews: 16,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
  },
  {
    id: 15,
    title: "Product Photography",
    category: "Photography",
    rating: 4.8,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
  },

  // 🐾 PET CARE
  {
    id: 16,
    title: "Dog Grooming",
    category: "Pet Care",
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80",
  },
  {
    id: 17,
    title: "Pet Walking Services",
    category: "Pet Care",
    rating: 4.7,
    reviews: 11,
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&q=80",
  },
  {
    id: 18,
    title: "Pet Health Check",
    category: "Pet Care",
    rating: 4.8,
    reviews: 7,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80",
  },
];






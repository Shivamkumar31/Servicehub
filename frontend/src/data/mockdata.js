// src/data/mockData.js
import {
  FaTools,
  FaGraduationCap,
  FaPaw,
  FaCamera,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

// Categories based on the image (even the unusual ones)
export const categories = [
  {
    name: "Home Repair",
    icon: FaTools,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Tukang", // This could mean "Handyman" or "Tutor"
    icon: FaGraduationCap,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Pet Care",
    icon: FaPaw,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    name: "Pet Care", // Second "Pet Care" as in the image
    icon: FaCamera,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Photography", // "Photography" with calendar icon as in image
    icon: FaCalendarAlt,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

// Star icon for ratings
export const StarIcon = FaStar;

// Featured services
export const services = [
  {
    id: 1,
    title: "Plumbing Fixes",
    rating: 5,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1505798020935-649a54165692?w=400&q=80",
  },
  {
    id: 2,
    title: "Kitchen Plumbing",
    rating: 5,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1600585154341-9ebc3d0d0324?w=400&q=80",
  },
  {
    id: 3,
    title: "Photography",
    rating: 5,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1519638831568-d989787bf6ca?w=400&q=80",
  },
  {
    id: 4,
    title: "Plumbing Tools",
    rating: 5,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1587711453214-c43232029307?w=400&q=80",
  },
  // --- NEW DATA ADDED BELOW ---
  {
    id: 5,
    title: "Dog Grooming",
    rating: 4,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1590812803866-3f2f36f453b3?w=400&q=80",
  },
  {
    id: 6,
    title: "Math Tutoring",
    rating: 5,
    reviews: 7,
    image: "https://images.unsplash.com/photo-1596495577886-d923f042a345?w=400&q=80",
  },
  {
    id: 7,
    title: "Carpentry",
    rating: 5,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1579951663144-8add6ac8d447?w=400&q=80",
  },
];
import bg_programs from "./bg_programs.jpg";
import features_background from "./features_background.jpg";
import footer_image from "./footer_image.jpg";
import gym_1 from "./gym_1.jpg";
import gym_2 from "./gym_2.jpg";
import gym_3 from "./gym_3.jpg";
import gym_4 from "./gym_4.jpg";
import gym_5 from "./gym_5.jpg";
import hero from "./hero.jpg";
import team_1 from "./team_1.jpg";
import team_2 from "./team_2.jpg";
import team_3 from "./team_3.jpg";
import team_4 from "./team_4.jpg";
import More from "./More.jpg";
import News_1 from "./News_1.jpg";
import News_2 from "./News_2.jpg";
import News_3 from "./News_3.jpg";
import News_4 from "./News_4.jpg";
import About_img from "./About_img.jpg";
import Extra from './Extra.jpg'

export const assets = {
  bg_programs,
  features_background,
  footer_image,
  gym_1,
  gym_2,
  gym_3,
  gym_4,
  gym_5,
  hero,
  team_1,
  team_2,
  team_3,
  team_4,
  News_1,
  News_2,
  News_3,
  News_4,
  More,
  About_img,
  Extra,
};
export const workingDay = [
  { id: 1, img: assets.gym_1, day: "MONDAY 10:00AM", title: "OPEN TRAINING" },
  { id: 2, img: assets.gym_2, day: "TUESDAY 11:00AM", title: "WEIGHT LIFT" },
  { id: 3, img: assets.gym_3, day: "WEDNESDAY 1:00PM", title: "STRETCH" },
  { id: 4, img: assets.gym_4, day: "THURSDAY 10:00AM", title: "CARDIO" },
  { id: 5, img: assets.gym_5, day: "FRIDAY 11:00AM", title: "YOGA" },
];
export const departments=[
  {id:1, point:"Fitness"},
  {id:2, point:"GYM"},
  {id:3, point:"Powerlifting"},
  {id:4, point:"Circuit"},
  {id:5, point:"Boot Camp"},
]

export const teamMem = [
  {
    id: 1,
    img: assets.team_1,
    name: "Joshua Bronn",
    role: "CrossFit Coach",
    description:
      "Trains individuals in functional fitness and varied workouts.",
  },
  {
    id: 2,
    img: assets.team_2,
    name: "Dwin Johnson",
    role: "Fitness Coach",
    description: "Helps with physique development, bulking, and cutting.",
  },
  {
    id: 3,
    img: assets.team_3,
    name: "Aliana Queen",
    role: "Kickboxing Trainer",
    description: "	Combines martial arts with cardio workouts diet plans.",
  },
];
export const latestNews = [
  {
    id: 1,
    img: assets.News_3,
    heading: "What Discipline Is?",
    description:
      "Most of us can agree that discipline is one of the most important virtues …",
    time: "Tue 12 Jul 2016 6:07 AM",
  },
  {
    id: 2,
    img: assets.News_2,
    heading: "Quality Before Intensity",
    description:
      "Thanks to social media accounts, we live in a time where the fitness…",
    time: "Tue 12 Jul 2016 6:03 AM",
  },
  {
    id: 3,
    img: assets.News_1,
    heading: "Toes-to-Bar Mount",
    description:
      "At Kettlebell we have seen so many great athletes struggle on…",
    time: "Sat 25 Jun 2016 5:59 AM",
  },
  {
    id: 4,
    img: assets.News_4,
    heading: "Handstand Walk",
    description:
      "Handstand walking can be a fun and impressive skill to master…",
    time: "Sun 12 Jun 2016 11:40 AM",
  },
];

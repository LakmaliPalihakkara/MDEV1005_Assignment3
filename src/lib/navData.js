import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import CalculateIcon from "@mui/icons-material/Calculate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    icon: <TravelExploreIcon />,
    text: "Services",
    link: "../sevices",
  },

  {
    id: 2,
    icon: <CalculateIcon />,
    text: "Calculator",
    link: "../tools",
  },
  {
    id: 3,
    icon: <CalendarMonthIcon />,
    text: "Calendar",
    link: "../calender",
  },
];

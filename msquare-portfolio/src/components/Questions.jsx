import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Questions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="md:mt-16 mt-6">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="border border-l-[#D4AF37] border-l-4 p-2"
      >
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "95%",
              flexShrink: 0,
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "sans-serif",
            }}
          >
            How Long does it take to build the project?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* I am an accordion */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "sans-serif", fontSize: 18 }}>
            The timeline for a project can vary significantly depending on its
            scope. On average, our website design and development projects take
            3-5 months to complete, UI/UX projects take 2-4 months, and
            application development projects take 5-12 months.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="mt-6 border border-l-[#D4AF37] border-l-4 p-2"
      >
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "95%",
              flexShrink: 0,
              fontSize: 20,
              fontWeight: "bold",

              fontFamily: "sans-serif",
            }}
          >
            What is the price of the project?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* You are currently not an owner */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "sans-serif", fontSize: 18 }}>
            The cost of a project is based on various factors such as the number
            of pages, design complexity, and custom coding requirements. In
            general, our website design and development projects, as well as
            UI/UX projects, typically cost between $40,000 and $80,000. More
            intricate projects may have a higher price range.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="mt-6 border border-l-[#D4AF37] border-l-4 p-2"
      >
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: "95%",
              flexShrink: 0,
              fontSize: 20,
              fontWeight: "bold",

              fontFamily: "sans-serif",
            }}
          >
            What size and type of companies do you work with?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* Filtering has been entirely disabled for whole web server */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "sans-serif", fontSize: 18 }}>
            We have worked with a wide range of companies, including start-ups,
            small businesses, non-profits, and enterprise clients across various
            industries. To see examples of the web design projects we have
            completed, please visit our portfolio.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="mt-6 border border-l-[#D4AF37] border-l-4 p-2"
      >
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: "95%",
              flexShrink: 0,
              fontSize: 20,
              fontWeight: "bold",

              fontFamily: "sans-serif",
            }}
          >
            Will you be there for me after the website is completed{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "sans-serif", fontSize: 18 }}>
            Yes, we will be available for two weeks after the project is handed
            off and approved to offer any necessary assistance. If you need
            additional support beyond this time, our team is available for
            additional work at an additional cost.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Questions;

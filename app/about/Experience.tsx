import { experienceData } from "@/components/DataComponent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <VerticalTimeline lineColor="#F13024">
      {experienceData.map((item, index) => {
        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work cursor-pointer hover:scale-105 transition-all duration-300"
            contentStyle={{
              backgroundColor: "rgba(65,47,123,0.15)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(65,47,123,0.15)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{ background: "black", color: "#fff" }}
            dateClassName="mx-5"
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        );
      })}
      <VerticalTimelineElement
        iconStyle={{ background: "#F13024", color: "#fff" }}
      />
    </VerticalTimeline>
  );
};

export default Experience;

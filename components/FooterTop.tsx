import { Calendar, MailOpen, MapPin, Workflow } from "lucide-react";
import React from "react";
import Container from "./Container";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: Props[] = [
  {
    title: "Visit Us",
    subtitle: "Kuorkaneenkatu 13, 2 Floor, Helsinki",
    icon: (
      <MapPin className="text-gray600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sun 18:00 - 23:00",
    icon: (
      <Calendar className="text-gray600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "tangoclubhki@gmail.com",
    icon: (
      <MailOpen className="text-gray600 group-hover:text-darkColor transition-colors" />
    ),
  },
];

const ContactItem = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon}
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-darkColor transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

function FooterTop() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b">
        {data?.map((item, i) => (
          <ContactItem
            key={i}
            icon={item?.icon}
            title={item?.title}
            subtitle={item?.subtitle}
          />
        ))}
      </div>
    </>
  );
}

export default FooterTop;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";

const faqsData = [
  {
    question: "What kind of tango classes do you offer?",
    answer:
      "We offer beginner to advanced classes, private lessons, technique workshops, and fun social dances called milongas!",
  },
  {
    question: "Do I need a partner to learn tango?",
    answer:
      "Not at all! You can come solo and we’ll pair you up in class, or join with a friend or partner.",
  },
  {
    question: "Who can join your classes?",
    answer:
      "Everyone is welcome—any age, any skill level, from complete beginners to seasoned dancers.",
  },
  {
    question: "How long are the classes?",
    answer:
      "Our regular classes are 1 hour long, while special workshops and events may last 2 hours or more.",
  },
  {
    question: "Are private lessons available?",
    answer:
      "Yes! Private lessons are perfect if you want personalized guidance and faster progress.",
  },
  {
    question: "Where are the classes held?",
    answer:
      "Classes take place at our cozy studio at [insert address], designed to give you the perfect tango experience.",
  },
];

function FaqPage() {
  return (
    <>
      <Container>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {faqsData.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="group"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-darkColor/80 group-hover:text-darkColor hover:no-underline hoverEffect">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </>
  );
}

export default FaqPage;

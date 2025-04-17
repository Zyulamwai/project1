import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What materials do you work with?",
    answer: "We work with a wide range of engineering plastics including ABS, PC, PMMA, POM, PA, PP, and specialized materials. Our expertise covers both standard and high-performance materials suitable for various industries."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our MOQ varies depending on the product complexity, material requirements, and tooling costs. Generally, we recommend a minimum of 1,000 pieces for standard parts. Please contact us for specific requirements."
  },
  {
    question: "How long does it take to develop a new mold?",
    answer: "Typical mold development time ranges from 25-45 days, depending on complexity. This includes design, manufacturing, testing, and optimization phases. We provide detailed timelines during project quotation."
  },
  {
    question: "Do you provide design assistance?",
    answer: "Yes, our engineering team offers comprehensive design for manufacturing (DFM) support. We can help optimize your design for injection molding, suggest material alternatives, and identify potential cost savings."
  },
  {
    question: "What quality certifications do you have?",
    answer: "We are ISO 9001:2015 certified and maintain IATF 16949 certification for automotive projects. Our facility is also FDA registered for medical device manufacturing."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve various industries including automotive, consumer electronics, medical devices, industrial equipment, and consumer goods. Each industry has specific requirements that we're well-equipped to meet."
  }
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our injection molding and manufacturing services
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p className="text-muted-foreground">
                Can't find what you're looking for? Contact our support team for assistance.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
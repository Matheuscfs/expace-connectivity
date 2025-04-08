
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-2 gap-8">
        <img 
          src="/placeholder.svg" 
          alt="Contact" 
          className="w-full"
        />
        <form className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Textarea placeholder="Message" />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </section>
  );
};

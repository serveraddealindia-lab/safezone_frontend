import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && consent) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setConsent(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted border-t border-border">
      <div className="container mx-auto px-4">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-[1fr_2fr_auto] gap-6 items-end"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Subscribe to stay up to date on all the latest news
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border border-border peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center">
                    {consent && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  I consent to Safe Zone contacting me with news, service
                  information and other updates
                </span>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={submitted}
              className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors disabled:opacity-50"
            >
              {submitted ? (
                <>
                  Subscribed!
                  <Check className="w-4 h-4 text-primary" />
                </>
              ) : (
                <>
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;

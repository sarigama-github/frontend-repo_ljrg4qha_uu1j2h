import { motion } from 'framer-motion';

const brands = ['Stripe', 'Notion', 'Shopify', 'HubSpot', 'Slack', 'Linear'];

export default function Logos() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide text-white/60">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#1a1423] text-[#f5eaff] font-[cursive] px-4 py-8 sm:px-6 sm:py-10 md:px-16 md:py-16 overflow-hidden">
      {/* Stars */}
      {[...Array(70)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Header */}
      <section className="text-center mb-14 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold">hi, i’m cookie</h1>
        <p className="mt-4 text-base sm:text-lg text-[#d3c1e5] max-w-xl mx-auto">
          this page doesn’t try hard. it's just me—slightly undone, but beautifully trying.
        </p>
      </section>

      {/* Poetry Drop */}
      <section className="max-w-2xl mx-auto mb-12 text-center italic text-[#cdb7e8] px-2">
        <p>
          i don't always bloom, <br />
          but when i do, it's in silence. <br />
          no fireworks, just moonlight <br />
          and a quiet kind of real.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-2xl mx-auto space-y-6 mb-16 px-2">
        <p>
          i used to be really good at solving things. quick, sharp, no detours.
          now i’m learning that there’s a kind of magic in slowing down,
          sitting with it all, and letting it feel.
        </p>
        <p>
          i don’t want to be someone who only makes things work—
          i want to make things that *feel* like someone’s favorite hoodie.
        </p>
      </section>

      {/* Cozy corner list */}
      <section className="max-w-2xl mx-auto mb-16 px-2">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">things that feel like me</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#dac5f5]">
          <li>rekka’s glow when she’s happy (yes, she glows)</li>
          <li>accidentally making the perfect ghee tadka</li>
          <li>playing valorant like it’s poetry in motion… until it’s not</li>
          <li>avoiding drawing but still feeling colors deeply</li>
          <li>biryani on a good day, billie eilish on a bad one</li>
        </ul>
      </section>

      {/* Current self */}
      <section className="max-w-2xl mx-auto mb-16 px-2">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">right now, i'm...</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#dac5f5]">
          <li>soft-launching my old self with better boundaries</li>
          <li>learning BI with the hope it doesn’t bore me</li>
          <li>building this little website to show people how i *feel* my way through work</li>
          <li>still not drawing, but that's okay</li>
        </ul>
      </section>

      {/* Outro */}
      <footer className="text-center text-sm text-[#cab6e8] mt-20 px-2">
        <p>
          if you stayed this long, maybe you get it.<br />
          maybe you're like me—still figuring it out, but with softness. 🌜
        </p>
      </footer>
    </main>
  );
}

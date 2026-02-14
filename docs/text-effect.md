I want to apply some animation. In the hero

I want the h1 and p text to animate like the code below:
the h1 should use the text effect and the p text should use the motion div. 
the stripe also needs to use the motion div and load in around the same time as the word without loads in from the text-effect

"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { motion } from "motion/react";
import { CTAButton } from "@/components/contact/cta-button";

export function TextEffectDesktop() {
  return (
    <div className="hidden md:flex md:flex-col gap-0 md:gap-4 ">
      <div className="flex flex-col space-y-0">
        <TextEffect
          per="char"
          className="text-sm md:text-2xl font-medium tracking-[-0.03em] font-sans text-white"
          delay={0.5}
          variants={{
            container: {
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.03,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                rotateX: 90,
                y: 10,
              },
              visible: {
                opacity: 1,
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            },
          }}
        >
          Beautiful websites and AI-powered experiences,
        </TextEffect>
        <TextEffect
          per="char"
          delay={1.5}
          className="text-sm md:text-2xl font-medium tracking-[-0.03em] font-sans text-white"
        >
          Engineered for agencies and small businesses.
        </TextEffect>
      </div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeIn",
          delay: 2.5,
        }}
      >
        <CTAButton size="lg" className="hidden md:block" />
      </motion.div>
    </div>
  );
}


I also want the prompt input and the svg logos underneath to animate up and in like this code does

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { DottedBorder } from "@/lib/dotted-border";
import { TextEffectMobile } from "./text-two";
import { TextEffectDesktop } from "./text";

export default function Hero() {
  return (
    <div className="mx-auto px-4 pt-24 md:pt-28 ">
      <div className="max-w-[1300px] mx-auto flex flex-col mb-24 md:mb-14">
        <TextEffectDesktop />
        <TextEffectMobile />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col">
        <motion.div
          className="relative aspect-2/2 md:aspect-1300/650 bg-[#151515]"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3,
          }}
        >
          <DottedBorder className="hidden md:block" />
          <Image
            src="/sl-hero-7.png"
            alt="Hero image"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAUAEsDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAABQYHCAQD/8QAKhAAAgEDAwMDBAMBAAAAAAAAAQIDBAURBhIhAAcTMUFRFCJhcYGRobH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQFAf/EACERAAICAQQCAwAAAAAAAAAAAAECAAMRBBIhQRMxUWFx/9oADAMBAAIRAxEAPwDT9Rqu3dvvUNddaOyot2pLjUz1VZTQyeOR5nLs7EbsHJJ44+OiNl7yaW1VYodRWG7UtTa7hGJqWr8DhXTggkFSCDkEfvqQ9y73c7L3asNdbLnPRqaAwl4mwHXzrkMP7HRLsbqq4R9l9MR1l4r6mE0gCLPOzqo3t6An5zj+ejXNbOtYw2fqVKuS0sG5jJdb5YrdRy1sWobNNDE2140qAZJD7AD4J59B0l6X7t6f1rqCDT9snq2rp45JlaWAwptQAnkn8jovrzW1ttukNP1pKaGS0TUlbUtQpIYWnUL4lDZ8bAhi3uQAOcnpM7N60ulm7vWC4UN0rKRPhp0njpn2xysYwN6joVsxSrIc5P1JtTSKyhhzNg9tNYX6W13ix6KumrdL2gIsNwmqC9I8xLZaEKAhAHCq+RxnGM50P1x2e1zYLXVfXdwYNQVcfnSOlvBrIw6kEIyNhSRxyRk/OOkDsLdK2HuJaKqmrKqnq4zI6SwSsjq3jYZBH7HXb3J19qCo1hc7fXam1HPQUs7xQwR1sqRhFJAAQHA/XSNPdYNQ9RGYWnqtZb3zNJW/VcWhO1dvtlNqKxV17o4aGqlNEKiOvkCuCEVdx+7HPOef4GebC0Py2sLrT0lTqbUtbRxT/dFFcZ3jVsEdAwPxxj0PWfNUahr6jT9ho5btcJ6WijkEEU1S7pGGYFgoJ4yQM49cdLtz1BeKHUNzsNPqW8fRVkyyVNO1ZIVZirKcHOQcOcdIYlhgCOAUDBM/9k="
            className="object-cover object-[65%_80%] md:object-center"
          />
        </motion.div>
      </div>
    </div>
  );
}


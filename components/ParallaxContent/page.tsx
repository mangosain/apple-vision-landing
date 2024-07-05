"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextParallaxContent = () => {
  return (
    <div className="bg-white">
      <ParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1718198497331-bd110648a00d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={`VISION PRO`}
        heading={`Step into the future.`}
      >
        <TextContent />
      </ParallaxContent>
      <ParallaxContent
        imgUrl="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={`COLLABORATE.`}
        heading={`Built for all of us.`}
      >
        <TextContent />
      </ParallaxContent>
      <ParallaxContent
        imgUrl="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={`INSPIRED.`}
        heading={`Built to impress.`}
      >
        <TextContent />
      </ParallaxContent>
    </div>
  );
};

const img_padding = 12;

const ParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: img_padding, paddingRight: img_padding }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${img_padding * 2}px)`,
        top: img_padding,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ heading, subheading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-4xl font-bold md:text-7xl"
      >
        {subheading}
      </motion.p>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-2 text-center text-xl md:mb-4 md:text-3xl"
      >
        {heading}
      </motion.p>
    </motion.div>
  );
};

const TextContent = () => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Additional Content explaining the above heading
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl to-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eum
          aspernatur ipsum? Itaque nostrum repellendus voluptatem hic? Repellat
          provident tempore at unde, quasi reiciendis ea harum, laboriosam
          itaque cumque temporibus commodi et eaque asperiores alias minima est
          perferendis? Rerum vel laboriosam quas sed, deleniti tempore numquam
          cumque dolores mollitia unde.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          quibusdam illum in laudantium aliquid, labore ipsam aspernatur fugiat
          modi nulla?
        </p>
        <button className="w-full rounded-full bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
          Learn More <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default TextParallaxContent;

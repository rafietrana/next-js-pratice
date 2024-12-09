import Link from "next/link";
import React from "react";

const Aboutlayout = ({ children }) => {
  return (
    <main>
      <div>
      <nav><ul>
          <Link href="/about/mission">Mission</Link>
          </ul>
          <ul>
          <Link href="/about/vision">vision</Link>
          </ul>
          </nav>
        {children}
      </div>
    </main>
  );
};

export default Aboutlayout;
